"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    CheckCircle,
    XCircle,
    Clock,
    AlertTriangle,
    ShieldAlert,
    Timer,
    Zap,
    Calculator,
    TrendingUp,
    Shield,
    FileText,
    BarChart3,
    Network,
    Landmark,
    ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---

const whyReasons = [
    {
        title: "Error-Free Payroll",
        description: "Eliminate costly mistakes with our highly accurate engine. Automated checks ensure compliance and precise payouts every single time.",
        icon: Calculator,
        images: { light: "/error-free-payroll-calculation-light.png", dark: "/error-free-payroll-calculation-dark.png" },
    },
    {
        title: "Real-time Calculations",
        description: "Watch payroll update instantly. Calculate gross pay, taxes, and net compensation in real-time without frustrating batch processing delays.",
        icon: Zap,
        images: { light: "/realtime-calculations-light.png", dark: "/realtime-calculations-dark.png" },
    },
    {
        title: "Comprehensive Records",
        description: "Maintain a single source of truth. Access detailed historical data with complete audit trails for frictionless reporting and compliance.",
        icon: FileText,
        images: { light: "/payroll-records-light.png", dark: "/payroll-records-dark.png" },
    },
    {
        title: "Advanced Reporting",
        description: "Turn data into actionable insights. Generate custom reports to intimately understand workforce costs and organizational trends.",
        icon: BarChart3,
        images: { light: "/advanced-payroll-reporting-light.png", dark: "/advanced-payroll-reporting-dark.png" },
    },
    {
        title: "Flexible Workflows",
        description: "Adapt to your specific business needs. Configure multi-stage approval chains and custom routing for complex enterprise structures.",
        icon: Network,
        images: { light: "/flexible-workflow-light.png", dark: "/flexible-workflow-dark.png" },
    },
    {
        title: "Loans & Benefits",
        description: "Streamline employee financial assistance. Easily manage loan disbursements and automate repayment deductions transparently.",
        icon: Landmark,
        images: { light: "/employee-loans-light.png", dark: "/employee-loans-dark.png" },
    }
];

const comparisonData = [
    {
        without: { text: "Manual payroll processing", icon: Clock },
        with: { text: "Fully automated payroll engine", icon: Zap },
    },
    {
        without: { text: "Frequent calculation errors", icon: AlertTriangle },
        with: { text: "99.9% accuracy, every run", icon: Calculator },
    },
    {
        without: { text: "Hours spent on each pay cycle", icon: Timer },
        with: { text: "Run payroll in under 5 minutes", icon: TrendingUp },
    },
    {
        without: { text: "Compliance risks & penalties", icon: ShieldAlert },
        with: { text: "Built-in compliance assurance", icon: Shield },
    },
];

export const Why = () => {
    return (
        <>
            <WhyUsAccordion />
            <WhyComparisonToggle />
        </>
    );
};

const WhyUsAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    const activeReason = whyReasons[activeIndex];

    return (
        <section
            id="why"
            className="pt-20 pb-10 lg:pt-32 lg:pb-16 bg-asl-bg transition-colors relative overflow-hidden"
        >
            <div className="container-custom">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-asl-accent/10 text-asl-accent text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-asl-accent"></span>
                        WHY ASL
                    </div>

                    <h2 className="text-4xl lg:text-6xl font-black text-asl-text-primary leading-[1.1] tracking-tight mb-6">
                        Everything you need,<br />
                        built for scale.
                    </h2>

                    <p className="text-lg lg:text-xl text-asl-text-secondary leading-relaxed font-medium">
                        All the features you need to run payroll smoothly and efficiently.
                    </p>
                </motion.div>

                {/* CONTENT GRID */}
                <div className="grid lg:grid-cols-[35%_65%] gap-10 lg:gap-14 items-start min-h-[800px]">

                    {/* ACCORDION */}
                    <div className="flex flex-col gap-3">
                        {whyReasons.map((reason, i) => {
                            const isActive = activeIndex === i;
                            const Icon = reason.icon;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setActiveIndex(i)}
                                    className={`border rounded-md overflow-hidden cursor-pointer transition-all duration-500 ${isActive
                                        ? "border-asl-accent bg-asl-surface shadow-lg shadow-asl-accent/5"
                                        : "border-asl-border bg-asl-surface hover:border-asl-accent/40"
                                        }`}
                                >
                                    {/* HEADER */}
                                    <div className="p-4 md:p-5 flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`w-10 h-10 rounded-md flex items-center justify-center shrink-0 transition-colors duration-500 ${isActive
                                                    ? "bg-asl-accent text-white"
                                                    : "bg-asl-bg text-asl-text-secondary"
                                                    }`}
                                            >
                                                <Icon
                                                    strokeWidth={isActive ? 2.5 : 2}
                                                    className="w-5 h-5"
                                                />
                                            </div>

                                            <h3
                                                className={`text-lg font-bold transition-colors duration-300 ${isActive
                                                    ? "text-asl-accent"
                                                    : "text-asl-text-primary"
                                                    }`}
                                            >
                                                {reason.title}
                                            </h3>
                                        </div>

                                        <motion.div
                                            animate={{ rotate: isActive ? 180 : 0 }}
                                            className={
                                                isActive
                                                    ? "text-asl-accent"
                                                    : "text-asl-text-secondary"
                                            }
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </div>

                                    {/* CONTENT */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                            >
                                                <div className="px-5 md:px-6 pb-5">
                                                    <p className="text-asl-text-secondary md:ml-[3.5rem] leading-snug">
                                                        {reason.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT IMAGE (STICKY) */}
                    <div className="sticky top-24 h-fit group hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            {/* Glow */}
                            <div className="absolute inset-x-10 inset-y-10 bg-asl-accent/20 blur-[100px] rounded-full -z-10 group-hover:bg-asl-accent/30 transition-colors duration-700" />

                            {/* Frame */}
                            <motion.div
                                whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative rounded-md p-4 lg:p-6 shadow-2xl backdrop-blur-sm perspective-1000 border border-asl-border/50 bg-asl-bg/50"
                            >
                                {/* IMAGE VIEWPORT */}
                                <div className="relative rounded-md overflow-hidden border border-asl-border bg-asl-surface">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.45 }}
                                        >
                                            <Image
                                                src={isDark ? activeReason.images.dark : activeReason.images.light}
                                                alt={activeReason.title}
                                                width={1400}
                                                height={1050}
                                                className="w-full h-auto"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const WhyComparisonToggle = () => {
    const [mode, setMode] = useState<"without" | "with">("without");
    const isWithout = mode === "without";

    return (
        <section className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-asl-bg transition-colors relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-lg text-asl-text-secondary font-medium">
                        Let's see the comparison.
                    </p>
                </motion.div>

                {/* TOGGLE PILL */}
                <div className="flex justify-center mb-10">
                    <div className="relative flex bg-asl-bg rounded-md p-1.5 border border-asl-border">
                        <motion.div
                            animate={{
                                left: isWithout ? "6px" : "calc(50% + 2px)",
                                backgroundColor: isWithout ? "var(--color-asl-surface)" : "var(--color-asl-accent)"
                            }}
                            className="absolute top-1.5 bottom-1.5 w-[calc(50%-4px)] rounded-md shadow-lg border border-asl-border/50"
                        />
                        <button
                            onClick={() => setMode("without")}
                            className={`relative z-10 px-8 py-2.5 rounded-md text-sm font-bold transition-colors duration-500 ${isWithout ? "text-asl-error" : "text-asl-text-secondary hover:text-asl-text-primary"}`}
                        >
                            Without ASL
                        </button>
                        <button
                            onClick={() => setMode("with")}
                            className={`relative z-10 px-8 py-2.5 rounded-md text-sm font-bold transition-colors duration-500 ${!isWithout ? "text-white" : "text-asl-text-secondary hover:text-asl-text-primary"}`}
                        >
                            With ASL
                        </button>
                    </div>
                </div>

                {/* LIST CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`rounded-md border overflow-hidden transition-all duration-500 bg-asl-surface ${isWithout ? "border-asl-border" : "border-asl-accent/30"}`}
                >
                    {comparisonData.map((item, i) => {
                        const current = isWithout ? item.without : item.with;
                        const Icon = current.icon;
                        const isLast = i === comparisonData.length - 1;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`flex items-center gap-5 px-6 py-5 transition-all duration-500 ${!isLast ? "border-b border-asl-border/30" : ""}`}
                            >
                                <motion.div
                                    animate={{
                                        backgroundColor: isWithout ? "oklch(95% 0.1 20)" : "oklch(95% 0.1 250)",
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="shrink-0 w-10 h-10 rounded-md flex items-center justify-center opacity-10"
                                >
                                    {isWithout ? <XCircle className="w-5 h-5 text-asl-error" /> : <CheckCircle className="w-5 h-5 text-asl-accent" />}
                                </motion.div>

                                <p className={`flex-1 text-[15px] font-medium transition-colors duration-500 ${isWithout ? "text-asl-text-secondary" : "text-asl-text-primary"}`}>
                                    {current.text}
                                </p>

                                <div className={`shrink-0 transition-all duration-500 ${isWithout ? "text-asl-error/40" : "text-asl-accent/30"}`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};