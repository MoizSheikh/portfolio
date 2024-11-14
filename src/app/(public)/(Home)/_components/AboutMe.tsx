import Button from "@/app/_components/Buttons/HomepageBtn";

const AboutMe = () => {
  return (
    <section className=" home-container py-12 lg:py-24 w-full mx-auto text-center ">
      <h2 className="text-4xl font-bold">About Me</h2>
      <h3 className="mt-4 text-2xl font-medium lg:font-semibold text-primary w-full mx-auto px-2 md:px-8 ">
        I am a dedicated software engineer with a focus on creating efficient
        and scalable web applications. With expertise in React, Next.js, and
        TypeScript, I thrive on solving complex challenges, optimising
        performance, and delivering intuitive user experiences. Whether it's
        building from scratch or improving legacy code, I ensure clean,
        maintainable, and future-proof solutions that align with business goals
        and user needs.
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
