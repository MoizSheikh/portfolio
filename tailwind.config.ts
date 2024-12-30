import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        secondaryAccent: "var(--secondaryAccent)",
        tertiaryAccent: "var(--tertiaryAccent)",
        heading: "var(--heading)",
        para: "var(--para)",
        link: "var(--link)",
        muted: "var(--muted)",

        btn: "var(--btn)",
        "btn-hover": "var(--btn-hover)",
        "btn-disable": "var(--btn-disable)",
        "btn-disable-text": "var(--btn-disable-text)",
        "btn-active": "var(--btn-active)",

        // "card-bg": "#141414",
        "card-bg": "var(--card-bg)",
        "card-border": "rgba(38,38,38,0.7)"
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
  plugins: [require("daisyui"), require('tailwindcss-motion')],
  // transpilePackages: ['three'],
  // darkMode:"class",
};
export default config;
