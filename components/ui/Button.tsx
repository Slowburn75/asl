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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-br from-blue-700 via-asl-accent to-blue-500 text-white shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 border border-white/10",
      secondary: "bg-asl-surface text-asl-text-primary hover:bg-slate-700/80 border border-white/5 shadow-sm",
      outline: "bg-transparent text-asl-text-primary border border-asl-border hover:bg-white/5",
      ghost: "bg-transparent text-asl-text-primary hover:bg-asl-accent/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold tracking-tight",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
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
