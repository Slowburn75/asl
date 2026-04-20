"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="glass-nav">
      <div className="container-custom h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={isDark ? "/asl_logo_dark.svg" : "/asl_logo_light.svg"}
            alt="ASL Payroll"
            width={140}
            height={52}
            priority
            className="h-10 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Products", "Pricing", "Resources", "Why ASL?"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-asl-text-secondary hover:text-asl-text-primary transition-colors text-sm font-medium"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="#" className="text-sm font-medium hover:text-asl-accent transition-colors">
            Login
          </Link>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-asl-bg border-b border-asl-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {["Products", "Pricing", "Resources", "Why ASL?"].map((link) => (
            <Link key={link} href="#" className="text-lg font-medium">
              {link}
            </Link>
          ))}
          <hr className="border-asl-border" />
          <div className="flex flex-col gap-4">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
