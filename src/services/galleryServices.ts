import axiosServices from "./axiosServices";

interface gallerySchema {
    id: string;
    desctiption: string;
    imageUrl: string;
}

export const getGalleries = async (): Promise<gallerySchema[]> => {
    const res: gallerySchema[] = await axiosServices.get("https://api-test-web.agiletech.vn/galleries");
    return res;
};
