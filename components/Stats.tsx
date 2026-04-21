import { TrendingUp, Users, DollarSign, FileCheck } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = latest.toLocaleString(undefined, {
          minimumFractionDigits: value.includes(".") ? 1 : 0,
          maximumFractionDigits: value.includes(".") ? 1 : 0,
        });
        (ref.current as HTMLElement).textContent = formatted + suffix;
      }
    });
  }, [springValue, value, suffix]);

  return <span ref={ref}>0</span>;
};

export const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "99.9",
      suffix: "%",
      label: "Payroll Accuracy",
    },
    {
      icon: Users,
      value: "500",
      suffix: "+",
      label: "Companies Trust ASL",
    },
    {
      icon: DollarSign,
      value: "2.5",
      suffix: "B+",
      label: "Processed Annually",
    },
    {
      icon: FileCheck,
      value: "100",
      suffix: "%",
      label: "Compliance Rate",
    },
  ];

  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-asl-bg transition-colors relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-asl-surface border border-asl-border rounded-md p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-md bg-asl-accent/10 flex items-center justify-center group-hover:bg-asl-accent transition-colors duration-500">
                <stat.icon className="w-7 h-7 text-asl-accent group-hover:text-white transition-colors duration-500" />
              </div>

              <div className="text-4xl lg:text-5xl font-black text-asl-text-primary tracking-tight mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-xs font-bold text-asl-text-secondary uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};