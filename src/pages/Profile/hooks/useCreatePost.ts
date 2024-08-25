import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPosts } from "../../../services/postsServices";
import { createSchema } from "../../../contants/contants";


export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["createPost"],
        mutationFn: (formData: createSchema) => createPosts(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
};
