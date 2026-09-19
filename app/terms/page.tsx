import type { Metadata } from "next";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";

export const metadata: Metadata = {
  title: "Terms of Use MCBuse",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow variant="subtle" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="font-display font-semibold text-3xl text-ink sm:text-4xl">Terms of Use</h1>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            This page is a placeholder. MCBuse&rsquo;s Terms of Use are being finalized with legal
            counsel ahead of pilot launch and will be published here before any merchant or partner
            data is collected in production.
          </p>
        </div>
      </section>
      <ComplianceFooter boundaryKey="footer-default" />
    </>
  );
}
