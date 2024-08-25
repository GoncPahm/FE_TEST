import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";
import Cookies from "universal-cookie";

import Loading from "../../components/Loading";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useFetchPostTags } from "../../hooks/useFetchPostTags";
import FormPosts from "../../components/FormPosts";
import { useDeletePost } from "./hooks/useDeletePost";
export default function Profile() {
    const cookies = new Cookies(null, { path: "/" });
    const accessToken = cookies.get("accessToken");
    const [query, setQuery] = useState({
        page: 1,
        title: "",
        tags: "",
    });
    interface TagItem {
        tag: string;
    }

    const handleCovertTags = (key: TagItem[]) => {
        return key.map((item) => item.tag).join(",");
    };
    const [isHidden, setHidden] = useState(true);
    const [formData, setFormData] = useState({
        post: { id: "", title: "", tags: [{ tag: "" }], description: "" },
        action: "CREATE",
    });
    const handleSetHiddenForm = useCallback(() => {
        setHidden(true);
    }, []);
    const postsData = useFetchPosts(query);
    const { status, data } = postsData;

    const tagsData = useFetchPostTags();
    const { status: isFetchTags, data: tags } = tagsData;

    const { mutate: mutateDelete, isSuccess: deleteSuccess } = useDeletePost();

    return (
        <div className="flex-1 p-20">
            {!isHidden && (
                <FormPosts
                    post={{
                        id: formData.post.id,
                        title: formData.post.title,
                        tags: [formData.post.tags[0]],
                        description: formData.post.description,
                    }}
                    action={formData.action}
                    handleHidden={handleSetHiddenForm}
                />
            )}
            <div className="flex justify-between items-center">
                <button
                    className="color-button py-2 px-14 rounded-full text-white font-semibold"
                    onClick={() => {
                        setFormData({
                            post: { id: "", title: "", tags: [{ tag: "" }], description: "" },
                            action: "CREATE",
                        });
                        setHidden(!isHidden);
                    }}
                >
                    Add new
                </button>
                <div className="flex gap-10">
                    <div className="w-[370px] rounded-md border border-slate-950 overflow-hidden">
                        <input
                            type="text"
                            className="w-full outline-none py-2 px-6"
                            placeholder="Title"
                            value={query.title}
                            onChange={(e) =>
                                setQuery((prev) => ({
                                    ...prev,
                                    title: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <select
                        className="w-[370px] rounded-md border border-slate-950 overflow-hidden px-6"
                        value={query.tags}
                        onChange={(e) =>
                            setQuery((prev) => ({
                                ...prev,
                                tags: e.target.value,
                            }))
                        }
                    >
                        <option value={""}>Choose yours tag</option>
                        {isFetchTags === "success" &&
                            tags.map((tag, index) => (
                                <option key={index} value={tag}>
                                    {tag}
                                </option>
                            ))}
                    </select>
                </div>
            </div>

            <div className="p-10">
                <table className="min-w-full">
                    <thead className="bg-gray-200 border-b-8 border-white">
                        <tr>
                            <th className="px-4 py-2 border-r border-slate-950">ID</th>
                            <th className="px-4 py-2 border-r border-slate-950">Title</th>
                            <th className="px-4 py-2 border-r border-slate-950">Description</th>
                            <th className="px-4 py-2 border-r border-slate-950">Tags</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#D9D9D9]">
                        {status === "success" ? (
                            Array.from(data.posts).map((post, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border border-slate-950 text-center">{index}</td>
                                    <td className="px-4 py-2 border border-slate-950 text-center">{post.title}</td>
                                    <td className="px-4 py-2 border border-slate-950 text-center">
                                        {post.description}
                                    </td>
                                    <td className="px-4 py-2 border border-slate-950 text-center">
                                        {handleCovertTags(post.tags)}
                                    </td>
                                    <td className="px-4 py-2 border border-slate-950">
                                        <div className="flex justify-center gap-10">
                                            <button
                                                onClick={() => {
                                                    setFormData({
                                                        post: post,
                                                        action: "UPDATE",
                                                    });
                                                    setHidden(!isHidden);
                                                }}
                                            >
                                                <FaPen />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    mutateDelete(post.id);
                                                }}
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>
                                    <div className="bg-white w-full flex justify-center">
                                        <Loading />
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
