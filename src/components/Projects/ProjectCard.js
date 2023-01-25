import Image from "next/image";
import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image src={props.image} alt={props.name} className="w-15" />

        <div className="px-6 py-4">
          <h3 className="text-xl font-medium">{props.name}</h3>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 py-4">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Ver Projeto
          </a>
        </div>
      </div> */}
      <a href="#" class="block">
        <Image
          src={props.image}
          alt={props.name}
          className="h-44 w-full rounded-bl-3xl rounded-tr-3xl object-cover  grayscale hover:grayscale-0 shadow-lg"
        />
        {/* <img
          alt="Signage"
          src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
        /> */}

        <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong class="font-medium">{props.name}</strong>

          <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-thi3"></span>

          <p class="mt-0.5 opacity-50 sm:mt-0">
            {props.category} / {props.company}
          </p>
        </div>
      </a>

      {/* <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        <div class="w-full rounded hover:shadow-2xl">
          <img
            src="https:images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
        <div class="w-full rounded hover:opacity-50">
          <img
            src="https:images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
        <div class="w-full rounded hover:shadow-2xl">
          <img
            src="https:images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
            alt="image"
          />
        </div>
      </div> */}
    </>
  );
};

export default ProjectCard;
