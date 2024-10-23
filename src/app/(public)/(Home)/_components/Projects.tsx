"use Client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(false);

  return (
    <div>
      My Work
      <div className="flex gap-4">
        {[1, 2, 3, 4].map((el, index) => {
          return <ProjectCard selectedId={selectedId} setSelectedId={setSelectedId} id={index}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;
