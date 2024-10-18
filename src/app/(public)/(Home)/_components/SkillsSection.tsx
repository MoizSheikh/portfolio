// src/components/SkillsSection.tsx
"use client";
import React from "react";
import { FaCode, FaServer, FaTools, FaUserTie } from "react-icons/fa"; // Importing Icons
import { motion, useScroll, useTime, useTransform } from "framer-motion"; // For animations

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      duration: 2, // You can adjust the duration
      ease: "easeInOut",
    },
  },
};

function MoizSvg({ rotate }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250 100"
        width="250"
        height="100"
      >
        {/* M */}
        <motion.path
          d="M10,90 L10,10 L50,50 L90,10 L90,90"
          stroke="white"
          strokeWidth="5"
          variants={icon}
          initial="hidden"
          animate="visible"
          fill="none"
          style={{ fill: "none" }}
        />
        {/* O */}
        <motion.path
          d="M150,50 A20,20 0 1,1 150,49.9"
          stroke="white"
          strokeWidth="5"
          variants={icon}
          initial="hidden"
          animate="visible"
          style={{ fill: "none" }}
        />
        {/* I */}
        <motion.path
          d="M165,10 L165,90"
          stroke="white"
          strokeWidth="5"
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        {/* Z */}
        <motion.path
          d="M190,10 L240,10 L190,90 L240,90"
          stroke="white"
          strokeWidth="5"
          fill="transparent"
          variants={icon}
          initial="hidden"
          animate="visible"
          style={{ fill: "none" }}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="250"
        height="100"
      >
        {/* < */}
        <motion.path
          d="M40,20 L10,50 L40,80"
          stroke="white"
          strokeWidth="5"
          fill="none"
          variants={icon}
          initial="hidden"
          animate="visible"
          style={{ fill: "none" }}
        />
        {/* / */}
        {/* <motion.path
          d="M50,80 L90,20"
          stroke="white"
          strokeWidth="5"
          fill="none"
          variants={icon}
          initial="hidden"
          animate="visible"
          style={{ fill: "none" }}
        /> */}
        {/* > */}
        <motion.path
          d="M100,20 L130,50 L100,80"
          stroke="white"
          strokeWidth="5"
          fill="none"
          variants={icon}
          initial="hidden"
          animate="visible"
          style={{ fill: "none" }}
        />
      </svg>
      <motion.g style={{ rotate }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 100"
          width="250"
          height="100"
        >
          {/* Group for cohesive movement and rotation */}
          <g>
            {/* < */}
            <motion.path
              d="M40,20 L10,50 L40,80"
              stroke="white"
              strokeWidth="5"
              fill="none"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }} // Move slightly and rotate together
              transition={{
                duration: 3, // Slow movement
                ease: "easeInOut",
                repeat: Infinity, // Infinite loop
                repeatType: "reverse",
              }}
            />
            {/* > */}
            <motion.path
              d="M60,20 L90,50 L60,80"
              stroke="white"
              strokeWidth="5"
              fill="none"
              initial={{ x: 0 }}
              animate={{ x: [0, -5, 0] }} // Move slightly and rotate together
              transition={{
                duration: 3, // Slow movement
                ease: "easeInOut",
                repeat: Infinity, // Infinite loop
                repeatType: "reverse",
              }}
            />
          </g>
        </svg>
      </motion.g>
    </div>
  );
}
interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: JSX.Element;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="card bg-gray-800    shadow-lg p-6 rounded-xl transform transition duration-300 ease-in-out hover:shadow-2xl"
    >
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3 mt-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="badge badge-outline badge-accent text-xs text-white py-3 px-6 font-light bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors duration-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TailwindCSS", "TypeScript", "DaisyUI"],
      icon: <FaCode className="text-white text-3xl" />,
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"],
      icon: <FaServer className="text-white text-3xl" />,
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git"],
      icon: <FaTools className="text-white text-3xl" />,
    },
    {
      title: "Soft Skills",
      skills: [
        "Leadership",
        "Communication",
        "Problem Solving",
        "Collaboration",
      ],
      icon: <FaUserTie className="text-white text-3xl" />,
    },
  ];

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  const time = useTime();
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false });

  return (
    <section className="py-16 bg-gray-900">
      {/* <MoizSvg rotate={rotate} /> */}
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-12"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          style={{ scale }}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
