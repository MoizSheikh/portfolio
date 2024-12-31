"use client";
import { Project } from "@/app/_lib/_types/genericTypes";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";

const ProjectCard = ({
  setSelected,
  project,
}: {
  setSelected: (data: Project) => void;
  project: Project;
}) => {
  const { id, name, description, techStack, img } = project;

  return (
    <>
      <div
        className="relative flex-1 rounded-xl border border-card-border bg-card-bg flex flex-col justify-start items-end p-4 min-w-4/12"
        onClick={() => {
          setSelected(project);
        }}
      >
        <div className="w-full hover:-rotate-6 hover:-translate-y-8 transition-transform duration-300">
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
            <Image
              src={"/icons/github.svg"}
              alt="project"
              width={30}
              height={30}
            />
            <Image
              src={"/icons/github.svg"}
              alt="project"
              width={30}
              height={30}
            />
          </div>
          <p className="text-[#a3a3a3]">{techStack.join(" - ")}</p>
          <div>
            Some info about it.{" "}
            <div role="button" onClick={() => setSelected(project)}>
              Learn More.
            </div>
          </div>
        </div>
      </div>
      {/* <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(0)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer  "
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br  text-white p-6 rounded-lg w-full max-w-3xl shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-zinc-900 shadow-lg cursor-auto">
                <Image
                  className="w-full"
                  src="/project-imgs/example-project.jpg"
                  alt="An image of the Paint.app project."
                  width={500} // Specify width
                  height={300} // Specify height
                  priority
                />
                <div className="p-8">
                  <h4 className="text-3xl font-bold mb-2">Paint.app</h4>
                  <div className="flex flex-wrap gap-2 text-sm text-indigo-300">
                    Flutter - MUI - Python - FastAPI
                  </div>
                  <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
                    <p>
                      Paint.app is a real-time coaching app for students
                      learning to paint. This app is my baby, designed and built
                      on my own.
                    </p>
                    <p>
                      The tech stack is based on top of Flutter for the mobile
                      app, connected to a Python &amp; FastAPI backend, with
                      data stored in Postgres, deployed on Heroku.
                    </p>
                    <p>
                      Because this isn't real, here's some gibberish to fill
                      space :
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aspernatur quia officia odio nulla consectetur aperiam ad
                      tempora magni magnam nesciunt.
                    </p>
                    <p>
                      Fuga id sapiente facere ipsa eius exercitationem officiis
                      deleniti, rerum dolorum. Deserunt soluta modi culpa animi.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-2 text-xl">
                      Project Links<span className="text-indigo-500">.</span>
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <Link
                        href="https://www.github.com"
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
                      <Link
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          // <motion.div
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          //   exit={{ opacity: 0 }}
          //   onClick={() => setSelectedId(0)}
          //   className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer  "
          // >
          //   <motion.div
          //     initial={{ scale: 0, rotate: "12.5deg" }}
          //     animate={{ scale: 1, rotate: "0deg" }}
          //     exit={{ scale: 0, rotate: "0deg" }}
          //     onClick={(e) => e.stopPropagation()}
          //     className="bg-gradient-to-br  text-white p-6 rounded-lg w-full max-w-3xl shadow-xl cursor-default relative overflow-hidden"
          //   >
          //     <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
          //     <div className="relative z-10">

          //       <h3 className="text-3xl font-bold text-center mb-2">{name}</h3>
          //       <Image
          //         src={img}
          //         alt="project"
          //         width={0}
          //         height={280}
          //         style={{ width: "100%" }}
          //       />

          //       <p className="text-center mb-6">{description}</p>
          //       <p className="text-center mb-6 font-semibold text-lg">
          //         {techStack.join(" - ")}
          //       </p>
          //       <div className="text-center mb-6">
          //         <a
          //           href="#"
          //           className="text-indigo-300 hover:text-indigo-500 transition-colors"
          //         >
          //           View the project details
          //         </a>
          //       </div>
          //       <div className="flex gap-4 justify-center">
          //         <button
          //           onClick={() => setSelectedId(0)}
          //           className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
          //         >
          //           Go back
          //         </button>

          //         <a
          //           href={url}
          //           target="_blank"
          //           rel="noopener noreferrer"
          //           className="button bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
          //         >
          //           Visit
          //         </a>
          //       </div>
          //     </div>
          //   </motion.div>
          // </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default ProjectCard;
