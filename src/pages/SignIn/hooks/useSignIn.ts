import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../../services/authServices";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import { useContext } from "react";
import { AuthContext } from "../../../contants/contants";

export const useSignIn = () => {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const cookies = new Cookies(null, { path: "/" });
    return useMutation({
        mutationFn: (username: string) => {
            if (username.trim() === "") {
                throw new Error("Username can't be empty");
            }
            return signIn(username.trim());
        },
        mutationKey: ["signin"],
        onSuccess: (data) => {
            const { accessToken, refreshToken } = data;

            cookies.set("accessToken", accessToken, {
                path: "/",
                maxAge: 60,
                secure: true,
                sameSite: "strict",
            });

            cookies.set("refreshToken", refreshToken, {
                path: "/",
                maxAge: 24 * 60 * 60,
                secure: true,
                sameSite: "strict",
            });
            authContext?.dispatch({
                type: "LOGIN",
                payload: {
                    accessToken,
                    refreshToken,
                },
            });
            navigate("/");
        },
    });
};
