"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useTransform,
  useScroll,
  MotionValue,
} from "framer-motion";
import { DownArrowSVG } from "@/app/_lib/assets/HomepageSVG";
import { Theme, useTheme } from "@/app/_lib/context/ThemeController";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const NameHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, 1300]);
  }

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const { theme } = useTheme(); // Access theme and toggleTheme from context

  const percentage = theme === "light" ? "80%" : "125%";
  const lightwhite = "rgba(255, 255, 255, 0.9)";
  const backgroundImage = useMotionTemplate`radial-gradient(${percentage} 125% at 50% 0%,${
    theme === "light" ? lightwhite : "#020617"
  }  50%, ${color})`;

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("hero-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollYProgress } = useScroll();
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-100/10  dark:bg-gray-950 px-4 pt-40 text-gray-200"
    >
      <motion.div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-heading text-background px-3 py-1.5 text-sm">
          WELCOME!
        </span>
        {/* <motion.h1 className="text-8xl font-extrabold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-8xl md:leading-tight"> */}
        <motion.h1 className="text-8xl font-extrabold bg-heading bg-clip-text text-center leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-8xl md:leading-tight">
          ABDUL MOIZ SHEIKH
        </motion.h1>
        <p className="my-6 max-w-xl text-center text-heading leading-relaxed md:text-lg md:leading-relaxed">
          SOFTWARE ENGINEER, WEB DEVELOPER, AND DESIGNER
        </p>
        <motion.div
          style={{
            y: yTransform,
            width: "50px", // Set width here
            height: "50px", // Set height here
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          animate={{
            y: [0, -3, 0], // Moves up by -10px and back down
          }}
          transition={{
            duration: 1.5, // Duration of one bounce cycle
            repeat: Infinity, // Loop the animation indefinitely
            ease: "easeInOut",
          }}
          className="flex w-fit items-center border-none bg-none h-28 mt-40"
          onClick={scrollToNextSection}
          role="button"
        >
          <DownArrowSVG
            className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 h-full"
            color="black"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={200} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
