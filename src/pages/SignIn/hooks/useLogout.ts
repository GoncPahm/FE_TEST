import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../services/authServices";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import { useContext } from "react";
import { AuthContext } from "../../../contants/contants";

export const useLogout = () => {
    const navigate = useNavigate();
    const cookies = new Cookies(null, { path: "/" });
    const authContext = useContext(AuthContext);
    return useMutation({
        mutationFn: () => {
            return logout();
        },
        mutationKey: ["logout"],
        onSuccess: () => {
            cookies.remove("accessToken");
            cookies.remove("refreshToken");
            authContext?.dispatch({
                type: "LOGOUT",
            });
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
