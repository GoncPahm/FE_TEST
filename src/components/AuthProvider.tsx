import React, { useReducer, createContext, ReactNode, useContext, useEffect } from "react";
import { authAction, AuthContext, AuthContextType, authState, initialState } from "../contants/contants";
import { useRefreshToken } from "../pages/SignIn/hooks/useRefreshToken";
import Cookies from "universal-cookie";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const cookies = new Cookies(null, { path: "/" });
    const authReducer = (state: authState, action: authAction): authState => {
        switch (action.type) {
            case "LOGIN":
                return { ...state, ...action.payload };
            case "LOGOUT":
                return { accessToken: "", refreshToken: "" };
            case "REFRESH":
                return { ...state, ...action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(authReducer, initialState);
    const { mutate } = useRefreshToken();
    
    useEffect(() => {
        const idInterval = setInterval(() => {
            mutate(cookies.get("refreshToken"));
        }, 60 * 1000);
        return () => clearInterval(idInterval);
    }, []);

    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}
