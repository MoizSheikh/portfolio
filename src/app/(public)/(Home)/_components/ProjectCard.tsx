"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

const ProjectCard = ({
  selectedId,
  setSelectedId,
  id,
  name,
  description,
  techStack,
  img,
  url,
}: {
  selectedId: number;
  setSelectedId: (id: number) => void;
  id: number;
  name: string;
  description: string;
  techStack: string[];
  img: string;
  url?: string;
}) => {
  return (
    <>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(0)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-3xl shadow-xl cursor-default relative overflow-hidden"
            >
              <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
              <div className="relative z-10">
                {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                  <FiAlertCircle />
                </div> */}
                <h3 className="text-3xl font-bold text-center mb-2">{name}</h3>
                <Image src={img} alt="project" width={300} height={280} />

                <p className="text-center mb-6">{description}</p>
                <p className="text-center mb-6 font-semibold text-lg">
                  Technologies used: {techStack.join(", ")}
                </p>
                <div className="text-center mb-6">
                  <a
                    href="#"
                    className="text-indigo-300 hover:text-indigo-500 transition-colors"
                  >
                    View the project details
                  </a>
                </div>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => setSelectedId(0)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Go back
                  </button>
                  {/* <button
                    onClick={() => setSelectedId(0)}
                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                  >
                    Visit
                  </button> */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="bg-background border relative overflow-hidden rounded p-4"
        onClick={() => {
          setSelectedId(id);
        }}
      >
        <div className="w-7/12">
          <h4>{name}</h4>
          {/* <p>{description}</p> */}
          <p>Technologies used: {techStack.join(", ")}</p>
        </div>
        <div
          className=" absolute -right-5 -bottom-8
         
         hover:-rotate-2 "
        >
          <Image src={img} alt="project" width={300} height={280} />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
