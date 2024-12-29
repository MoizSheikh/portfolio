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
    <motion.section className="py-16">
      <h2 className="text-3xl md:text-5xl font-black text-start">About</h2>
      <motion.section
        id={"hero-section"}
        className="home-container py-4 w-full bg-background text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14"
      >
        <motion.div className="w-full ">
          <p className="my-6 text-para w-full lg:w-4/5 font-medium !leading-6">
            I’m a dedicated software engineer with 2.5+ years in full-stack
            development, specialising in building efficient, high-performance
            web applications with React, Next.js, Node.js, and TypeScript.
            <br />
            <br />
            My experience includes managing sprints, leading PR reviews, and
            fostering team collaboration, ensuring technical excellence and
            seamless project execution aligned with business goals.
            {/* <br />
            Outside of work, I love to read and write. Any given Sunday you'll find
            me filling ! */}
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 mx-auto justify-center md:justify-start items-center lg:items-start"></div>
        </motion.div>
        {/* <div className="w-full flex space-x-4">
          <Link href="https://github.com/moizsheikh" target="_blank">
            <Image
              src="/icons/github.svg"
              alt="GitHub Profile"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://linkedin.com/in/moizsheikhh" target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn Profile"
              width={50}
              height={50}
            />
          </Link>
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
      <motion.div className="container mx-auto text-center mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-heading mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              // whileHover={{
              //   boxShadow: `0 0 15px ${skill.color}`,
              //   transition: { duration: 1, ease: "easeOut" },
              // }}
              // transition={{ delay: 0.3 }}
              className={cn(
                "flex items-center justify-center p-4 bg-card-bg border border-card-border rounded-xl",
                {
                  "motion-translate-x-in-[-67%] motion-translate-y-in-[1%] motion-opacity-in-[10%] motion-blur-in-[20px] motion-duration-[3.50s] motion-ease-spring-snappy":
                    isInView,
                }
              )}
              // style={{
              //   boxShadow: "0 0 0px transparent",
              // }}
            >
              <Image src={skill.icon} alt={skill.name} width={64} height={64} />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
