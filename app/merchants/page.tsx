import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardMockupPlaceholder } from "@/components/shared/DashboardMockupPlaceholder";
import { MerchantHeroGraphic } from "@/components/merchants/MerchantHeroGraphic";
import { EligibilityChecklist } from "@/components/merchants/EligibilityChecklist";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";
import { merchantsCopy } from "@/content/copy/merchants";

export const metadata: Metadata = {
  title: "For Merchants MCBuse",
};

export default function MerchantsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
              {merchantsCopy.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {merchantsCopy.hero.subheadline}
            </p>
            <div className="mt-8">
              <Button href={merchantsCopy.hero.cta.href} variant="primary">
                {merchantsCopy.hero.cta.label}
              </Button>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-surface">
            <MerchantHeroGraphic title={merchantsCopy.hero.heroGraphicAlt} className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="What you'll see" title="Everything your daily activity is telling you" />
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {merchantsCopy.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-hairline bg-surface-2 p-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-sm text-ink">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 max-w-sm">
            <DashboardMockupPlaceholder
              label={merchantsCopy.dashboardMockup.label}
              rows={merchantsCopy.dashboardMockup.rows}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Geographic eligibility" title={merchantsCopy.eligibility.headline} />
        <div className="mt-8 max-w-xl">
          <EligibilityChecklist />
        </div>
      </section>

      <ComplianceFooter boundaryKey="footer-merchants" />
    </>
  );
}
