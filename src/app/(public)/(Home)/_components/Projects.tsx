"use Client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/app/_lib/assets/staticData";

import { AnimatePresence } from "framer-motion";
import { Project } from "@/app/_lib/_types/genericTypes";
import ProjectModal from "./Projects/ProjectModal";
import { SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";

const Projects = () => {
  const [selectedProject, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <div className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto px-3 md:px-0">
        <h2 className="flex items-baseline text-5xl font-bold text-heading mb-12 text-left">
          Projects{" "}
          <span className="ml-2 text-indigo-300">
            <SingleDotSvg />
          </span>
        </h2>
        <div className="relative">
          <div
            className={`relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto justify-center transition-all duration-500  ${
              showAll ? " max-h-fit " : " max-h-[440px] overflow-hidden "
            }`}
          >
            {projectsData.map((project, index) => {
              const { id } = project;
              return (
                <div
                  key={id}
                  className={`relative transition-all duration-500 ease-in-out transform `}
                >
                  <ProjectCard setSelected={setSelected} project={project} />
                </div>
              );
            })}
            {!showAll && (
              <div
                className="absolute bottom-0 left-0 right-0 bg-background opacity-75"
                style={{ height: "70px" }}
              ></div>
            )}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="relative z-0 cursor-pointer flex items-center justify-center gap-2 overflow-hidden rounded-md border border-white px-6 py-2 font-medium text-sm text-white transition-all duration-300 hover:text-zinc-950 hover:bg-white active:scale-95"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            selectedProject={selectedProject}
            setSelected={setSelected}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
