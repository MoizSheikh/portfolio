"use client";
import { Project } from "@/app/_lib/_types/genericTypes";
import { ExternalLinkSVG, Github } from "@/app/_lib/assets/HomepageSVG";
import { useTheme } from "@/app/_lib/context/ThemeController";
import { cn } from "@/app/_lib/helpers/helpers";
import Image from "next/image";

const ProjectCard = ({
  setSelected,
  project,
}: {
  setSelected: (data: Project) => void;
  project: Project;
}) => {
  const { id, name, smallDescription, techStack, img, url, githubLink } =
    project;
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "whiteCardShadow relative flex-1 rounded-xl  bg-card-bg flex flex-col justify-start items-end p-4 min-w-4/12",
        {
          "border-card-border border": theme === "dark",
        }
      )}
    >
      <div
        className="w-full hover:-rotate-6 hover:-translate-y-8 transition-transform duration-300 cursor-pointer"
        onClick={() => {
          setSelected(project);
        }}
      >
        <Image
          src={img}
          alt="project"
          width={300}
          height={0}
          className="object-contain"
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <div className="w-full my-2">
        <div className="flex items-center gap-2 w-full">
          <h4 className="font-bold text-lg shrink-0">{name}</h4>
          <div className="w-full h-[1px] bg-zinc-600"></div>
          {githubLink && (
            <Github
              size="40px"
              className="cursor-pointer text-xl"
              onClick={() => window.open(githubLink, "_blank")}
            />
          )}
          {url && (
            <ExternalLinkSVG
              size="40px"
              className="cursor-pointer"
              onClick={() => window.open(url, "_blank")}
            />
          )}
        </div>
        <p className="text-[#a3a3a3] overflow-hidden text-ellipsis whitespace-nowrap w-full">
          {techStack.join(" - ")}
        </p>

        <div>
          <p className="text-sm text-muted ">{smallDescription}</p>
          <div
            role="button"
            onClick={() => setSelected(project)}
            className="text-indigo-300"
          >
            Learn More.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
