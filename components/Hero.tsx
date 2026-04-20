"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";

export const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-12 pb-28 lg:pt-20 lg:pb-44 overflow-hidden">
      {/* Premium Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-asl-accent/5 dark:bg-asl-accent/10 blur-[150px] rounded-full -z-10 animate-pulse transition-opacity duration-1000" />
      <div className="absolute bottom-[-5%] right-[10%] w-[600px] h-[600px] bg-blue-400/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] bg-asl-brand/5 dark:bg-asl-brand/10 blur-[100px] rounded-full -z-10" />

      <div className="container-custom">
        <div className="max-w-[900px] mx-auto text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-asl-accent/5 border border-asl-accent/10 rounded-full text-asl-accent text-xs font-bold uppercase tracking-widest mb-8 animate-[slide-up_0.5s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-asl-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-asl-accent"></span>
            </span>
            Enterprise Payroll 2.0
          </div>

          <h1 className="text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[0.95] mb-10 animate-[slide-up_0.6s_ease-out] text-asl-text-primary">
            Transform Compliance <br />
            into <span className="shimmer-text">Competitive Advantage.</span>
          </h1>

          <p className="text-l lg:text-xl text-asl-text-secondary leading-relaxed mb-12 max-w-[700px] mx-auto animate-[slide-up_0.7s_ease-out]">
            The next-generation payroll engine for modern enterprise teams.
            Precision billing, automated tax filing, and global coverage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-[slide-up_0.8s_ease-out]">
            <Button size="lg" className="px-10 h-16 group">
              Start Free Trial <ArrowRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-10 h-16 gap-3">
              <PlayCircle size={22} /> Book a Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-asl-text-secondary animate-fade-in [animation-delay:1000ms]">
            {[
              "Audit Ready SOC2",
              "99.99% Accuracy",
              "24/7 Premium Support"
            ].map((text) => (
              <span key={text} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-asl-accent" /> {text}
              </span>
            ))}
          </div>
        </div>

        {/* Product Screenshot — Padded Frame with Shade */}
        <div className="relative mx-auto max-w-[1240px] animate-[slide-up_1s_ease-out]">
          {/* Gradient shade behind the frame */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-[60%] bg-asl-accent/15 dark:bg-asl-accent/20 blur-[80px] rounded-full -z-10" />

          {/* Main frame */}
          <div className="bg-asl-surface/50 dark:bg-asl-surface/30 border border-asl-border/40 rounded-[1.5rem] lg:rounded-[2rem] p-3 lg:p-5 shadow-xl dark:shadow-2xl backdrop-blur-xl">
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-2 mb-3 lg:mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="ml-4 flex-1 h-7 bg-asl-text-primary/[0.04] dark:bg-white/[0.04] rounded-lg" />
            </div>

            {/* Screenshot */}
            <div className="relative rounded-xl lg:rounded-2xl overflow-hidden border border-asl-border/20">
              <Image
                src={isDark ? "/payroll-records-dark.png" : "/payroll-records-light.png"}
                alt="ASL Payroll Dashboard — Payroll Records"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-cover"
              />
              {/* Stylish bottom blur out */}
              <div className="absolute inset-x-0 bottom-0 h-32 lg:h-48 bg-gradient-to-t from-white/95 dark:from-[#111827]/95 via-white/50 dark:via-[#111827]/50 to-transparent backdrop-blur-[4px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
