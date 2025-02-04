"use client";
import { SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";
import Image from "next/image";
import { experienceData } from "@/app/_lib/assets/staticData";
import { cn } from "@/app/_lib/helpers/helpers";
import { useTheme } from "@/app/_lib/context/ThemeController";

const Experience = () => {
  const {theme} = useTheme();
  return (
    <div className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto px-3 md:px-0">
      <h2 className="flex items-baseline text-5xl font-bold text-heading mb-12 text-left">
        Experience{" "}
        <span className="ml-2 text-indigo-300">
          <SingleDotSvg />
        </span>
      </h2>

      <div className="space-y-8">
        {experienceData.map((experience) => (
          <div
            key={experience.id}
            className={cn(
              "relative flex-1 rounded-xl bg-card-bg p-6 hover:border-indigo-300/50 transition-all duration-300",
              {
                whiteCardShadow: theme === "light",
                "border border-card-border": theme === "dark",
              }
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                {experience.logo && (
                  <div className="relative w-12 h-12">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-xl text-heading">
                    {experience.company}
                  </h3>
                  <p className="text-indigo-300 font-medium">
                    {experience.role}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-muted">{experience.duration}</p>
                <p className="text-sm text-muted">{experience.location}</p>
              </div>
            </div>

            <div className="space-y-4 text-muted">
              {experience.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-indigo-300 mt-1.5">•</span>
                  <p>{responsibility}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-chip"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
