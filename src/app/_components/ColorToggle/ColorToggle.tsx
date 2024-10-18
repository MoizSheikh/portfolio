"use client";
import { useTheme } from "@/app/_lib/context/ThemeController";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ColorToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={` px-4 transition-colors bg-background`}
    >
      <SliderToggle selected={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

const SliderToggle = ({
  selected,
  toggleTheme,
}: {
  selected: "light" | "dark";
  toggleTheme: () => void;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} text-para`}
        onClick={toggleTheme}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-300"
        }`}
        onClick={toggleTheme}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default ColorToggle;
