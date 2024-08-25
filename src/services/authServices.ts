import Cookies from "universal-cookie";
import { authState } from "../contants/contants";
import axiosServices from "./axiosServices";

export const signIn = async (username: string): Promise<authState> => {
    const res: authState = await axiosServices.post("https://api-test-web.agiletech.vn/auth/login", {
        username: username,
    });
    return res;
};

export const refresh = async (refreshToken: string): Promise<authState> => {
    const res: authState = await axiosServices.post("https://api-test-web.agiletech.vn/auth/refresh-token", {
        refreshToken: refreshToken,
    });
    return res;
};

export const logout = async () => {
    const cookies = new Cookies(null, { path: "/" });
    const accessToken = cookies.get("accessToken");
    await axiosServices.delete("https://api-test-web.agiletech.vn/auth/logout", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
};
