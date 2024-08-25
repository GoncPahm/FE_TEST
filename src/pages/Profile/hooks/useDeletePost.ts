import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePosts } from "../../../services/postsServices";
import { useFetchPosts } from "../../../hooks/useFetchPosts";

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["deletePost"],
        mutationFn: (id: string) => deletePosts(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
};
