import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#388087",
        "primary-accent": "rgba(194, 237, 206, 0.30)",
        "slate-btn": "#6FB3B8",
        "refferal-bg": "#F6F6F2",
      },
      boxShadow: {
        md: "0 4px 9px 4px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lighter:
          "0 0px 14px 0px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
      },
      extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"], // Replace 'Inter' with your font's name
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
