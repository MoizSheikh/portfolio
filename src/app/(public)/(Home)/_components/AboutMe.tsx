import Button from "@/app/_components/Buttons/HomepageBtn";
const AboutMe = () => {
  return (
    <section className=" home-container pb-12 lg:pb-24 w-full mx-auto text-center ">
      <h2 className="text-4xl font-bold">And Now</h2>
      <h3 className="mt-4 text-2xl font-medium lg:font-semibold text-para w-full mx-auto px-2 md:px-8 text-left md:text-center">
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
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;
