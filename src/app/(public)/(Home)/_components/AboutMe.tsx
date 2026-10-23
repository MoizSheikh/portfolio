import { useState } from "react";
import { cn } from "@/app/_lib/helpers/helpers";
import { useTheme } from "@/app/_lib/context/ThemeController";

const LINKS = [
  { label: "Email", value: "abdulmoizsheikhh@gmail.com", href: "mailto:abdulmoizsheikhh@gmail.com" },
  { label: "GitHub", value: "github.com/moizsheikh", href: "https://www.github.com/moizsheikh" },
  { label: "Toptal", value: "Hire me on Toptal", href: "https://topt.al/R8cKVj" },
  { label: "Resume", value: "Download PDF", href: "/files/AMS.pdf" },
];

const AboutMe = () => {
  const { theme } = useTheme();
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
      console.error(error);
      setStatus("error");
    }
  };

  const input =
    "w-full rounded-lg border border-slate-400/40 bg-background px-4 py-3 text-heading placeholder:text-muted transition-colors focus:border-sky-500 focus:outline-none";

  return (
    <section id="contact" className="mx-auto w-full px-3 pb-12 pt-16 md:w-10/12 md:px-0 lg:w-9/12 xl:w-8/12">
      <div
        className={cn("grid gap-12 rounded-3xl bg-card-bg p-8 text-left md:grid-cols-2 md:p-12", {
          whiteCardShadow: theme === "light",
          "border border-card-border": theme === "dark",
        })}
      >
        <div>
          <p className="text-sm uppercase tracking-widest text-sky-500">Contact</p>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-heading md:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 text-muted">
            Got a role, a product idea or a gnarly system to fix? Drop a note.
            I usually reply within a day.
          </p>
          <ul className="mt-8 divide-y divide-slate-400/20">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  download={l.label === "Resume" || undefined}
                  className="group flex items-center justify-between py-3"
                >
                  <span className="text-xs uppercase tracking-wider text-muted">{l.label}</span>
                  <span className="text-sm text-heading transition-colors group-hover:text-sky-500">
                    {l.value} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-sm text-muted">
            Your email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className={cn(input, "mt-2")}
            />
          </label>
          <label className="flex flex-1 flex-col text-sm text-muted">
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you working on?"
              required
              className={cn(input, "mt-2 min-h-40 flex-1 resize-none")}
            />
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-sm text-emerald-500">Sent. I&apos;ll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Couldn&apos;t send it. Email me directly at abdulmoizsheikhh@gmail.com.
            </p>
          )}
        </form>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-muted md:flex-row">
        <span>© {new Date().getFullYear()} Abdul Moiz Sheikh</span>
        <span>Built with Next.js, Tailwind, Framer Motion and TypeScript</span>
      </footer>
    </section>
  );
};

export default AboutMe;
