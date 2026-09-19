import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResponsibilityBoundaryTable } from "@/components/partners/ResponsibilityBoundaryTable";
import { ApiFieldsDisclosure } from "@/components/partners/ApiFieldsDisclosure";
import { PartnerHeroGraphic } from "@/components/partners/PartnerHeroGraphic";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";
import { partnersCopy } from "@/content/copy/partners";

export const metadata: Metadata = {
  title: "For Partners MCBuse",
};

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-2 font-mono text-xs text-brand-ink">{partnersCopy.hero.audience}</p>
            <h1 className="font-display text-3xl leading-tight text-ink sm:text-4xl">
              {partnersCopy.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
              {partnersCopy.hero.subheadline}
            </p>
            <div className="mt-8">
              <Button href={partnersCopy.hero.cta.href} variant="primary">
                {partnersCopy.hero.cta.label}
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-surface">
            <PartnerHeroGraphic title={partnersCopy.hero.heroGraphicAlt} className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Compliance & operational boundaries"
            title="Two layers, clearly separated"
            description="MCBuse owns the infrastructure and data layer. Licensed partners own regulated execution and underwriting decisions."
          />
          <div className="mt-10">
            <ResponsibilityBoundaryTable />
          </div>
          <div className="mt-8">
            <ApiFieldsDisclosure />
          </div>
        </div>
      </section>

      <ComplianceFooter boundaryKey="footer-partners" />
    </>
  );
}
