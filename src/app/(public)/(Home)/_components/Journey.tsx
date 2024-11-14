import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.css"; // Assuming you have styles set up already
import Image from "next/image";

const transition = { ease: "linear" };

export default function JourneySection() {
  return (
    <div className="bg-background">
      <div className="relative">
        <HorizontalScrollCarousel />
        {/* <CurvyPathWithCar /> */}
      </div>
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-96">
          {journeyData.map((item) => {
            return <JourneyCard key={item.id} data={item} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const JourneyCard = ({
  data = { id: 0, title: "", description: "", logo: "" },
}: {
  data: { id: number; title: string; description: string; logo?: string };
}) => {
  return (
    <div
      key={data.id}
      className="group relative h-[450px] w-[450px] overflow-hidden border"
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className=" p-8 text-6xl font-black uppercase text-heading backdrop-blur-lg">
          {data.title}
        </p>
        <Image src={data.logo || ""} alt={data.title} width={200} height={200} />
        <p className="text-lg text-para">{data.description}</p>
      </div>
    </div>
  );
};

const CurvyPathWithCar = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const carPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const carPosition = useTransform(scrollYProgress, [0, 1], ["-12%", "100%"]);

  return (
    <section
      ref={targetRef}
      className="absolute h-[300vh] bg-transparent top-0"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.svg
          style={{ y: pathLength }}
          className="absolute left-0 top-1/2 h-20"
          viewBox="0 0 4000 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            id="wavyPath" // Assign an id for reference
            d="M0 50 Q 500 150 1000 50 T 2000 50 T 3000 50 T 4000 50"
            stroke="#fff"
            strokeWidth="5"
            fill="transparent"
          />
        </motion.svg>
        <motion.div
          className="box absolute left-0 top-1/2"
          style={{
            offsetPath: `path('M0 50 Q 500 100 1000 50 T 2000 50 T 3000 50 T 4000 50')`, // Link the box to the path
            offsetDistance: carPosition, // Car moves along the path
            scale: useTransform(scrollYProgress, [0, 1], [1.5, 1]), // Optional scaling for dynamic effect
          }}
          transition={transition}
        />
      </div>
    </section>
  );
};

// Simulate the journeyData
const journeyData = [
  {
    id: 1,
    title: "University",
    description:
      "Developed a foundation in programming and algorithms, igniting a passion for problem-solving and software design. Built early projects that laid the groundwork for a career in tech.",
  },
  {
    id: 2,
    title: "Freelancer",
    logo: 'upwork.svg',
    description:
      "Dived into real-world projects, working directly with clients and learning to adapt quickly. Gained hands-on experience in delivering solutions, managing deadlines, and sharpening front-end and back-end skills.",
  },
  {
    id: 3,
    title: "Lyftron",
    logo: "/Lyftron.jpeg",
    description:
      "Transitioned to full-stack development, collaborating across teams on complex applications. Contributed to scalable solutions while deepening expertise in React and backend architecture.",
  },
  {
    id: 4,
    title: "Dubizzle",
    logo: "/DL.png",
    description:
      "Advanced skills in React and modern full-stack technologies. Took on leadership roles, managing team sprints and coordinating projects to deliver high-impact features on schedule.",
  },
];
