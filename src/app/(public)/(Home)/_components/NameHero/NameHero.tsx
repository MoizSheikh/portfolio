"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/app/_lib/context/ThemeController";

const STATS = [
  { value: "6+", label: "years shipping" },
  { value: "1M+", label: "ad impressions / day" },
  { value: "220+", label: "billed advertisers / mo" },
  { value: "15+", label: "country configs" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.19, 1, 0.22, 1] },
});

export const NameHero = () => {
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 500], [1, 0]);
  const lift = useTransform(scrollY, [0, 500], [0, -80]);

  const glow =
    theme === "light"
      ? "radial-gradient(120% 80% at 50% 0%, #ffffff 45%, #dbeafe 75%, #e0e7ff 100%)"
      : "radial-gradient(120% 80% at 50% 0%, #020617 45%, #0b1d3a 75%, #0f2a4a 100%)";

  return (
    <section
      style={{ backgroundImage: glow }}
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16"
    >
      {theme === "dark" && (
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars radius={200} count={2000} factor={4} fade speed={1} />
          </Canvas>
        </div>
      )}

      <motion.div
        style={{ opacity: fade, y: lift }}
        className="relative z-10 mx-auto w-full max-w-6xl text-left"
      >
        <motion.div
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-500"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Software Engineer III at Laam · open to remote work
        </motion.div>

        <motion.p {...fadeUp(0.1)} className="text-lg text-muted md:text-2xl">
          Hey, I&apos;m
        </motion.p>
        <motion.h1
          {...fadeUp(0.15)}
          className="mt-2 text-5xl font-extrabold leading-[0.95] tracking-tight text-heading sm:text-7xl lg:text-8xl xl:text-9xl"
        >
          Abdul Moiz
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            Sheikh.
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-xl"
        >
          Full-stack engineer who owns products end to end. I build ad
          platforms, CRMs and design systems with React, TypeScript and Python,
          from the design doc to the billing ledger.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 active:scale-95"
          >
            See my journey
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-400/50 px-5 py-3 text-sm font-semibold text-heading transition hover:border-sky-400 active:scale-95"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.dl
          {...fadeUp(0.45)}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-slate-400/20 pt-8 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-3xl font-bold text-heading md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href="#hero-section"
        aria-label="Scroll down"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2.5" fill="currentColor" />
        </svg>
      </motion.a>
    </section>
  );
};
