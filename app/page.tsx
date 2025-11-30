import { Hero } from "@/components/sections/Hero";
import { RealityStats } from "@/components/sections/RealityStats";
import { Founder } from "@/components/sections/Founder";
import { Challenges } from "@/components/sections/Challenges";
import { Transformation } from "@/components/sections/Transformation";
import { Methodology } from "@/components/sections/Methodology";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <RealityStats />
      <Founder />
      <Challenges />
      <Transformation />
      {/* <Methodology /> */}
      <CTA />
    </main>
  );
}
