import { Check, X } from "lucide-react";
import { Button } from "./ui/Button";

export const Pricing = () => {
  const features = [
    { name: "Dashboard", basic: true, enterprise: true },
    { name: "Company Management", basic: true, enterprise: true },
    { name: "Multi Company", basic: false, enterprise: true },
    { name: "Employees Directory", basic: true, enterprise: true },
    { name: "Deductions & Allowances", basic: true, enterprise: true },
    { name: "Benefits", basic: false, enterprise: true },
    { name: "Loans", basic: false, enterprise: true },
    { name: "Payroll Engine", basic: true, enterprise: true },
    { name: "Tax Table & Formulae", basic: true, enterprise: true },
    { name: "Reports", basic: true, enterprise: true },
    { name: "Workflow Automation", basic: false, enterprise: true },
    { name: "Send Payslip", basic: true, enterprise: true },
    { name: "Download Payslip", basic: true, enterprise: true },
    { name: "Users & Roles", basic: true, enterprise: true },
    { name: "Import & Export Data", basic: true, enterprise: true },
  ];

  return (
    <section className="py-24 bg-asl-bg">
      <div className="container-custom">

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16 lg:mb-20">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              PRICING
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Compare Plans
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-14">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Find the right payroll solution for your business simple or advanced.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border border-asl-border/30 rounded-xl">
          <table className="w-full text-left border-collapse">

            {/* Table Header */}
            <thead className="bg-asl-surface/50 backdrop-blur sticky top-0 z-10">
              <tr>
                <th className="p-5 text-sm font-semibold text-asl-text-secondary">
                  Features
                </th>
                <th className="p-5 text-sm font-semibold text-asl-text-primary text-center">
                  Basic
                </th>
                <th className="p-5 text-sm font-semibold text-asl-accent text-center">
                  Enterprise
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className="border-t border-asl-border/20 hover:bg-asl-surface/30 transition"
                >
                  <td className="p-5 text-sm text-asl-text-primary">
                    {feature.name}
                  </td>

                  {/* Basic */}
                  <td className="p-5 text-center">
                    {feature.basic ? (
                      <Check className="mx-auto text-green-500" size={18} />
                    ) : (
                      <X className="mx-auto text-gray-500 opacity-40" size={18} />
                    )}
                  </td>

                  {/* Enterprise */}
                  <td className="p-5 text-center">
                    <Check className="mx-auto text-asl-accent" size={18} />
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Footer Row */}
            <tfoot className="border-t border-asl-border/30 bg-asl-surface/40">
              <tr>
                <td className="p-6"></td>
                <td className="p-6 text-center">
                  <Button variant="secondary">Get Started</Button>
                </td>
                <td className="p-6 text-center">
                  <Button variant="primary">Contact Sales</Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="text-sm text-asl-text-secondary">
            Need a custom solution?{" "}
            <span className="text-asl-accent cursor-pointer hover:underline">
              Talk to our team
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};