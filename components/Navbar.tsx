import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Transform values for sticky CTA
  const opacity = useTransform(scrollY, [400, 600], [0, 1]);
  const y = useTransform(scrollY, [400, 600], [20, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Products", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Compliance", href: "#why" },
    { name: "Resources", href: "#" },
  ];

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${scrolled ? "h-16 lg:h-20 bg-asl-bg/80 backdrop-blur-xl border-b border-asl-border/10 shadow-sm" : "h-20 lg:h-24 bg-transparent"}`}>
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-[110]">
            <Image
              src={isDark ? "/asl_logo_dark.svg" : "/asl_logo_light.svg"}
              alt="ASL Payroll"
              width={140}
              height={52}
              priority
              className="h-8 lg:h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-asl-text-secondary hover:text-asl-accent transition-all text-sm font-bold uppercase tracking-widest hover:-translate-y-0.5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Button size="sm" className="rounded-md px-6">Get Started</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 relative z-[110]">
            <ThemeToggle />
            <button
              className="w-10 h-10 flex items-center justify-center rounded-md bg-asl-accent/10 text-asl-accent"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-asl-bg flex flex-col p-10 pt-32"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-asl-text-primary hover:text-asl-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto space-y-6"
            >
              <hr className="border-asl-border/20" />
              <Button size="lg" className="w-full h-16 rounded-md">Start Free Trial</Button>
              <div className="flex justify-center gap-8 text-sm font-bold uppercase tracking-widest text-asl-text-secondary">
                <Link href="#">Privacy</Link>
                <Link href="#">Terms</Link>
                <Link href="#">Support</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY CTA (appears on scroll) */}
      <motion.div
        style={{ opacity, y }}
        className="fixed bottom-8 right-8 z-[80] hidden lg:block"
      >
        <Button size="lg" className="rounded-md shadow-2xl shadow-blue-600/20 group h-14 pr-4">
          Upgrade Now <div className="ml-4 w-8 h-8 rounded-md bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform"><ArrowRight size={16} /></div>
        </Button>
      </motion.div>
    </>
  );
};
