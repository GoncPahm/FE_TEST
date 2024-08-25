import { createContext, Dispatch } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies(null, { path: "/" });
export interface authState {
    accessToken: string;
    refreshToken: string;
}
export interface authAction {
    type: string;
    payload?: {
        accessToken: string;
        refreshToken: string;
    };
}
export interface AuthContextType {
    state: authState;
    dispatch: Dispatch<authAction>;
}

export const initialState: authState = {
    accessToken: cookies.get("accessToken"),
    refreshToken: cookies.get("refreshToken"),
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export interface postSchema {
    id: string;
    title: string;
    description: string;
    tags: [{ tag: string }];
}

export interface createSchema {
    title: string;
    description: string;
    tags: [{ tag: string }];
}
