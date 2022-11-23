import { useEffect, useState } from "react";
import { infoEN, infoPT } from "./Info";
import Timeline from "./Timeline";

export default function AboutMe({ language }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        if (language === "pt") {
            setTitle(infoPT.sidebar.title);
            setDescription(infoPT.sidebar.description);
            setSkills(infoPT.sidebar.skills);
            setTimeline(infoPT.timeline);
        } else {
            setTitle(infoEN.sidebar.title);
            setDescription(infoEN.sidebar.description);
            setSkills(infoEN.sidebar.skills);
            setTimeline(infoEN.timeline);
        }
    }, [language]);

    return (
        <>
            <section id="about" title="about">

                <main
                    id="resume"
                    className="flex flex-row portrait:flex-col-reverse  h-full bg-green-200"
                >
                    <div className="flex-col w-2/3 portrait:flex-row portrait:w-full portrait:text-center">
                        <Timeline timeline={timeline} />
                    </div>
                    <div className="flex-col w-1/3 portrait:flex-row portrait:w-full portrait:text-center p-8 bg-thi5 text-thi1 overflow-auto">

                        <div className=" mb-2 ">
                            <h1 className="text-center text-3xl font-semibold mb-2 text-thi3">
                                Thiago Moreira Ribeiro
                            </h1>
                            <h2 className="text-center text-xl font-light ">
                                {title}
                            </h2>
                            <h2 className=" text-xl font-light p-4">
                                {description}
                            </h2>
                        </div>
                        <div className="font-light text-lg px-2 mb-12 ">
                            <div className="flex flex-col  font-light text-lg px-2 mb-12">
                                <h2 className="text-xl font-semibold  text-thi3">
                                    Skills
                                </h2>
                                {skills.map((skill) => (
                                    <div key={skill.title}>
                                        <h3 className="text-lg font-semibold  text-thi1">
                                            {skill.title}
                                        </h3>
                                        <ul className="grid grid-cols-3">
                                            {skill.list.map((item) => (
                                                <li key={item}>
                                                    <div className="bg-thi4 hover:bg-thi1 hover:text-thi5 p-2 m-1 rounded-md">
                                                        {item}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}
