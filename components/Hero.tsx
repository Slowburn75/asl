import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-26 pb-0 lg:pt-42 lg:pb-0 overflow-visible bg-asl-hero-bg">
      {/* Premium Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-asl-accent/5 blur-[150px] rounded-full -z-10 animate-pulse transition-opacity duration-1000" />
      <div className="absolute bottom-[-5%] right-[10%] w-[600px] h-[600px] bg-asl-accent/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] bg-asl-brand/5 blur-[100px] rounded-full -z-10" />

      <div className="container-custom">
        <div className="max-w-[900px] mx-auto text-center mb-40 lg:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-[3.5rem] font-bold tracking-tight leading-[0.95] mb-10 text-asl-text-primary"
          >
            Transform Compliance <br />
            into <span className="shimmer-text">Competitive Advantage.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-asl-text-secondary leading-relaxed mb-12 max-w-[700px] mx-auto"
          >
            The next-generation payroll engine for modern enterprise teams.
            Precision billing, automated tax filing, and global coverage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="md" className="px-6 h-11 group">
              Start Free Trial <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="md" className="px-6 h-11 gap-3">
              <PlayCircle size={18} /> Book a Demo
            </Button>
          </motion.div>


        </div>

        {/* Product Screenshot — Padded Frame with Shade */}
        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mx-auto max-w-[1240px] mt-12 lg:mt-16 translate-y-1/8"        >
          {/* Gradient shade behind the frame */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50%] bg-asl-accent/20 dark:bg-asl-accent/30 blur-[100px] rounded-full -z-10" />

          {/* Main frame */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-asl-surface border-t border-l border-r border-b-0 rounded-t-md rounded-b-none p-2 lg:p-4 lg:pb-0 shadow-2xl backdrop-blur-xl"
          >
            {/* Screenshot */}
            <div className="relative rounded-t-md rounded-b-none overflow-hidden border-t border-l border-r border-b-0 border-asl-border/20 shadow-lg">
              <Image
                src={isDark ? "/payroll-records-dark.png" : "/payroll-records-light.png"}
                alt="ASL Payroll Dashboard"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-cover object-top scale-[1.01]"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 lg:h-64 bg-gradient-to-t from-asl-bg via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
