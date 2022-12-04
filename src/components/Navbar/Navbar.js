/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import Tooltip from "@mui/material/Tooltip";
import { FaMoon, FaSun } from "react-icons/fa";

import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function Navbar({
    language,
    setLanguage,
    menu,
    darkMode,
    toggleDarkMode,
}) {
    return (
        <Popover className="relative">
            <div className=" mx-auto lg:px-8 sm:px-2 md:px-2 md:py-2 sm:py-0 lg:py-2 ">
                <div className="flex justify-between items-center p-4 sm:p-1  md:justify-start md:space-x-10 border-b-2 border-thi3">
                    <div className="basis-1/4">
                        <div className=" portrait:hidden flex items-center justify-start  ">
                            {menu?.map((item) => (
                                <Tooltip
                                    title={item.name}
                                    arrow
                                    key={item.name}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-base font-medium text-thi5 dark:text-thi1 dark:hover:text-thi2 hover:text-thi4 mr-5"
                                    >
                                        {item.icon}
                                    </Link>
                                </Tooltip>
                            ))}
                        </div>
                    </div>
                    <div className="flex basis-1/2  justify-center">
                        <Link
                            href="#"
                            className=" text-4xl  text-thi5 dark:text-thi1 font-light "
                        >
                            Coding With Thi.
                        </Link>
                    </div>

                    <div className="basis-1/4 ">
                        <div className="flex items-center justify-end ">
                            <Tooltip title="Dark Mode" arrow>
                                <button
                                    onClick={toggleDarkMode}
                                    className="text-thi5 dark:text-thi1 hover:text-thi4 dark:hover:text-thi2 mr-5"
                                >
                                    {darkMode ? <FaSun /> : <FaMoon />}
                                </button>
                            </Tooltip>
                            {language === "pt" ? (
                                <Tooltip title="EN-us" arrow>
                                    <button onClick={() => setLanguage("en")}>
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
                                    <button onClick={() => setLanguage("pt")}>
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
                        </div>
                    </div>
                </div>
            </div>
        </Popover>
    );
}
