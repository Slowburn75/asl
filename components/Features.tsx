import { Calculator, FileText, ShieldCheck, BarChart3, ArrowUpRight, Zap, Database, Lock } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ComplianceMockup = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full h-full p-6 flex flex-col gap-4 overflow-hidden"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-md bg-asl-accent flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-bold text-asl-text-primary uppercase tracking-wider">Compliance Engine</span>
      </div>
      <div className="px-2 py-1 rounded bg-asl-success/10 text-asl-success text-[10px] font-bold">SOC2 CERTIFIED</div>
    </div>

    <div className="space-y-3">
      {[
        { label: "Regional Tax Laws", status: "Active" },
        { label: "Employee Onboarding Logs", status: "Verified" },
        { label: "Payroll Distribution Audit", status: "Secured" },
        { label: "Regional Tax Laws", status: "Active" },
        { label: "Employee Onboarding Logs", status: "Verified" },
        { label: "Payroll Distribution Audit", status: "Secured" },
        { label: "Regional Tax Laws", status: "Active" },
        { label: "Employee Onboarding Logs", status: "Verified" },
        { label: "Payroll Distribution Audit", status: "Secured" },
        { label: "Regional Tax Laws", status: "Active" },
        { label: "Employee Onboarding Logs", status: "Verified" },
        { label: "Payroll Distribution Audit", status: "Secured" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + (i * 0.1) }}
          className="flex items-center justify-between p-3 bg-asl-bg border border-asl-border rounded-md"
        >
          <span className="text-xs font-medium text-asl-text-secondary">{item.label}</span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-asl-success"></div>
            <span className="text-[10px] font-bold text-asl-text-secondary uppercase">{item.status}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AnalyticsMockup = () => (
  <div className="w-full h-full p-6 flex flex-col gap-6">
    <div className="flex items-end justify-between gap-2 h-40">
      {[60, 45, 90, 65, 80, 55, 75].map((h, i) => (
        <div key={i} className="flex-1 bg-asl-accent/10 rounded-t-lg relative group transition-all">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
            className="absolute bottom-0 inset-x-0 bg-asl-accent rounded-t-lg"
          />
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between text-[10px] font-bold text-asl-text-secondary uppercase tracking-widest">
      <span>Jan</span>
      <span>Mar</span>
      <span>May</span>
      <span>Jul</span>
      <span>Sep</span>
      <span>Nov</span>
    </div>
  </div>
);

const AuditMockup = () => (
  <div className="w-full h-full p-6 flex flex-col gap-4">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-10 h-10 rounded-full bg-asl-surface flex items-center justify-center">
        <Lock className="w-5 h-5 text-asl-text-secondary" />
      </div>
      <div>
        <div className="text-xs font-bold text-asl-text-primary uppercase">Ledger 049-X</div>
        <div className="text-[10px] text-asl-text-secondary">SECURE IMMUTABLE RECORD</div>
      </div>
    </div>
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-2 bg-asl-bg rounded-full w-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: i === 1 ? '70%' : i === 2 ? '45%' : '85%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full bg-asl-accent/30 rounded-full"
          ></motion.div>
        </div>
      ))}
    </div>
  </div>
);

const CalculationMockup = () => (
  <div className="w-full h-full p-8 flex flex-col justify-center gap-6">
    <div className="space-y-1">
      <div className="text-[10px] font-bold text-asl-text-secondary uppercase tracking-widest">Total Disbursement</div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl lg:text-5xl font-black text-asl-text-primary"
      >
        $24,850.00
      </motion.div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="p-3 bg-asl-accent/5 border border-asl-accent/10 rounded-md"
      >
        <div className="text-[8px] font-bold text-asl-accent uppercase mb-1">Gross Pay</div>
        <div className="text-sm font-bold text-asl-text-primary">$31,200</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="p-3 bg-asl-error/5 border border-asl-error/10 rounded-md"
      >
        <div className="text-[8px] font-bold text-asl-error uppercase mb-1">Total Tax</div>
        <div className="text-sm font-bold text-asl-text-primary">$6,350</div>
      </motion.div>
    </div>
  </div>
);

export const Features = () => {
  const features = [
    {
      title: "Global Compliance Engine",
      description: "Automated adherence to regional tax laws and labor regulations. SOC2 Type II certified infrastructure with built-in audit capabilities.",
      visual: <ComplianceMockup />,
      icon: ShieldCheck,
      span: "md:col-span-2 lg:col-span-1 lg:row-span-2",
      color: "blue"
    },
    {
      title: "Unified Calculation Architecture",
      description: "Perform sub-second payroll computations across complex deduction tiers and multi-currency environments.",
      visual: <CalculationMockup />,
      icon: Calculator,
      span: "md:col-span-2 lg:col-span-2",
      color: "slate"
    },
    {
      title: "Immutable Audit Trails",
      description: "Every transaction is hashed and recorded in a secure ledger, providing total transparency for internal and external audits.",
      visual: <AuditMockup />,
      icon: Lock,
      span: "md:col-span-1 lg:col-span-1",
      color: "indigo"
    },
    {
      title: "Predictive Analytics",
      description: "Harness workforce intelligence with real-time forecasting and deep-dive cost analysis across all departments.",
      visual: <AnalyticsMockup />,
      icon: BarChart3,
      span: "md:col-span-1 lg:col-span-1",
      color: "sky"
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-asl-bg transition-colors relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-asl-border)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 -z-10" />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-asl-accent/10 text-asl-accent text-[11px] font-black uppercase tracking-[0.2em] mb-8 border border-asl-accent/20">
            <Zap size={12} fill="currentColor" />
            Advanced Capability
          </div>
          <h4 className="text-4xl lg:text-4xl font-black text-asl-text-primary leading-[1.1] tracking-tight mb-8">
            Enterprise Grade Infrastructure
          </h4>
          <p className="text-xl text-asl-text-secondary leading-relaxed font-medium">
            Engineered for precision and built for scale. ASL provides the technical foundation required by modern, globally distributed organizations.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`group relative flex flex-col bg-asl-surface rounded-md border border-asl-border transition-all duration-500 hover:border-asl-accent/50 hover:shadow-2xl hover:shadow-asl-accent/5 overflow-hidden ${feature.span}`}
            >
              {/* Visual Area */}
              <div className="h-64 lg:h-auto lg:flex-1 bg-asl-bg/50 border-b border-asl-border flex items-center justify-center">
                {feature.visual}
              </div>

              {/* Text Area */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-md bg-asl-bg border border-asl-border flex items-center justify-center text-asl-text-secondary group-hover:bg-asl-accent group-hover:text-white transition-colors duration-500"
                  >
                    <feature.icon size={20} />
                  </motion.div>
                  <ArrowUpRight className="text-asl-text-secondary/30 group-hover:text-asl-accent transition-colors" size={20} />
                </div>

                <h3 className="text-2xl font-bold text-asl-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-asl-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-asl-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};