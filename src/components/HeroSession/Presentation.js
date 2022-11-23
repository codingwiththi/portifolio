//Create Presentation Component for HeroSection
import { useEffect, useState } from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import { infoEN, infoPT } from "./Info";

function Presentation({ language }) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [buttonText, setButtonText] = useState("");

    useEffect(() => {
        if (language === "pt") {
            setTitle(infoPT.title);
            setSubtitle(infoPT.subtitle);
            setButtonText(infoPT.buttonText);
        } else {
            setTitle(infoEN.title);
            setSubtitle(infoEN.subtitle);
            setButtonText(infoEN.buttonText);
        }
    }, [language]);

    return (
        <>
            <div className="ml-4 p-2  ">
                <p className="text-lg text-accent text-md mb-[22px] text-thi5">
                    {subtitle}
                </p>
                <h1 className="text-thi5 font-[satisfy] text-4xl mb-5 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                    {title}
                </h1>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}

                    className="relative px-6 py-3 mt-16 font-bold text-white group portrait:hidden"

                >
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-thi5 rounded-md group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full border-4 border-thi3 rounded-md"></span>
                    <span className="relative">{buttonText}</span>
                </Link>
            </div>
        </>
    );
}

export default Presentation;
