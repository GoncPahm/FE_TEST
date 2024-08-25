import { useQuery } from "@tanstack/react-query";
import { getPostTags } from "../services/postsServices";

export const useFetchPostTags = () => {
    const tagsData = useQuery({
        queryKey: ["postTags"],
        queryFn: getPostTags,
    });

    return tagsData;
};
