// import React from "react";

// const NameHero = () => {
//   return (
//     <div>
//       <div>
//         <div>WELCOME</div>
//         <div className="text-8xl font-extrabold">ABDUL MOIZ SHEIKH</div>
//       </div>
//       <div>
//         Moving down arrow
//       </div>
//     </div>
//   );
// };

// export default NameHero;

"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useTransform,
  useScroll,
} from "framer-motion";
import { DownArrowSVG } from "@/app/_lib/assets/HomepageSVG";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const NameHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 7,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

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
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 pt-40 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/10 px-3 py-1.5 text-sm">
          WELCOME!
        </span>
        {/* <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"> */}
        <h1 className="text-8xl font-extrabold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-8xl md:leading-tight">
          ABDUL MOIZ SHEIKH
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          SOFTWARE ENGINEER, WEB DEVELOPER, AND DESIGNER
        </p>
        <motion.div
          style={{
            y: yTransform,
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
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
