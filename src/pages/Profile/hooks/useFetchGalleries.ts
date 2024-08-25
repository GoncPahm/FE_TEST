import { useQuery } from "@tanstack/react-query";
import { getGalleries } from "../../../services/galleryServices";

export const useFetchGalleries = () => {
    const postsData = useQuery({
        queryKey: ["galleries"],
        queryFn: getGalleries,
    });

    return postsData;
};
