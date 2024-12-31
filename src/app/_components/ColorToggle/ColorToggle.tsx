"use client";
import { useTheme } from "@/app/_lib/context/ThemeController";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const ColorToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // <div
    //   className={` px-4 transition-colors bg-transparent fixed bottom-0 right-0 !z-90`}
    // >
    //   <div className="relative flex w-fit items-center rounded-full">
    //     <button className={`${TOGGLE_CLASSES} text-para`} onClick={toggleTheme}>
    //       <FiSun className="relative z-10 text-lg md:text-sm" />
    //     </button>
    //     <button
    //       className={`${TOGGLE_CLASSES} ${
    //         theme === "dark" ? "text-white" : "text-slate-300"
    //       }`}
    //       onClick={toggleTheme}
    //     >
    //       <FiMoon className="relative z-10 text-lg md:text-sm" />
    //     </button>
    //     <div
    //       className={`absolute inset-0 z-0 flex ${
    //         theme === "dark" ? "justify-end" : "justify-start"
    //       }`}
    //     >
    //       <motion.span
    //         layout
    //         transition={{ type: "spring", damping: 15, stiffness: 250 }}
    //         className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
    //       />
    //     </div>
    //   </div>
    // </div>

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
