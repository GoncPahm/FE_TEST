import React from "react";
import Logo from "./Logo";
import { TiSocialYoutube } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
    return (
        <div className="py-20 mx-auto grid grid-cols-2 gap-10 px-16">
            <div>
                <div className="flex items-center gap-2">
                    <Logo />
                    <h1 className="text-heading font-semibold text-xl">DataWarehouse</h1>
                </div>
                <p className="text-heading font-bold mt-16 mb-8 max-w-[260px]">
                    Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                </p>
                <p className="italic font-thin text-subheading">info@warehouse.project</p>
                <p className="italic font-thin text-subheading">1-232-3434 (Main)</p>
            </div>

            <div className="grid grid-cols-2 gap-10 text-center">
                <div className="grid grid-cols-2 text-center">
                    <div>
                        <h1 className="text-heading font-bold">About</h1>
                        <ul className="flex flex-col items-center gap-4 mt-6">
                            <li className="text-heading font-semibold">Profile</li>
                            <li className="text-heading font-semibold">Features</li>
                            <li className="text-heading font-semibold">Careers</li>
                            <li className="text-heading font-semibold">DW News</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className="text-heading font-bold">Help</h1>
                        <ul className="flex flex-col items-center gap-4 mt-6">
                            <li className="text-heading font-semibold">Support</li>
                            <li className="text-heading font-semibold">Sign up </li>
                            <li className="text-heading font-semibold">Guide</li>
                            <li className="text-heading font-semibold">Reports</li>
                            <li className="text-heading font-semibold">Q&A</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className="text-heading font-bold text-center">Social Media</h1>
                    <ul className="flex gap-6 justify-center mt-4">
                        <li className="p-4 rounded-full bg-[#212353] bg-opacity-10 cursor-pointer hover:bg-opacity-30 transition-all">
                            <TiSocialYoutube className="text-white" />
                        </li>
                        <li className="p-4 rounded-full bg-[#212353] bg-opacity-10 cursor-pointer hover:bg-opacity-30 transition-all">
                            <IoLogoInstagram className="text-white" />
                        </li>
                        <li className="p-4 rounded-full bg-[#212353] bg-opacity-10 cursor-pointer hover:bg-opacity-30 transition-all">
                            <FaGithub className="text-white" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
