import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/_lib/_types/genericTypes";


const ProjectModal = ({
  selectedProject,
  setSelected,
}: {
  selectedProject: Project;
  setSelected: (value: Project | null) => void;
}) => {
  const { name, description, techStack, img, githubLink, url } =
    selectedProject;



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="bg-slate-900/20 rounded-md backdrop-blur p-8 fixed inset-0 z-100 grid place-items-center overflow-y-scroll cursor-pointer w-full h-full"
    >
      <motion.div
        initial={{ scale: 0, rotate: "12.5deg" }}
        animate={{ scale: 1, rotate: "0deg" }}
        exit={{ scale: 0, rotate: "0deg" }}
        onClick={(e) => e.stopPropagation()}
        className="overflow-y-scroll bg-gradient-to-br h-[90%] text-white py-2 rounded-lg w-full max-w-3xl mx-auto shadow-xl cursor-default relative overflow-hidden"
      >
        <div className="w-full min-w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto">
          <Image
            className="w-full"
            src={img}
            alt="An image of the Paint.app project."
            width={500}
            height={200}
            priority
          />
          <div className="p-8">
            <h4 className="text-3xl font-bold mb-2">{name}</h4>
            <div className="flex flex-wrap gap-2 text-sm text-indigo-300">
              {techStack.join(" - ")}
            </div>
            <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
              <p>{description}</p>
            </div>
            <div>
              <p className="font-bold mb-2 text-xl">
                Project Links
                <span className="text-indigo-500">.</span>
              </p>
              <div className="flex items-center gap-4 text-sm">
                {githubLink && (
                  <Link
                    href={githubLink}
                    target="_blank"
                    rel="nofollow"
                    className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                    </svg>
                    Source Code
                  </Link>
                )}
                {url && (
                  <Link
                    href={url}
                    target="_blank"
                    rel="nofollow"
                    className="text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      fillRule="evenodd"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32ZM770.87 824.869l-52.2 52.2c-4.7 4.7-1.9 12.8 4.7 13.6l179.4 21c5.1.6 9.5-3.7 8.9-8.9l-21-179.4c-.8-6.6-8.9-9.4-13.6-4.7l-52.4 52.4-256.2-256.2c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.4c-3.1 3.1-3.1 8.2 0 11.3l256.1 256.3Z"
                        transform="matrix(1 0 0 -1 0 1024)"
                      ></path>
                    </svg>
                    Live Project
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
