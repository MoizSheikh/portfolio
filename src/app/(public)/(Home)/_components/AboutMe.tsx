import Button from "@/app/_components/Buttons/HomepageBtn";
const AboutMe = () => {
  return (
    <section className=" home-container pb-12 lg:pb-24 w-full mx-auto text-center ">
      <h2 className="text-4xl font-bold"></h2>
      <h3 className="text-4xl font-bold">Feel free to contact</h3>
      <p className="my-4 text-gray-600 w-full mx-auto font-light">
        Built with Next, tailwind, Framer Motion, TypeScript and{" "}
        <span
          role="button"
          onClick={() => {
            console.log("Love");
          }}
        >
          Love
        </span>{" "}
        ❤️
      </p>

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
