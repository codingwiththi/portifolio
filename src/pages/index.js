import { Fab } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/HeroSession/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    const [language, setLanguage] = useState("pt");
    return (
        <>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative px-6 py-3 mt-16 font-bold text-white group opacity-60 hover:opacity-100"
            >
                <Fab
                    size="small"
                    aria-label="scroll back to top"
                    style={{
                        margin: 0,
                        top: "auto",
                        right: 20,
                        bottom: 20,
                        left: "auto",
                        position: "fixed",
                    }}
                    className="bg-thi5 text-thi3 hover:text-thi5 hover:bg-thi3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                        />
                    </svg>
                </Fab>
            </Link>
            <Navbar language={language} setLanguage={setLanguage} />
            <Hero language={language} />
            <AboutMe language={language} />
        </>
    );
}
