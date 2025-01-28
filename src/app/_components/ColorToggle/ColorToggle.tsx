"use client";
import { useTheme } from "@/app/_lib/context/ThemeController";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ColorToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="px-4 ">
      <div className="relative flex items-center justify-center">
        <button
          className={`${TOGGLE_CLASSES} text-para flex items-center justify-center`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <FiMoon className="text-lg md:text-sm" />
          ) : (
            <FiSun className="text-lg md:text-sm" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ColorToggle;
