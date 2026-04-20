"use client";

import { TrendingUp, Users, DollarSign, FileCheck } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Payroll Accuracy",
    },
    {
      icon: Users,
      value: "500+",
      label: "Companies Trust ASL",
    },
    {
      icon: DollarSign,
      value: "$2.5B+",
      label: "Processed Annually",
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "Compliance Rate",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50 dark:bg-[#111827] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1F2937] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >

              {/* ICON (SUBTLE, NOT DOMINANT) */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              {/* VALUE (MAIN FOCUS) */}
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                {stat.value}
              </div>

              {/* LABEL */}
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};