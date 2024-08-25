import Cookies from "universal-cookie";
import axiosServices from "./axiosServices";
import { createSchema, postSchema } from "../contants/contants";
import { AxiosResponse } from "axios";

const cookies = new Cookies(null, { path: "/" });
const accessToken = cookies.get("accessToken");

export const getPosts = async (page: number, title: string, tags: string): Promise<{ posts: postSchema[] }> => {
    console.log(page, title, tags);
    try {
        const res: { posts: postSchema[] } = await axiosServices.get(
            `https://api-test-web.agiletech.vn/posts?page=${page}&title=${title}&tags=${tags}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return res;
    } catch (error) {
        console.log(error);
        return { posts: [] };
    }
};
export const getPostTags = async (): Promise<string[]> => {
    try {
        const res: string[] = await axiosServices.get(`https://api-test-web.agiletech.vn/posts/tags`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const deletePosts = async (id: string): Promise<void> => {
    try {
        await axiosServices.delete(`https://api-test-web.agiletech.vn/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

export const updatePosts = async (id: string, formData: postSchema): Promise<void> => {
    try {
        await axiosServices.patch(`https://api-test-web.agiletech.vn/posts/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const createPosts = async (formData: createSchema): Promise<postSchema> => {
    try {
        const res: postSchema = await axiosServices.post(`https://api-test-web.agiletech.vn/posts`, formData, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            ...res,
            id: generateUUID(),
        };
    } catch (error) {
        console.log(error);
        return {
            id: generateUUID(),
            title: "",
            description: "",
            tags: [{ tag: "" }],
        };
    }
};
