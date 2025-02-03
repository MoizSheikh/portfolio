"use client";
import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Links from "./helpers/Links";
import { SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";
import { MY_SKILLS } from "@/app/_lib/assets/staticData";
import { useTheme } from "@/app/_lib/context/ThemeController";

const SkillsSection = () => {
  const refCard = useRef(null);
  const isInView = useInView(refCard, { margin: "-1800px 0px -1800px 0px" }); // Adjust margins as needed

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -200);
  const { theme } = useTheme();

  return (
    <motion.section
      className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto px-3 md:px-0"
      ref={ref}
      id={"hero-section"}
    >
      <h2 className="flex items-baseline text-3xl md:text-5xl font-black text-start">
        About
        <span className="ml-2 text-indigo-300">
          <SingleDotSvg />
        </span>
      </h2>
      <motion.section className="home-container py-4 w-full bg-background text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14 px-0">
        <motion.div className="w-full text-left md:text-center">
          <p className="my-6 text-para w-full lg:w-4/5 font-medium !leading-6 text-left">
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
        </motion.div>
      </motion.section>
      <motion.div className="container mx-auto text-left mt-12  md:mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" text-5xl font-bold text-heading mb-6 md:mb-12 flex items-baseline "
        >
          Skills{" "}
          <span className="ml-2 text-indigo-300">
            <SingleDotSvg />
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center"
        >
          {MY_SKILLS.map((skill, index) => (
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
                      filter:
                        theme === "dark"
                          ? `drop-shadow(0 0 0.8rem color-mix(in srgb, ${skill.color} 40%, transparent))`
                          : "none",
                    }}
                  />
                </span>
                <span className="text-para bg-transparent shadow-none absolute inset-0 flex items-center justify-center transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:left-0 group-hover:top-0 transition-all duration-1800 ease-in-out rounded-lg p-2">
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
