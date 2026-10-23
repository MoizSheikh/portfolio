"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";
import { experienceData } from "@/app/_lib/assets/staticData";
import { Experience as Exp } from "@/app/_lib/_types/genericTypes";
import { cn } from "@/app/_lib/helpers/helpers";
import { useTheme } from "@/app/_lib/context/ThemeController";

const timeline = [...experienceData].reverse();

const Wheel = ({ cx, spin }: { cx: number; spin: MotionValue<number> }) => (
  <motion.g style={{ rotate: spin }}>
    <circle cx={cx} cy={34} r={8} fill="#0f172a" />
    <circle cx={cx} cy={34} r={3.5} fill="#cbd5e1" />
    <line x1={cx - 7} y1={34} x2={cx + 7} y2={34} stroke="#cbd5e1" strokeWidth={1.5} />
    <line x1={cx} y1={27} x2={cx} y2={41} stroke="#cbd5e1" strokeWidth={1.5} />
  </motion.g>
);

const Car = ({ spin }: { spin: MotionValue<number> }) => (
  <motion.svg
    width="104"
    height="48"
    viewBox="0 0 98 44"
    animate={{ y: [0, -1.5, 0] }}
    transition={{ duration: 0.4, repeat: Infinity }}
  >
    <path
      d="M4 28 Q4 20 13 20 L30 20 L40 8 Q42 6 46 6 L66 6 Q70 6 73 9 L84 20 Q94 21 94 28 L94 32 Q94 34 92 34 L6 34 Q4 34 4 32 Z"
      fill="#0ea5e9"
    />
    <path d="M44 10 L36 20 L56 20 L56 10 Z" fill="#0f172a" opacity={0.55} />
    <path d="M60 10 L60 20 L79 20 L70 10 Z" fill="#0f172a" opacity={0.55} />
    <rect x={89} y={23} width={5} height={3} rx={1} fill="#fde047" />
    <rect x={4} y={23} width={4} height={3} rx={1} fill="#f87171" />
    <Wheel cx={24} spin={spin} />
    <Wheel cx={74} spin={spin} />
  </motion.svg>
);

const Road = ({ label, flag }: { label: string; flag?: boolean }) => (
  <div className="relative mt-6 h-14 shrink-0">
    <div className="absolute -right-16 left-0 top-[46px] h-[3px] rounded bg-slate-500/40" />
    <div
      className="absolute -right-16 left-0 top-[47px] h-px"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #facc15 0 18px, transparent 18px 36px)",
      }}
    />
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-semibold text-white whitespace-nowrap">
        {flag ? "🏁 " : ""}
        {label}
      </span>
      <span className="h-6 w-px bg-sky-500" />
      <span className="h-3 w-3 -translate-y-1 rounded-full border-2 border-sky-500 bg-background" />
    </div>
  </div>
);

const JobCard = ({ exp, compact }: { exp: Exp; compact?: boolean }) => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl bg-card-bg p-6 text-left",
        compact ? "" : "max-h-full overflow-y-auto",
        {
          whiteCardShadow: theme === "light",
          "border border-card-border": theme === "dark",
        }
      )}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {exp.logo && (
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                fill
                className="rounded-full object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-heading">{exp.company}</h3>
            <p className="font-medium text-sky-500">{exp.role}</p>
          </div>
        </div>
        <div className="shrink-0 text-right text-sm text-muted">
          <p>{exp.duration}</p>
          <p className="text-xs">{exp.location}</p>
        </div>
      </div>
      <ul className="space-y-2 text-sm leading-relaxed text-muted">
        {exp.responsibilities.map((r, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-sky-500">▸</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {exp.technologies.map((t) => (
          <span key={t} className="rounded bg-chip px-2 py-1 text-xs">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const NextStop = () => (
  <div className="flex flex-col justify-center rounded-2xl border border-dashed border-sky-500/50 p-8 text-left">
    <p className="text-sm uppercase tracking-widest text-sky-500">Next stop</p>
    <h3 className="mt-2 text-3xl font-bold text-heading">Your team?</h3>
    <p className="mt-3 text-muted">
      Still driving. Looking for hard product problems and teams that ship.
    </p>
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href="#contact"
        className="rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400"
      >
        Let&apos;s talk
      </a>
      <a
        href="https://topt.al/R8cKVj"
        target="_blank"
        rel="noopener"
        className="rounded-md border border-slate-400/50 px-4 py-2 text-sm font-semibold text-heading hover:border-sky-400"
      >
        Hire on Toptal
      </a>
    </div>
  </div>
);

const startYear = (d: string) => d.split(/\s*-\s*/)[0];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  const dist = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const d = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      dist.set(d);
      setHeight(d + window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [dist]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform([scrollYProgress, dist], ([p, d]: number[]) => -p * d);
  const spin = useTransform(
    [scrollYProgress, dist],
    ([p, d]: number[]) => ((p * d) / (Math.PI * 16)) * 360
  );
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const heading = (
    <h2 className="flex items-baseline text-4xl font-bold text-heading md:text-5xl">
      Experience
      <span className="ml-2 text-sky-500">
        <SingleDotSvg />
      </span>
    </h2>
  );

  return (
    <div id="experience">
      <section
        ref={sectionRef}
        style={{ height }}
        className="relative hidden md:block"
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-10 pt-[96px]">
          <div className="mx-auto mb-8 flex w-full items-end justify-between px-[8vw]">
            <div>
              {heading}
              <p className="mt-2 text-muted">
                {startYear(timeline[0].duration)} → today. Keep scrolling to
                drive.
              </p>
            </div>
            <div className="h-1 w-48 overflow-hidden rounded bg-slate-500/30">
              <motion.div style={{ width: bar }} className="h-full bg-sky-500" />
            </div>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex min-h-0 w-max flex-1 gap-16 pl-[22vw] pr-[12vw]"
          >
            {timeline.map((exp) => (
              <div
                key={exp.id}
                className="flex min-h-0 w-[min(720px,70vw)] flex-col justify-end"
              >
                <JobCard exp={exp} />
                <Road label={startYear(exp.duration)} />
              </div>
            ))}
            <div className="flex w-[min(440px,60vw)] flex-col justify-end">
              <NextStop />
              <Road label="Today" flag />
            </div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-10 left-[8vw] flex h-14 items-end">
            <div className="absolute bottom-[7px] -left-[8vw] h-[3px] w-[30vw] bg-slate-500/40" />
            <div className="relative -translate-y-[8px]">
              <Car spin={spin} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 py-16 text-left md:hidden">
        {heading}
        <ol className="relative mt-10 space-y-10 border-l-2 border-sky-500/40 pl-6">
          {timeline.map((exp) => (
            <li key={exp.id} className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-sky-500 bg-background" />
              <p className="mb-3 text-sm font-semibold text-sky-500">
                {startYear(exp.duration)}
              </p>
              <JobCard exp={exp} compact />
            </li>
          ))}
          <li className="relative">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-sky-500" />
            <p className="mb-3 text-sm font-semibold text-sky-500">🏁 Today</p>
            <NextStop />
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Experience;
