import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

import { motion } from "framer-motion";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-br from-asl-brand via-asl-accent to-asl-accent/80 text-white hover:-translate-y-0.5 border border-white/10 shadow-lg shadow-asl-accent/20",
      secondary: "bg-asl-surface text-asl-text-primary hover:bg-asl-surface/80 border border-asl-border/50 shadow-sm",
      outline: "bg-transparent text-asl-text-primary border border-asl-border hover:bg-asl-surface/50",
      ghost: "bg-transparent text-asl-text-primary hover:bg-asl-accent/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold tracking-tight",
    };

    return (
      <motion.button
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
