"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

const defaultFn = () => {};
type ButtonProps = {
  loading?: boolean;
  className?: string;
  variant?: "active" | "";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
  isPill?: boolean;
  isLoading?: boolean;
  defaultColor?: boolean;
  redirectsTo?: string;
};

const Button = ({
  className = "",
  variant = "active",
  disabled = false,
  onClick = defaultFn,
  children = "",
  type = "button",
  isPill = false,
  isLoading = false,
  defaultColor = false,
  redirectsTo = "",
}: ButtonProps) => {
  const { push } = useRouter();

  return (
    <button
      className={twMerge(
        `btn font-light btn-${variant} ${
          defaultColor ? "bg-slate-btn hover:bg-primary" : ""
        }    ${isPill ? "rounded-full" : "rounded-md"} ${
          disabled || isLoading ? "cursor-not-allowed " : ""
        }`,
        className
      )}
      disabled={disabled}
      onClick={(e) => {
        if (!!redirectsTo) {
          push(redirectsTo);
        } else if ((disabled || isLoading) && type === "button") {
          e.preventDefault(); // Prevent default action if disabled or loading
        } else if (onClick) {
          onClick(e); // Call the passed onClick event if conditions aren't met
        }
      }}
      type={type}
    >
      {children}
      {isLoading && <span className="loading loading-spinner"></span>}
    </button>
  );
};

export default Button;
