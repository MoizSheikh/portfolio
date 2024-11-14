// src/components/SkillsSection.tsx
"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion"; // For animations
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// const icon = {
//   hidden: {
//     pathLength: 0,
//     fill: "rgba(255, 255, 255, 0)",
//   },
//   visible: {
//     pathLength: 1,
//     fill: "rgba(255, 255, 255, 1)",
//     transition: {
//       duration: 2, // You can adjust the duration
//       ease: "easeInOut",
//     },
//   },
// };

// function MoizSvg({ rotate }) {
//   return (
//     <div>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 250 100"
//         width="250"
//         height="100"
//       >
//         {/* M */}
//         <motion.path
//           d="M10,90 L10,10 L50,50 L90,10 L90,90"
//           stroke="white"
//           strokeWidth="5"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           fill="none"
//           style={{ fill: "none" }}
//         />
//         {/* O */}
//         <motion.path
//           d="M150,50 A20,20 0 1,1 150,49.9"
//           stroke="white"
//           strokeWidth="5"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           style={{ fill: "none" }}
//         />
//         {/* I */}
//         <motion.path
//           d="M165,10 L165,90"
//           stroke="white"
//           strokeWidth="5"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//         />
//         {/* Z */}
//         <motion.path
//           d="M190,10 L240,10 L190,90 L240,90"
//           stroke="white"
//           strokeWidth="5"
//           fill="transparent"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           style={{ fill: "none" }}
//         />
//       </svg>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 100 100"
//         width="250"
//         height="100"
//       >
//         {/* < */}
//         <motion.path
//           d="M40,20 L10,50 L40,80"
//           stroke="white"
//           strokeWidth="5"
//           fill="none"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           style={{ fill: "none" }}
//         />
//         {/* / */}
//         {/* <motion.path
//           d="M50,80 L90,20"
//           stroke="white"
//           strokeWidth="5"
//           fill="none"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           style={{ fill: "none" }}
//         /> */}
//         {/* > */}
//         <motion.path
//           d="M100,20 L130,50 L100,80"
//           stroke="white"
//           strokeWidth="5"
//           fill="none"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           style={{ fill: "none" }}
//         />
//       </svg>
//       <motion.g style={{ rotate }}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 150 100"
//           width="250"
//           height="100"
//         >
//           {/* Group for cohesive movement and rotation */}
//           <g>
//             {/* < */}
//             <motion.path
//               d="M40,20 L10,50 L40,80"
//               stroke="white"
//               strokeWidth="5"
//               fill="none"
//               initial={{ x: 0 }}
//               animate={{ x: [0, 5, 0] }} // Move slightly and rotate together
//               transition={{
//                 duration: 3, // Slow movement
//                 ease: "easeInOut",
//                 repeat: Infinity, // Infinite loop
//                 repeatType: "reverse",
//               }}
//             />
//             {/* > */}
//             <motion.path
//               d="M60,20 L90,50 L60,80"
//               stroke="white"
//               strokeWidth="5"
//               fill="none"
//               initial={{ x: 0 }}
//               animate={{ x: [0, -5, 0] }} // Move slightly and rotate together
//               transition={{
//                 duration: 3, // Slow movement
//                 ease: "easeInOut",
//                 repeat: Infinity, // Infinite loop
//                 repeatType: "reverse",
//               }}
//             />
//           </g>
//         </svg>
//       </motion.g>
//     </div>
//   );
// }
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
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  // const time = useTime();
  // const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false });

  return (
    <section className="py-16">
      {/* <MoizSvg rotate={rotate} /> */}
      <section
        id={"hero-section"}
        className="home-container py-4 w-full bg-background text-center md:text-left flex items-center flex-col-reverse md:flex-row align-middle justify-start gap-14"
      >
        <motion.div className="w-full lg:w-7/12">
          <p className="my-6 text-para w-full lg:w-4/5 font-medium !leading-6">
            I’m a dedicated software engineer with 2.5+ years in full-stack
            development, specialising in building efficient, high-performance
            web applications with React, Next.js, Node.js, and TypeScript. My
            experience includes managing sprints, leading PR reviews, and
            fostering team collaboration, ensuring technical excellence and
            seamless project execution aligned with business goals.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 mx-auto justify-center md:justify-start items-center lg:items-start"></div>
        </motion.div>
        <div className="w-full lg:w-5/12 flex space-x-4">
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
        </div>
      </section>
      <motion.div className="container mx-auto text-center ">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-heading mb-12"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                boxShadow: `0 0 15px ${skill.color}`,
                transition: { duration: 1, ease: "easeOut" },
              }}
              className="flex items-center justify-center p-4 bg-background rounded-lg transition"
              style={{
                boxShadow: "0 0 0px transparent",

                // transition: ".0s ease-in-out 0.3s"
              }} // Start with no shadow
            >
              <Image src={skill.icon} alt={skill.name} width={64} height={64} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
