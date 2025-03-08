"use client";

import { cva } from "class-variance-authority";
import clsx from "clsx";

// Define button variants using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center ",
  {
    variants: {
      variant: {
        primary: "bg-customGradient text-white hover:bg-customGradient2 text-lg",
        secondary: "bg-white  text-black hover:bg-customGradient shadow-lg text-lg transition-all duration-500 ease-in-out hover:text-white ",
        header: "bg-theme  font-medium   text-white rounded-[4px] ",
        reverse: "text-theme  font-bold border rounded-[4px] border-theme   hover:bg-theme hover:text-white ", 
      },

      disableHoverOnGroup: {
        true: "group-hover:hover:bg-transparent group-hover:hover:text-inherit", // Stops hover effect
        false: "",
      },
      size: {
        sm: "px-3 py-1 lg:py-3  text-sm",
        md: "w-48 h-14",
        lg: "w-52 h-14 ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disableHoverOnGroup: false,

    },

    
  }
);

// Button component
export default function Button({ variant, size, className,   disableHoverOnGroup = false,
  children, ...props }) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size  , disableHoverOnGroup}), className)}
      {...props}
    >
      {children}
    </button>
  );
}