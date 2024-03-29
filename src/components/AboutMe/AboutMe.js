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
                    className="flex flex-row portrait:flex-col-reverse  h-full "
                >
                    <div className="flex-col w-2/3 portrait:flex-row portrait:w-full portrait:text-center">
                        <Timeline timeline={timeline} />
                    </div>
                    <div className="flex-col w-1/3 portrait:flex-row portrait:w-full portrait:text-center p-8 bg-thi2 text-thi1 dark:text-thi5 dark:bg-thi4 overflow-auto">
                        <div className=" mb-2 ">
                            <h1 className="text-center text-2xl font-semibold mb-2 text-thi5 dark:text-thi3">
                                Thiago Moreira Ribeiro
                            </h1>
                            <h2 className="text-center text-lg font-medium dark:text-thi2 text-thi4">
                                {title}
                            </h2>
                            <p className=" text-md font-normal p-4 tracking-normal dark:text-thi1 text-thi5">
                                {description}
                            </p>
                        </div>
                        <div className="px-2 mb-12 ">
                            <div className="flex flex-col px-2 mb-12">
                                <h2 className="text-xl font-semibold  dark:text-thi2 text-thi5 ">
                                    Skills
                                </h2>
                                {skills.map((skill) => (
                                    <div key={skill.title}>
                                        <h3 className="text-lg font-medium dark:text-thi1 text-thi4">
                                            {skill.title}
                                        </h3>
                                        <ul className="grid grid-cols-3 portrait:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                                            {skill.list.map((item) => (
                                                <li key={item}>
                                                    <div className="bg-thi4 dark:bg-thi2 dark:hover:bg-thi1 hover:bg-thi5 dark:hover:text-thi5 hover:text-thi1 p-2 m-1 rounded-md">
                                                        <p className="text-base font-normal">
                                                            {item}
                                                        </p>
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
