import React from "react";
import ProjectCard from "./ProjectCard";
import Img from "../../assets/image-01.png";
import Nexa from "../../assets/nexa.png";
import Vitoria from "../../assets/vitoria.png";
import HSE from "../../assets/hse.png";
import Aponta from "../../assets/aponta.png";
import Callreport from "../../assets/callreport.png";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Site da Nexa",
      category: "Site institucional",
      image: Nexa,
      company: "Nexa Tecnologia",
    },
    {
      name: "Vitória",
      category: "Chatbot",
      image: Vitoria,
      company: "Nexa Tecnologia",
    },
    {
      name: "Landing Page",
      category: "Landing Page",
      company: "HSE Sistemas",
      image: HSE,
    },
    {
      name: "Aponta Nexa",
      category: "Sistema de informação",
      image: Aponta,
      company: "Nexa Tecnologia",
    },
    {
      name: "Callreport",
      category: "SIstema de Informação",
      image: Callreport,
      company: "Nexa Tecnologia",
    },
  ];

  return (
    <section className="bg-thi1 py-4 max-h-screen">
      <h1
        id="timeline"
        className="px-20 text-2xl font-bold  decoration-4 mb-5 text-thi5 dark:text-thi3 "
      >
        Meus projetos
      </h1>
      <div className="mx-20 ">
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-1/3 p-4">
              <ProjectCard
                name={project.name}
                category={project.category}
                image={project.image}
                company={project.company}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
