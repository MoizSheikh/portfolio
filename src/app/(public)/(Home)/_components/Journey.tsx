import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./styles.css"; 
import Image from "next/image";
import { journeyData } from "@/app/_lib/assets/staticData";

const transition = { ease: "linear" };

export default function JourneySection() {
  return (
    <>
      <h2 className="py-16 w-full md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto text-5xl">
        My Journey
      </h2>
      <div className="bg-background">
        <div className="relative">
          <HorizontalScrollCarousel />
          {/* <CurvyPathWithCar /> */}
        </div>
      </div>
    </>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-65%"]);

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
      className="group relative h-[450px] w-[450px] overflow-hidden border text-center bg-card-bg border-card-border"
    >
      <div className="absolute inset-0 z-10 grid place-content-center">
        <div className="flex">
          <p className=" p-8 text-6xl font-black uppercase text-heading backdrop-blur-lg">
            {data.title}
          </p>
          <Image
            src={data.logo || ""}
            alt={data.title}
            width={30}
            height={30}
            className="mx-auto"
          />
        </div>
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
  const carPosition = useTransform(scrollYProgress, [0, 1], ["-12%", "80%"]);

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
            offsetPath: `path('M0 50 Q 500 150 1000 50 T 2000 50 T 3000 50 T 4000 50')`, // Link the box to the path
            offsetDistance: carPosition, // Car moves along the path
            scale: useTransform(scrollYProgress, [0, 1], [1.5, 1]), // Optional scaling for dynamic effect
          }}
          transition={transition}
        />
      </div>
    </section>
  );
};

