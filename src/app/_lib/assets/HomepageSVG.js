import React from "react";

export const CardLinksvg = ({ color = "#606666" }) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9999 0C6.71566 0 0 6.71566 0 14.9999C0 23.2841 6.71566 30.0001 14.9999 30.0001C23.2841 30.0001 30.0001 23.2841 30.0001 14.9999C29.9907 6.71951 23.2806 0.00933834 14.9999 0ZM14.9999 28.4999C7.54403 28.4999 1.49991 22.4558 1.49991 14.9999C1.49991 7.54403 7.54403 1.49991 14.9999 1.49991C22.4558 1.49991 28.4999 7.54403 28.4999 14.9999C28.4914 22.4522 22.4522 28.4914 14.9999 28.4999Z"
      fill={color}
    />
    <path
      d="M13.2441 9.18544C12.9321 8.9127 12.4583 8.94456 12.1856 9.2563C11.9131 9.56831 11.945 10.0421 12.2567 10.3148L17.6114 14.9999L12.2564 19.6853C11.9444 19.9581 11.9128 20.4319 12.1853 20.7436C12.458 21.0556 12.9318 21.0875 13.2438 20.8147L19.2437 15.5646C19.4066 15.4224 19.5 15.2164 19.5 14.9999C19.5 14.7835 19.4066 14.5778 19.2437 14.4352L13.2441 9.18544Z"
      fill={color}
    />
  </svg>
);

export const CardLink2svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      fill="#606666"
      d="M15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C.01 6.72 6.72.01 15 0zm0 28.5c7.456 0 13.5-6.044 13.5-13.5S22.456 1.5 15 1.5 1.5 7.544 1.5 15C1.51 22.452 7.548 28.49 15 28.5z"
    ></path>
    <path
      fill="#606666"
      d="M16.756 9.185a.75.75 0 01.987 1.13L12.39 15l5.355 4.685a.75.75 0 11-.988 1.13l-6-5.25a.75.75 0 010-1.13l6-5.25z"
    ></path>
  </svg>
);

export const Comma1Svg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    viewBox="0 0 50 50"
  >
    <circle cx="25" cy="25" r="25" fill="#6FB3B8"></circle>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M23.522 6.67A6.777 6.777 0 0129 13.32a6.774 6.774 0 01-6.771 6.77 6.774 6.774 0 01-6.772-6.77c0-4.981 1.678-8.075 3.648-10.009C22.12.35 25.896.092 25.896.092a.992.992 0 01.881 1.567s-1.794 2.526-2.913 4.395c-.117.196-.235.412-.342.616zM8.57 6.67a6.777 6.777 0 015.477 6.649 6.774 6.774 0 01-6.772 6.77 6.774 6.774 0 01-6.77-6.77c0-4.981 1.677-8.075 3.647-10.009C7.167.35 10.942.092 10.942.092a.992.992 0 01.882 1.567S10.03 4.185 8.911 6.054c-.117.196-.235.412-.342.616z"
      transform="translate(10, 13)"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const SingleDotSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 39 8"
  >
    <circle cx="15" cy="4" r="15" fill="white"></circle>
  </svg>
);

export const DotsSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="8"
    fill="none"
    viewBox="0 0 39 8"
  >
    <circle cx="4" cy="4" r="4" fill="#252B2C"></circle>
    <circle cx="25" cy="4" r="4" fill="#252B2C" opacity="0.2"></circle>
    <circle cx="14" cy="4" r="4" fill="#252B2C" opacity="0.2"></circle>
    <circle cx="35" cy="4" r="4" fill="#252B2C" opacity="0.2"></circle>
  </svg>
);

export const DownArrowSVG = ({ color = "#303c42", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="arrow"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 .5v23m7.5-7.5L12 23.5 4.5 16"
    ></path>
  </svg>
);

export const ExternalLinkSVG = ({
  color = "#303c42",
  className = "",
  size = "1em",
}) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    fillRule="evenodd"
    className={`text-xl text-zinc-300 hover:text-indigo-300 transition-colors ${className}`}
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32ZM770.87 824.869l-52.2 52.2c-4.7 4.7-1.9 12.8 4.7 13.6l179.4 21c5.1.6 9.5-3.7 8.9-8.9l-21-179.4c-.8-6.6-8.9-9.4-13.6-4.7l-52.4 52.4-256.2-256.2c-3.1-3.1-8.2-3.1-11.3 0l-42.4 42.4c-3.1 3.1-3.1 8.2 0 11.3l256.1 256.3Z"
      transform="matrix(1 0 0 -1 0 1024)"
    ></path>
  </svg>
);

export const Github = ({ color = "#303c42", className = "", size = "1em" }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    role="img"
    className={`text-xl text-zinc-300 hover:text-indigo-300 transition-colors ${className}`}
    viewBox="0 0 24 24"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
