"use client";

import { Calculator, FileText, Clock, BarChart3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Error-Free Payroll Run",
      description:
        "Boost morale and reduce payroll stress. Perform error-free payroll with our engine that ensures accuracy and compliance.",
      visual: "chart" as const,
    },
    {
      title: "Real-time Calculations",
      description:
        "Perform instant payroll calculations. Calculate gross pay, taxes, and net pay with real-time computation.",
      visual: "metrics" as const,
    },
    {
      title: "Payroll Records",
      description:
        "Track and maintain detailed payroll history for comprehensive reporting and compliance purposes.",
      visual: "table" as const,
    },
    {
      title: "Advanced Reporting",
      description:
        "GainInsights with custom payroll reports. Understand cost breakdown with detailed analytics.",
      visual: "chart" as const,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0F172A] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* 🔥 SPLIT HEADER (IMPORTANT CHANGE) */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16 lg:mb-20">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              FEATURES
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Smart Features for <br />
              Modern Payroll Teams
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-14">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Automate tasks, track performance, and manage payroll effortlessly
              in one powerful platform built for modern businesses.
            </p>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// =======================
// FEATURE CARD
// =======================

interface FeatureCardProps {
  title: string;
  description: string;
  visual: "chart" | "metrics" | "table";
}

const FeatureCard = ({ title, description, visual }: FeatureCardProps) => {
  return (
    <div className="bg-white dark:bg-[#1F2937] rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 group">

      {/* VISUAL */}
      <div className="mb-6 h-56 bg-gray-100 dark:bg-[#111827] rounded-xl flex items-center justify-center">
        {visual === "chart" && <ChartPlaceholder />}
        {visual === "metrics" && <MetricsPlaceholder />}
        {visual === "table" && <TablePlaceholder />}
      </div>

      {/* TEXT */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// =======================
// VISUAL PLACEHOLDERS
// =======================

const ChartPlaceholder = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full">
    <path
      d="M 0 150 L 50 120 L 100 130 L 150 80 L 200 90 L 250 60 L 300 70 L 350 40 L 400 50"
      stroke="#2563EB"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M 0 150 L 50 120 L 100 130 L 150 80 L 200 90 L 250 60 L 300 70 L 350 40 L 400 50 L 400 200 L 0 200 Z"
      fill="url(#gradientBlue)"
      opacity="0.2"
    />
    <defs>
      <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const MetricsPlaceholder = () => (
  <div className="text-center space-y-3">
    <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
      45,637
    </div>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold">
      +9.6%
    </div>
  </div>
);

const TablePlaceholder = () => (
  <div className="w-full space-y-2 p-4">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="flex items-center gap-3 p-3 bg-white dark:bg-[#111827] rounded-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600"></div>
        <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </div>
    ))}
  </div>
);