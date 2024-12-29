import Button from "@/app/_components/Buttons/HomepageBtn";
import { DownArrowSVG } from "@/app/_lib/assets/HomepageSVG";
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <section className=" home-container pb-12 lg:pb-24 w-full mx-auto text-center ">
      <motion.div
        style={{
          width: "50px", // Set width here
          height: "50px", // Set height here
        }}
      >
        <DownArrowSVG
          className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 h-full"
          color="black"
        />
      </motion.div>
      <h2 className="text-4xl font-bold">And Now</h2>
      <h3 className="mt-4 text-2xl font-medium lg:font-semibold text-para w-full mx-auto px-2 md:px-8 ">
        I am a dedicated <span className="text-primary">software engineer</span>{" "}
        with a focus on creating efficient and scalable web applications. With
        expertise in{" "}
        <span className="text-primary">React, Next.js, and TypeScript</span>, I
        thrive on solving complex challenges, optimising performance, and
        delivering intuitive user experiences. Whether it's building from
        scratch or improving legacy code, I ensure clean, maintainable, and
        future-proof solutions that align with business goals and user needs.
      </h3>
      <p className="my-4 text-gray-600 w-full mx-auto font-light">
        Built with Next, tailwind, Framer Motion, TypeScript and love ❤️
      </p>
      <div className="mt-8">
        <Button
          isPill={true}
          className="text-white border-none px-8 font-semibold min-h-10 h-10"
          defaultColor={true}
          redirectsTo={"/contact-us"}
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;
