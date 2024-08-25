import React from "react";
import { Outlet } from "react-router";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function SignInLayout() {
    return (
        <div className="mx-auto py-10 px-14">
            <Link to={'/'}>
                <Logo />
            </Link>
            <main className="flex justify-center items-center mt-40">
                <Outlet />
            </main>
        </div>
    );
}
