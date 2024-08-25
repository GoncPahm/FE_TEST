import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePosts, updatePosts } from "../../../services/postsServices";
import { postSchema } from "../../../contants/contants";

interface updatePost {
    id: string;
    formData: postSchema;
}

export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["updatePost"],
        mutationFn: ({ id, formData }: updatePost) => updatePosts(id, formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
};
