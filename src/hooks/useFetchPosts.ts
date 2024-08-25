import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/postsServices";

interface queryPosts {
    page: number;
    title: string;
    tags: string;
}

export const useFetchPosts = (query: queryPosts) => {
    const postsData = useQuery({
        queryKey: ["posts", query],
        queryFn: () => getPosts(query.page, query.title, query.tags),
    });

    return postsData;
};
