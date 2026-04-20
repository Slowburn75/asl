"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast can we implement ASL Payroll?",
      a: "Standard implementation for enterprises takes 2-4 weeks. Our white-glove team handles data migration and ERP syncing to ensure a smooth transition.",
    },
    {
      q: "Does ASL handle international payroll?",
      a: "Yes, we support payroll in over 120 countries through our unified engine, handling currency conversions and local tax compliances automatically.",
    },
    {
      q: "Is my data secure with ASL?",
      a: "Absolutely. We are SOC2 Type II and ISO 27001 certified. All data is encrypted at rest and in transit, with regular third-party security audits.",
    },
    {
      q: "Can we integrate ASL with our existing HRIS?",
      a: "Yes, we have native integrations for Workday, BambooHR, and Hibob, as well as a robust API for custom enterprise integrations.",
    },
  ];

  return (
    <section id="faq" className="py-32 lg:py-48 bg-asl-bg relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-asl-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-asl-accent/10 text-asl-accent text-sm font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-asl-accent"></span>
              FAQ
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-asl-text-primary leading-[1.1] tracking-tight mb-8">
              Reliable answers for<br />
              ambitious teams.
            </h2>
            <p className="text-xl text-asl-text-secondary leading-relaxed font-medium">
              Everything you need to know about scaling your payroll with ASL.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-md overflow-hidden transition-all duration-500 ${openIndex === i ? "bg-asl-surface border-asl-accent shadow-xl shadow-asl-accent/5" : "bg-asl-surface border-asl-border"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-asl-bg/50 transition-colors"
                >
                  <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === i ? "text-asl-accent" : "text-asl-text-primary"}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${openIndex === i ? "bg-asl-accent border-asl-accent text-white" : "bg-asl-bg border-asl-border text-asl-text-secondary"
                      }`}>
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-asl-text-secondary text-lg leading-relaxed border-t border-asl-border/30 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="container-custom py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-md p-12 lg:p-24 text-center overflow-hidden border border-asl-border/10 group shadow-2xl"
      >
        {/* Complex Premium Background Gradient - Fixed Dark for Brand Impact */}
        <div className="absolute inset-0 bg-asl-brand -z-20" />
        <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-asl-accent/5 blur-[150px] rounded-full -z-10 animate-pulse transition-opacity duration-1000" />
        <div className="absolute bottom-[-5%] right-[10%] w-[600px] h-[600px] bg-asl-accent/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] bg-asl-brand/5 blur-[100px] rounded-full -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150 pointer-events-none -z-10" />

        <div className="relative z-10 max-w-[800px] mx-auto">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-10 text-white leading-[1.05]">
            Ready to secure your <br />
            financial future?
          </h2>
          <p className="text-2xl text-white/80 mb-14 leading-relaxed font-medium">
            Join the enterprise-grade platform trusted by 500+ scaling businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button size="lg" className="bg-white text-asl-brand hover:bg-asl-surface border-none px-12 h-18 text-xl rounded-md">
              Get Started Now
            </Button>
            <Link href="#" className="flex items-center gap-3 text-white font-bold text-xl group/link transition-all">
              Talk to an Expert <ArrowRight size={24} className="group-hover/link:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-asl-accent/30" />
        <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-asl-accent/20" />
        <div className="absolute top-1/2 right-12 w-1 h-12 bg-gradient-to-b from-transparent via-asl-accent/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="pt-32 pb-16 bg-asl-bg border-t border-asl-border/20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2 space-y-10">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={isDark ? "/asl_logo_dark.svg" : "/asl_logo_light.svg"}
                alt="ASL Payroll"
                width={140}
                height={52}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-lg text-asl-text-secondary leading-relaxed max-w-[320px]">
              Elevating the enterprise payroll experience through high-fidelity automation and global compliance.
            </p>
            <div className="flex items-center gap-5">
              {[Globe, Shield, Zap].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-asl-border/20 flex items-center justify-center bg-asl-surface text-asl-text-primary hover:bg-asl-surface/80 shadow-sm hover:border-asl-accent transition-all duration-300">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Pricing", "Security", "Desktop App", "Integrations"] },
            { title: "Company", links: ["About Us", "Our Customers", "Partners", "Careers", "Contact"] },
          ].map((col, i) => (
            <div key={i} className="space-y-8">
              <h4 className="font-black text-asl-text-primary uppercase tracking-[0.2em] text-xs">
                {col.title}
              </h4>
              <ul className="space-y-5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-asl-text-secondary hover:text-asl-accent transition-colors font-medium">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 space-y-8">
            <h4 className="font-black text-asl-text-primary uppercase tracking-[0.2em] text-xs">Stay Updated</h4>
            <p className="text-asl-text-secondary text-sm">Get the latest payroll insights and compliance updates delivered to your inbox.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="name@company.com"
                className="bg-asl-surface border border-asl-border/30 rounded-md px-4 py-3 text-sm flex-1 focus:outline-none focus:border-asl-accent transition-colors"
              />
              <Button size="sm" className="px-4">Join</Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-asl-border/20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-8 text-sm text-asl-text-secondary font-medium uppercase tracking-widest text-[10px]">
            <p className="">© 2026 ASL Payroll Systems Inc.</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-asl-text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-asl-text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-asl-success animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-asl-text-secondary">System Status: Operational</span>
          </div>
        </div>
      </div>

      {/* LARGE LOGO WATERMARK */}
      <div className="absolute bottom-[-15%] right-[-5%] opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0">
        <Image
          src={isDark ? "/asl_logo_dark.svg" : "/asl_logo_light.svg"}
          alt=""
          width={1200}
          height={400}
          className="w-[800px] lg:w-[1200px] h-auto grayscale select-none"
        />
      </div>
    </footer>
  );
};
