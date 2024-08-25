import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

export default function ProfileLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    );
}
