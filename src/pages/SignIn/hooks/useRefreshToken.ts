import { useMutation } from "@tanstack/react-query";
import { refresh } from "../../../services/authServices";
import Cookies from "universal-cookie";
import { useContext } from "react";
import { AuthContext } from "../../../contants/contants";

export const useRefreshToken = () => {
    const authContext = useContext(AuthContext);

    const cookies = new Cookies(null, { path: "/" });
    return useMutation({
        mutationFn: (refreshToken: string) => {
            if (!refreshToken) {
                throw new Error("Unauthorized!!");
            }
            return refresh(refreshToken);
        },
        mutationKey: ["refresh"],
        onSuccess: (data) => {
            const { accessToken, refreshToken } = data;
            cookies.set("accessToken", accessToken, {
                path: "/",
                maxAge: 60,
                secure: true,
                sameSite: "strict",
            });

            authContext?.dispatch({
                type: "REFRESH",
                payload: {
                    accessToken,
                    refreshToken,
                },
            });
        },
    });
};
