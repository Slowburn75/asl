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

// --- COMPONENTS ---

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
        <section className="pt-20 pb-10 lg:pt-32 lg:pb-16 bg-white dark:bg-[#0F172A] transition-colors relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* HEADER */}
                <div className="grid lg:grid-cols-2 gap-10 items-start mb-16 lg:mb-20">

                    {/* LEFT */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            WHY ASL
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                            Everything you need,<br />
                            built for scale.
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:pt-14">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                            All the features you need to run payroll smoothly and efficiently.
                        </p>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div className="grid lg:grid-cols-[35%_65%] gap-12 lg:gap-16 items-start">

                    {/* ACCORDION LIST */}
                    <div className="flex flex-col gap-4">
                        {whyReasons.map((reason, i) => {
                            const isActive = activeIndex === i;
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${isActive
                                        ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-500/50 shadow-md"
                                        : "border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1F2937] hover:border-blue-300 dark:hover:border-gray-600"
                                        }`}
                                >
                                    <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-5">
                                            <div
                                                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-100 dark:bg-[#111827] text-gray-500 dark:text-gray-400"
                                                    }`}
                                            >
                                                <Icon strokeWidth={isActive ? 2.5 : 2} className="w-6 h-6" />
                                            </div>
                                            <h3
                                                className={`text-xl font-bold transition-colors duration-300 ${isActive
                                                    ? "text-blue-700 dark:text-blue-400"
                                                    : "text-gray-900 dark:text-gray-100"
                                                    }`}
                                            >
                                                {reason.title}
                                            </h3>
                                        </div>
                                        <div
                                            className={`shrink-0 transition-transform duration-500 ${isActive ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-gray-400"
                                                }`}
                                        >
                                            <ChevronDown className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Expanded content */}
                                    <div
                                        className={`px-6 md:px-8 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-600 dark:text-gray-400 md:ml-[4.25rem] leading-relaxed">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT SIDE IMAGE VIEWPORT */}
                    <div className="sticky top-32 group hidden lg:block">
                        {/* Soft background glow */}
                        <div className="absolute inset-x-10 inset-y-10 bg-blue-400/20 dark:bg-blue-500/10 blur-[100px] rounded-full -z-10 group-hover:bg-blue-400/30 transition-colors duration-700" />

                        <div className="relative rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-800/80 bg-gray-50/50 dark:bg-[#111827]/50 p-4 lg:p-6 shadow-2xl backdrop-blur-sm">
                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-inner bg-white dark:bg-gray-900 flex items-center justify-center">
                                <Image
                                    key={activeIndex} // Forces re-mount for animation
                                    src={isDark ? activeReason.images.dark : activeReason.images.light}
                                    alt={activeReason.title}
                                    width={1400}
                                    height={1050}
                                    className="w-full h-auto object-cover animate-in fade-in zoom-in-95 duration-500"
                                    priority
                                />
                            </div>
                        </div>
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
        <section className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white dark:bg-[#0F172A] transition-colors relative">
            <div className="max-w-3xl mx-auto px-6 lg:px-12">
                {/* HEADER */}
                <div className="text-center mb-10">
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                        Let's see the comparison.
                    </p>
                </div>

                {/* TOGGLE PILL */}
                <div className="flex justify-center mb-10">
                    <div className="relative flex bg-gray-100 dark:bg-[#1F2937] rounded-full p-1.5 shadow-sm border border-gray-200/50 dark:border-gray-800">
                        <div
                            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-3px)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isWithout
                                ? "left-1.5 bg-white dark:bg-[#0F172A] shadow-md border border-gray-200/50 dark:border-gray-700"
                                : "left-[calc(50%+1.5px)] bg-blue-600 shadow-md shadow-blue-600/30 border border-transparent"
                                }`}
                        />
                        <button
                            onClick={() => setMode("without")}
                            className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${isWithout
                                ? "text-red-500"
                                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                }`}
                        >
                            Without ASL
                        </button>
                        <button
                            onClick={() => setMode("with")}
                            className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 ${!isWithout
                                ? "text-white"
                                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                }`}
                        >
                            With ASL
                        </button>
                    </div>
                </div>

                {/* LIST CONTAINER */}
                <div
                    className={`rounded-2xl shadow-sm border overflow-hidden transition-all duration-500 ${isWithout
                        ? "bg-white dark:bg-[#1F2937] border-gray-200 dark:border-gray-800"
                        : "bg-white dark:bg-[#1F2937] border-blue-200 dark:border-blue-900/50 shadow-blue-900/5"
                        }`}
                >
                    {comparisonData.map((item, i) => {
                        const current = isWithout ? item.without : item.with;
                        const Icon = current.icon;
                        const isLast = i === comparisonData.length - 1;

                        return (
                            <div
                                key={i}
                                className={`flex items-center gap-5 px-6 py-5 transition-all duration-500 ${!isLast ? "border-b border-gray-100 dark:border-gray-800/80" : ""
                                    }`}
                                style={{ transitionDelay: `${i * 60}ms` }}
                            >
                                {/* Status icon */}
                                <div
                                    className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isWithout
                                        ? "bg-red-50 dark:bg-red-900/20"
                                        : "bg-blue-50 dark:bg-blue-900/20"
                                        }`}
                                    style={{ transitionDelay: `${i * 60 + 80}ms` }}
                                >
                                    {isWithout ? (
                                        <XCircle className="w-5 h-5 text-red-500 transition-transform duration-400" />
                                    ) : (
                                        <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-500 transition-transform duration-400" />
                                    )}
                                </div>

                                {/* Text */}
                                <p
                                    className={`flex-1 text-[15px] font-medium transition-colors duration-500 ${isWithout
                                        ? "text-gray-600 dark:text-gray-300"
                                        : "text-gray-900 dark:text-gray-100"
                                        }`}
                                >
                                    {current.text}
                                </p>

                                {/* Context icon */}
                                <div
                                    className={`shrink-0 transition-all duration-500 ${isWithout
                                        ? "text-red-300 dark:text-red-900/50"
                                        : "text-blue-300 dark:text-blue-900/50"
                                        }`}
                                    style={{ transitionDelay: `${i * 60 + 120}ms` }}
                                >
                                    <Icon className="w-4 h-4" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};