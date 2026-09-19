import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemsGrid } from "@/components/product/SystemsGrid";
import { SystemFilterTabs } from "@/components/product/SystemFilterTabs";
import { ProductFlowSteps } from "@/components/product/ProductFlowSteps";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";
import { productCopy } from "@/content/copy/product";

export const metadata: Metadata = {
  title: "Product & Systems MCBuse",
};

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Product & systems"
            title={productCopy.hero.headline}
            description={productCopy.hero.subheadline}
          />
          <div className="mt-8">
            <Button href={productCopy.hero.cta.href} variant="primary" target="_blank" rel="noopener noreferrer">
              {productCopy.hero.cta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display font-semibold text-2xl text-ink">The four core systems</h2>
          <div className="mt-6">
            <SystemFilterTabs />
          </div>
          <div className="mt-8">
            <SystemsGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="How it works" title="From payment event to institution-ready profile" />
        <div className="mt-10">
          <ProductFlowSteps />
        </div>
      </section>

      <ComplianceFooter boundaryKey="footer-default" />
    </>
  );
}
