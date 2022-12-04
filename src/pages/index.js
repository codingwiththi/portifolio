import { useState } from "react";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import AboutMe from "../components/AboutMe/AboutMe";
import FloatingActionButton from "../components/FloatingActionButton";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSession/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    const [language, setLanguage] = useState("pt");
    //tailwindcss dark mode toggle button state and function to change it to light mode or dark mode
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

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
            <div className={`${darkMode ? "dark" : ""}`}>
                <div className="bg-thi1 dark:bg-thi5  font-Poppins">
                    <Navbar
                        menu={menu}
                        language={language}
                        setLanguage={setLanguage}
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <Hero language={language} />
                    <AboutMe language={language} />
                    <FloatingActionButton />
                    <Footer />
                </div>
            </div>
        </>
    );
}
