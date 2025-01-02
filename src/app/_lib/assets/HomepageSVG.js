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
