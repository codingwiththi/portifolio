import { Fab } from "@mui/material";
import { useState } from "react";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import AboutMe from "../components/AboutMe/AboutMe";
import FloatingActionButton from "../components/FloatingActionButton";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSession/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    const [language, setLanguage] = useState("pt");

    const menu = [
        {
            name: "Linkedin",
            href: "https://www.linkedin.com/in/thiagomr8/",
            icon: <BsLinkedin />,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/codingwiththi/",
            icon: <BsInstagram />,
        },
        {
            name: "Github",
            href: "https://github.com/thiagomr8",
            icon: <BsGithub />,
        },
        {
            name: "Email",
            href: "mailto:thiagom.r@hotmail.com",
            icon: <BsEnvelope />,
        },
    ];

    return (
        <>
            <div className="bg-thi1">
                <FloatingActionButton />
                <Navbar
                    language={language}
                    setLanguage={setLanguage}
                    menu={menu}
                />
                <Hero language={language} />
                <AboutMe language={language} />
                <Footer menu={menu} />
            </div>
        </>
    );
}
