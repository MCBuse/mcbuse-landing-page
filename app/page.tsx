import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ValueSnapshot } from "@/components/home/ValueSnapshot";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { FinalCtaStrip } from "@/components/home/FinalCtaStrip";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ValueSnapshot />
      <PartnersStrip />
      <FinalCtaStrip />
      <ComplianceFooter boundaryKey="footer-default" />
    </>
  );
}
