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
      name: "Align With Me",
      description:
        "Enhance professional relationships with personalized insights. Align creates your unique user guide, helping colleagues understand your work style and preferences, and creating more harmonious connections.",
      techStack: [
        "Next.js",
        "MongoDB",
        "Tailwind CSS",
        "stripe",
        "propelAuth",
        "OPENAI",
      ],
      img: "/alignwithme.png",
      url: "https://alignwithme.com",
    },

    {
      id: 2,
      name: "HoopWorld",
      description:
        "Get a customized baseketball training plan from the best AI coaches in the world.",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "OPENAI"],
      img: "/alignwithme.png",
    },
    {
      id: 3,
      name: "Glorious ME",
      description:
        "Get your personalized fitness plan and diet recommendations.",
      techStack: ["Next.js", "Postgres", "Tailwind CSS", "Supabase", "AWS"],
      img: "/alignwithme.png",
    },
    {
      id: 4,
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
      <h2 className="text-5xl font-bold text-heading mb-12">Projects <span>.</span></h2>
      <div className="flex flex-col md:flex-row gap-4 mx-auto justify-center w-10/12 flex-wrap">
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
