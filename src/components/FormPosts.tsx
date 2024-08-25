import React, { useState } from "react";
import { useFetchPostTags } from "../hooks/useFetchPostTags";
import { postSchema } from "../contants/contants";
import { FaXmark } from "react-icons/fa6";
import { title } from "process";
import axiosServices from "../services/axiosServices";
import { updatePosts } from "../services/postsServices";
import { useUpdatePost } from "../pages/Profile/hooks/useUpdatePost";
import { useCreatePost } from "../pages/Profile/hooks/useCreatePost";
import Loading from "./Loading";

interface FormPost {
    post: postSchema;
    action: string;
    handleHidden: Function;
}

export default function FormPosts({ post, action, handleHidden }: FormPost) {
    const tagsData = useFetchPostTags();
    const { status: isFetchTags, data: tags } = tagsData;
    const [formData, setFormData] = useState(post);

    const { mutate: mutateUpdate, isSuccess: updateSuccess } = useUpdatePost();
    const { mutate: mutateCreate, isSuccess: createSuccess } = useCreatePost();

    return (
        <div className="flex justify-center items-center bg-black bg-opacity-20 fixed top-0 bottom-0 right-0 left-0 z-50">
            <form className="flex flex-col justify-center items-center bg-white gap-6 border p-6 rounded-lg w-[400px] h-[500px] relative">
                <FaXmark
                    className="absolute right-6 top-6 text-2xl hover:text-orange-500 cursor-pointer"
                    onClick={() => handleHidden()}
                />
                <h1 className="font-bold text-xl">{action === "CREATE" ? "CREATE POST" : "UPDATE POST"}</h1>
                <input
                    placeholder="Title"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            title: e.target.value,
                        }))
                    }
                    className="border border-slate-500 ps-6 pe-10 py-2 rounded-lg outline-none w-full"
                />
                <input
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }))
                    }
                    className="border border-slate-500 ps-6 pe-10 py-2 rounded-lg outline-none w-full"
                />
                <select
                    className="border border-slate-500 ps-6 pe-10 py-2 rounded-lg outline-none w-full"
                    value={formData.tags[0].tag}
                    onChange={(e) =>
                        setFormData((prev) => ({
                            ...prev,
                            tags: [{ tag: e.target.value }],
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
                {action === "CREATE" ? (
                    <button
                        className="w-full py-2 color-button rounded-lg flex justify-center items-center"
                        onClick={(e) => {
                            e.preventDefault();
                            mutateCreate({
                                title: formData.title,
                                tags: formData.tags,
                                description: formData.description,
                            });
                            handleHidden();
                        }}
                    >
                        <span className="text-white">CREATE</span>
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="w-full py-2 color-button rounded-lg flex justify-center items-center"
                        onClick={(e) => {
                            e.preventDefault();
                            mutateUpdate({ id: post.id, formData: formData });
                            handleHidden();
                        }}
                    >
                        <span className="text-white">UPDATE</span>
                    </button>
                )}
            </form>
        </div>
    );
}
