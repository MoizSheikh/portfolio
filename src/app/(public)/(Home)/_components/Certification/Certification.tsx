"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Cert } from "@/app/_lib/_types/genericTypes";
import { certs } from "@/app/_lib/assets/staticData";
import { SingleDotSvg } from "@/app/_lib/assets/HomepageSVG";
import { cn } from "@/app/_lib/helpers/helpers";
import { useTheme } from "@/app/_lib/context/ThemeController";

const CertCard = ({ cert, active }: { cert: Cert; active?: boolean }) => {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col rounded-2xl bg-card-bg p-5 text-left transition-colors",
        active ? "ring-2 ring-sky-500" : "",
        {
          "shadow-lighter": theme === "light",
          "border border-card-border shadow-2xl shadow-black/50": theme === "dark",
        }
      )}
    >
      <div className="flex items-center justify-between">
        {cert.logo && (
          <div className="relative h-9 w-9 overflow-hidden rounded-lg">
            <Image src={cert.logo} alt={`${cert.issuer} logo`} fill className="object-cover" />
          </div>
        )}
        <span className="text-xs text-muted">{cert.issueDate}</span>
      </div>
      <h3 className="mt-4 text-base font-bold leading-snug text-heading">
        {cert.name}
      </h3>
      <p className="mt-1 text-xs text-sky-500">{cert.issuer}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {cert.skills.map((s) => (
          <span key={s} className="rounded bg-chip px-2 py-0.5 text-[10px]">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

const Certification = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });
  const [hovered, setHovered] = useState<number | null>(null);
  const [dealt, setDealt] = useState(false);
  const mid = (certs.length - 1) / 2;

  return (
    <section className="mx-auto w-full overflow-hidden px-3 py-24 md:w-10/12 md:px-0 lg:w-9/12 xl:w-8/12">
      <h2 className="flex items-baseline text-left text-4xl font-bold text-heading md:text-5xl">
        Certifications
        <span className="ml-2 text-sky-500">
          <SingleDotSvg />
        </span>
      </h2>
      <p className="mt-2 text-left text-muted">
        Hover a card to pull it out of the deck.
      </p>

      <div ref={ref} className="relative mt-16 hidden h-[380px] items-end justify-center md:flex">
        {certs.map((cert, i) => {
          const off = i - mid;
          const isHover = hovered === i;
          const push = hovered === null ? 0 : i < hovered ? -24 : i > hovered ? 24 : 0;
          return (
            <motion.div
              key={cert.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ x: 0, y: 40, rotate: 0, opacity: 0 }}
              animate={
                inView
                  ? {
                      x: push,
                      y: isHover ? -48 : Math.abs(off) * Math.abs(off) * 6,
                      rotate: isHover ? 0 : off * 5,
                      opacity: 1,
                      scale: isHover ? 1.06 : 1,
                    }
                  : {}
              }
              transition={{ type: "spring", stiffness: 220, damping: 22, delay: dealt ? 0 : i * 0.08 }}
              onAnimationComplete={() => i === certs.length - 1 && inView && setDealt(true)}
              style={{ zIndex: isHover ? 50 : 10 + i, transformOrigin: "50% 120%" }}
              className="relative -ml-14 h-72 w-48 shrink-0 cursor-pointer first:ml-0 lg:-ml-10 lg:w-56"
            >
              <CertCard cert={cert} active={isHover} />
            </motion.div>
          );
        })}
      </div>

      <div className="-mx-3 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 pb-4 md:hidden">
        {certs.map((cert) => (
          <div key={cert.id} className="h-64 w-56 shrink-0 snap-start">
            <CertCard cert={cert} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
