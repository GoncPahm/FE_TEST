import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import Cookies from "universal-cookie";

export default function PrivateRoute() {
    const cookies = new Cookies(null, { path: "/" });
    const accessToken = cookies.get("accessToken");
    return accessToken ? <Outlet /> : <Navigate to={'/signin'}/>;
}
