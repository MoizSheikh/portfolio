import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

// Combine Tailwind CSS classes with clsx for conditional classes
// example: cn("text-white", { "bg-black": isDark })
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}