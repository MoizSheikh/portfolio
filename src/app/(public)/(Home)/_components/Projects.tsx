"use Client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { img } from "framer-motion/client";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  img: string;
};
const Projects = () => {
  const [selectedId, setSelectedId] = useState(0);
  const projectsData: Project[] = [
    {
      id: 1,
      name: "CarSpector",
      description:
        "A car inspection app that helps you make informed decisions when buying a used car.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      img: "/projCar.png",
    },
    {
      id: 2,
      name: "Align",
      description:
        "A platform that empowers better communication through personalization.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS, stripe, propelAuth",
      ],
      img: "/projCar.png",
    },
  ];
  return (
    <div>
      My Work
      <div className="flex gap-4 mx-auto w-full justify-center">
        {projectsData.map((project, index) => {
          const { id, name, description, techStack, img } = project;
          return (
            <ProjectCard
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              id={id}
              key={index}
              name={name}
              description={description}
              techStack={techStack}
              img={img}

            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
