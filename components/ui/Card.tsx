import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Card = ({
  className,
  children,
  glow = true,
}: {
  className?: string;
  children: React.ReactNode;
  glow?: boolean;
}) => (
  <div
    className={cn(
      "bg-asl-surface/40 border border-asl-border/30 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:border-asl-accent/30 group relative",
      className
    )}
  >
    {glow && (
      <div className="absolute -inset-px bg-gradient-to-br from-asl-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    )}
    <div className="relative z-10 h-full">
      {children}
    </div>
  </div>
);
