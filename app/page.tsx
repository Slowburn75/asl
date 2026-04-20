import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Why } from "@/components/Why";
import { Pricing } from "@/components/Pricing";
import { FAQ, CTA, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Why />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
