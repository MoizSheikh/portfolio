// src/components/SkillsSection.tsx
"use client";
import { cn } from "@/app/_lib/helpers/helpers";
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion"; // For animations
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Links from "./helpers/Links";
import { DotsSvg, SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: JSX.Element;
}

const skills = [
  { name: "HTML", icon: "/icons/html.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
  { name: "SCSS", icon: "/icons/sass.svg", color: "#CC6699" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg", color: "#38B2AC" },
  { name: "JavaScript", icon: "/icons/js.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/icons/ts.svg", color: "#3178C6" },
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
  { name: "Redux", icon: "/icons/redux.svg", color: "#764ABC" },
  { name: "Next.js", icon: "/icons/next.svg", color: "#000000" },
  { name: "Node.js", icon: "/icons/node.svg", color: "#339933" },
  { name: "Express", icon: "/icons/express.svg", color: "#000000" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "SQL", icon: "/icons/mysql.svg", color: "#1572B6" },
  { name: "PostGres", icon: "/icons/postgres.svg", color: "#1572B6" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "Vite", icon: "/icons/vite.svg", color: "#646CFF" },
  { name: "UI UX", icon: "/icons/ui.svg", color: "#61DAFB" },
  { name: "Team Player", icon: "/icons/leadership.svg", color: "#F7DF1E" },
];

const SkillsSection = () => {
  // const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.9, 2]);
  const refCard = useRef(null);
  const isInView = useInView(refCard, { margin: "-1800px 0px -1800px 0px" }); // Adjust margins as needed

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -200);
  // const time = useTime();

  return (
    <motion.section
      className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto"
      ref={ref}
    >
      <h2 className="text-3xl md:text-5xl font-black text-start">About</h2>
      <motion.section
        id={"hero-section"}
        className="home-container py-4 w-full bg-background text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14 px-0"
      >
        <motion.div className="w-full ">
          <p className="my-6 text-para w-full lg:w-4/5 font-medium !leading-6">
            I am a passionate software engineer with over 2.5 years of
            professional experience in full-stack web development. My expertise
            lies in crafting scalable, high-performance web applications using
            modern technologies like React, Next.js, Node.js, and TypeScript. I
            specialize in building seamless user interfaces, optimizing backend
            architecture, and delivering end-to-end solutions that drive user
            engagement and efficiency.
            <br />
            <br />
            I have a proven track record of developing robust, maintainable
            codebases and collaborating effectively with cross-functional teams
            to meet tight deadlines. My focus on clean design principles and
            scalable architecture allows me to deliver solutions that not only
            meet client requirements but also anticipate future growth.
            <br />
            <br />
            Beyond coding, I’m deeply committed to continuous learning and
            staying updated with the latest industry trends. I thrive on
            challenges, whether it’s implementing new features, optimizing
            performance, or refactoring legacy systems to enhance usability. My
            goal is to create innovative products that solve real-world problems
            while delivering exceptional user experiences.
          </p>
          <Links />
          <div className="mt-10 flex flex-col md:flex-row gap-4 mx-auto justify-center md:justify-start items-center lg:items-start"></div>
        </motion.div>
        {/* <div className="w-full flex space-x-4">
       
          <Link href="mailto:abdulmoizsheikhh@gmail.com">
            <Image src="/icons/email.svg" alt="Email" width={50} height={50} />
          </Link>
          <a href="/resume.pdf" download="files/AMS.pdf">
            <Image
              src="/icons/resume.svg"
              alt="Resume"
              width={50}
              height={50}
            />
          </a>
        </div> */}
      </motion.section>
      <motion.div className="container mx-auto text-left mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-heading mb-12 flex items-baseline  "
        >
          Skills{" "}
          <SingleDotSvg />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              className="flex items-center justify-center p-4 bg-card-bg border border-card-border rounded-xl h-24 w-28"
              key={index}
            >
              <div className="relative w-full h-full cursor-pointer group p-4 rounded-xl text-gray-800 font-semibold text-lg flex justify-center items-center transition-all duration-1800 ease-in-out hover:border-transparent hover:text-white">
                <span className="absolute  inset-0 flex items-center justify-center transform scale-100 opacity-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-1800 ease-in-out">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    style={{
                      filter: `drop-shadow(0 0 0.8rem color-mix(in srgb, ${skill.color} 40%, transparent))`,
                    }}
                  />
                </span>
                <span className="bg-transparent shadow-none absolute inset-0 flex items-center justify-center transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:left-0 group-hover:top-0 transition-all duration-1800 ease-in-out text-white rounded-lg p-2">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
