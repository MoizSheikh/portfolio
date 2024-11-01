"use Client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { img } from "framer-motion/client";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(0);
  const projectsData = [
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
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS, stripe, propelAuth"],
    }
    
  ];
  return (
    <div>
      My Work
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((el, index) => {
          return (
            <ProjectCard
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              id={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
