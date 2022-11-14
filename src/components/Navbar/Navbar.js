/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import Tooltip from "@mui/material/Tooltip";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { GiBrazilFlag, GiUsaFlag } from "react-icons/gi";

import Link from "next/link";
import { Fragment } from "react";
import ReactCountryFlag from "react-country-flag";

const menu = [
    {
        name: "Linkedin",
        href: "/inicio",
        icon: <BsLinkedin />,
    },
    {
        name: "Instagram",
        href: "/sobre",
        icon: <BsInstagram />,
    },
    {
        name: "Github",
        href: "/habilidades",
        icon: <BsGithub />,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar({ language, setLanguage }) {
    return (
        <Popover className="relative ">
            <div className=" mx-auto px-8 py-2 ">
                <div className="flex justify-between items-center p-4 md:justify-start md:space-x-10 border-b-2 border-thi3">
                    <div className="flex justify-start lg:w-0 lg:flex-1 ">
                        <Link
                            href="#"
                            className="font-[satisfy] text-4xl  text-thi5 font-light "
                        >
                            Coding With Thi.
                        </Link>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex items-center justify-end  ">
                            {menu.map((item) => (
                                <Link
                                    href={item.href}
                                    key={item.name}
                                    className="text-base font-medium text-thi5 hover:text-thi3 ml-5 mt-3 mb-3"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center justify-end ml-5">
                            <div className="flex items-center justify-end ">
                                {language === "pt" ? (
                                    <Tooltip title="EN-us" arrow>
                                        <button
                                            onClick={() => setLanguage("en")}
                                            className="text-base font-medium text-thi5 hover:text-thi3  "
                                        >
                                            <ReactCountryFlag
                                                countryCode="US"
                                                svg
                                                style={{
                                                    width: "2em",
                                                    height: "2em",
                                                }}
                                            />
                                        </button>
                                    </Tooltip>
                                ) : (
                                    <Tooltip title="PT-br" arrow>
                                        <button
                                            onClick={() => setLanguage("pt")}
                                            className="text-base font-medium text-thi5 hover:text-thi3 "
                                        >
                                            <ReactCountryFlag
                                                countryCode="BR"
                                                svg
                                                style={{
                                                    width: "2em",
                                                    height: "2em",
                                                }}
                                                // center the flag vertically in this div
                                            />
                                        </button>
                                    </Tooltip>
                                )}
                                {/* <Link
                                    href="#"
                                    className="text-base font-medium text-thi5 hover:text-thi3 m-2"
                                >
                                    PT <GiBrazilFlag />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-base font-medium text-thi5 hover:text-thi3 m-2"
                                >
                                    EN
                                    <GiUsaFlag />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Popover>
    );
}
