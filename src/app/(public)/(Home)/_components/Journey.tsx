import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.css"; // Assuming you have styles set up already

const transition = { ease: "linear" };

export default function JourneySection() {
  return (
    <div className="bg-neutral-800">
      <div className="relative">
        <HorizontalScrollCarousel />
        <CurvyPathWithCar />
      </div>
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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
  data = { id: 0, title: "", description: "" },
}: {
  data: { id: number; title: string; description: string };
}) => {
  return (
    <div
      key={data.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {data.title}
        </p>
        <p className="text-lg text-white">{data.description}</p>
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
          {/* Motion path used here */}
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
  { id: 1, title: "University", description: "Learned the basics of coding." },
  { id: 2, title: "UI Dev", description: "Mastered frontend technologies." },
  { id: 3, title: "Lyftron", description: "Worked with databases." },
  {
    id: 4,
    title: "Dubizzle",
    description: "Advanced in React and full-stack.",
  },
];
