import { useState } from "react";
import Button from "@/app/_components/Buttons/HomepageBtn";

const AboutMe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      
      setStatus("success");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="home-container pb-12 lg:pb-24 w-full mx-auto text-center">
      <h2 className="text-4xl font-bold">Get in Touch</h2>
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

      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mx-auto gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="h-fit w-full rounded-md border border-zinc-500 bg-zinc-700 px-3 py-2 transition-colors focus:border-white focus:outline-none text-white"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          className="h-32 w-full rounded-md border border-zinc-500 bg-zinc-700 px-3 py-2 transition-colors focus:border-white focus:outline-none text-white resize-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="relative z-0 cursor-pointer flex items-center justify-center gap-2 overflow-hidden rounded-md border-[1px] border-white px-4 py-2 font-medium text-sm text-white transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-white before:transition-transform before:duration-1000 before:content-[''] hover:text-zinc-950 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        
        {status === "success" && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500">Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default AboutMe;
