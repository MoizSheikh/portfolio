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
      {/* <form className="flex w-full max-w-sm items-center gap-1.5">
        <input
          type="email"
          placeholder="Enter your email"
          className="h-fit w-full rounded-md border border-zinc-500 bg-zinc-700 px-3 py-2 transition-colors focus:border-white focus:outline-none"
        />
        <button
          type="submit"
          className="grid size-10 shrink-0 place-content-center rounded-md bg-white text-xl text-zinc-900 transition-colors hover:bg-zinc-200"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </button>
      </form> */}
    </section>
  );
};

export default AboutMe;
