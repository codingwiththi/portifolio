import { useState } from "react";
import Hero from "../components/HeroSession/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    const [language, setLanguage] = useState("pt");
    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} />
            <Hero language={language} />
        </>
    );
}
