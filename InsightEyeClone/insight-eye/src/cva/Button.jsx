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
        roundedButton: "bg-customGradient font-bold text-white rounded-full",
        buttonBlack:'bg-black text-white font-semibold text-xl'
      },

      disableHoverOnGroup: {
        true: "group-hover:hover:bg-transparent group-hover:hover:text-inherit",
        false: "",
      },
      size: {
        sm: "px-3 py-1 lg:py-3  text-sm",
        md: "w-48 h-14",
        lg: "w-52 h-14 ",
        roundLg:'w-32 h-32',
        roundMd:'w-20 h-20',
        roundSm:'w-12 h-12'

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