"use Client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  img: string;
  url?: string;
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
      name: "Align With Me",
      description:
        "Enhance professional relationships with personalized insights. Align creates your unique user guide, helping colleagues understand your work style and preferences, and creating more harmonious connections.",
      techStack: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS, stripe, propelAuth",
      ],
      img: "/alignwithme.png",
      url: "https://alignwithme.com",
    },
    {
      id: 3,
      name: "Teachify",
      description:
        "An online platform for teachers to create and share lesson plans.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      img: "/alignwithme.png",
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold text-heading mb-12">
        What I have been working on
      </h2>
      <div className="flex gap-4 mx-auto  justify-center w-10/12">
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
