/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import Tooltip from "@mui/material/Tooltip";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function Navbar({ language, setLanguage, menu }) {
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
                            {menu?.map((item) => (
                                <Tooltip
                                    title={item.name}
                                    arrow
                                    key={item.name}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-base font-medium text-thi5 hover:text-thi4 ml-5 mt-3 mb-3"
                                    >
                                        {item.icon}
                                    </Link>
                                </Tooltip>
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
