import { useContext, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { AuthContext } from "../contants/contants";
import { useLogout } from "../pages/SignIn/hooks/useLogout";
import { AiOutlineMenu } from "react-icons/ai";
import Loading from "./Loading";
import { FaXmark } from "react-icons/fa6";
export default function Header() {
    const cookies = new Cookies(null, { path: "/" });
    const accessToken = cookies.get("accessToken");

    const { mutate, isPending } = useLogout();
    const [hidden, setHidden] = useState(true);
    const handleLogout = () => {
        mutate();
    };

    return (
        <header className="flex items-center justify-between mx-auto py-5 px-14 lg:px-20 relative">
            <Logo />

            <div className="lg:hidden cursor-pointer" onClick={() => setHidden(!hidden)}>
                {hidden ? <AiOutlineMenu className="text-4xl transition-all" /> : <FaXmark className="text-4xl transition-all" />}
            </div>

            <div
                hidden={hidden}
                className="absolute left-1/2 top-[100%] -translate-x-1/2 bg-[#68c9ba] z-50 p-6 rounded-lg lg:hidden"
            >
                {accessToken ? (
                    <div>
                        <div className="min-w-[360px] py-4">
                            <Link to={"/profile"} className="text-white">
                                Profile
                            </Link>
                        </div>
                        <div onClick={handleLogout} className="min-w-[240px] py-4 text-white cursor-pointer">
                            Log out
                        </div>
                    </div>
                ) : (
                    <div className="min-w-[240px] py-4">
                        <Link to={"/signin"} className="text-white">
                            Sign In
                        </Link>
                    </div>
                )}
            </div>

            {accessToken ? (
                <div className=" lg:flex items-center gap-10 hidden">
                    <Link to={"/profile"} className="color-button text-white px-16 py-3 rounded-full font-semibold">
                        Profile
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="color-button flex justify-center items-center px-16 py-3 rounded-full font-semibold"
                    >
                        {isPending ? <Loading /> : <span className="text-white">Log out</span>}
                    </button>
                </div>
            ) : (
                <Link
                    to={"/signin"}
                    className="color-button text-white px-16 py-3 rounded-full font-semibold hidden lg:block"
                >
                    Sign In
                </Link>
            )}
        </header>
    );
}
