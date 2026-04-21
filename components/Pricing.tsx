"use client";

import { Check, X, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export const Pricing = () => {
  const features = [
    { name: "Global Payroll Dashboard", basic: true, enterprise: true },
    { name: "Automated Tax Compliance", basic: true, enterprise: true },
    { name: "Multi-Entity Management", basic: false, enterprise: true },
    { name: "Dynamic Deductions Engine", basic: true, enterprise: true },
    { name: "Benefit Administration", basic: false, enterprise: true },
    { name: "Advanced Workforce Analytics", basic: false, enterprise: true },
    { name: "SSO & SAML Integration", basic: false, enterprise: true },
    { name: "Custom API Access", basic: false, enterprise: true },
    { name: "Immutable Audit Logs", basic: true, enterprise: true },
    { name: "Dedicated Success Manager", basic: false, enterprise: true },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-asl-bg transition-colors relative overflow-hidden">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asl-accent/10 text-asl-accent text-[11px] font-black uppercase tracking-[0.2em] mb-8 border border-asl-accent/20">
            <Zap size={12} fill="currentColor" />
            Scalable Plans
          </div>
          <h4 className="text-4xl lg:text-4xl font-black text-asl-text-primary leading-[1.1] tracking-tight mb-8">
            Enterprise Grade Performance
          </h4>
          <p className="text-xl text-asl-text-secondary leading-relaxed font-medium">
            Engineered for precision and built for scale. Choose the plan that fits your current operational requirements.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="overflow-x-auto border border-asl-border rounded-md bg-asl-surface shadow-2xl shadow-asl-accent/5"
        >
          <table className="w-full text-left border-collapse min-w-[800px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-asl-border/30">
                <th className="p-8 lg:p-10 text-sm font-black uppercase tracking-[0.2em] text-asl-text-secondary/50">
                  Core Capabilities
                </th>
                <th className="p-8 lg:p-10 text-center">
                  <div className="text-2xl font-black text-asl-text-primary mb-2">Professional</div>
                  <div className="text-sm font-medium text-asl-text-secondary">Essential Payroll</div>
                </th>
                <th className="p-8 lg:p-10 text-center bg-asl-accent/5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asl-accent text-white text-[10px] font-black uppercase tracking-widest mb-4">
                    Enterprise
                  </div>
                  <div className="text-2xl font-black text-asl-text-primary mb-2">Infinite</div>
                  <div className="text-sm font-medium text-asl-text-secondary">Global Scale</div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-asl-border/20">
              {features.map((feature, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-asl-bg/50 transition-colors"
                >
                  <td className="p-6 lg:p-8 text-base font-bold text-asl-text-primary pl-10">
                    {feature.name}
                  </td>

                  {/* Basic */}
                  <td className="p-6 lg:p-8 text-center">
                    <div className="flex justify-center">
                      {feature.basic ? (
                        <div className="w-8 h-8 rounded-full bg-asl-success/10 flex items-center justify-center">
                          <Check className="text-asl-success" size={16} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-asl-bg flex items-center justify-center opacity-30">
                          <X className="text-asl-text-secondary" size={16} />
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Enterprise */}
                  <td className="p-6 lg:p-8 text-center bg-asl-accent/5">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-asl-accent flex items-center justify-center shadow-lg shadow-asl-accent/20">
                        <Check className="text-white" size={20} />
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>

            {/* Footer Row */}
            <tfoot className="bg-asl-bg/30">
              <tr>
                <td className="p-10 pl-12">
                  <div className="flex items-center gap-3 text-sm font-bold text-asl-text-secondary uppercase tracking-widest">
                    <ShieldCheck size={18} className="text-asl-accent" />
                    Audit Ready Infrastructure
                  </div>
                </td>
                <td className="p-10 text-center">
                  <Button variant="outline" size="lg" className="rounded-md px-10">Start Trial</Button>
                </td>
                <td className="p-10 text-center bg-asl-accent/10">
                  <Button size="lg" className="rounded-md px-10">Contact Sales</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
};