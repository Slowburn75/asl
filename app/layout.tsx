import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "ASL Payroll | Enterprise-Grade Payroll & Compliance",
  description: "The next-generation payroll engine built for modern enterprise teams. Accuracy, security, and global compliance in one platform.",
  keywords: ["payroll", "asl", "compliance", "enterprise software", "financial technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem("theme");
                if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${bricolage.variable} font-sans antialiased bg-asl-bg text-asl-text-primary`}>
        {children}
      </body>
    </html>
  );
}
