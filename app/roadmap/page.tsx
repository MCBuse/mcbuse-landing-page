import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhaseTimeline } from "@/components/roadmap/PhaseTimeline";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";
import { roadmapCopy } from "@/content/copy/roadmap";

export const metadata: Metadata = {
  title: "Roadmap MCBuse",
};

export default function RoadmapPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <SectionHeading eyebrow="Roadmap" title="Phased development milestones" />
          <div className="mt-10 max-w-2xl">
            <PhaseTimeline />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span
              aria-disabled="true"
              title="Coming soon"
              className="inline-flex items-center rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-ink-muted/60"
            >
              Download Pitch Deck (PDF)
            </span>
            <span
              id="pilot-kpis"
              aria-disabled="true"
              title="Pilot KPIs are not published yet"
              className="inline-flex items-center rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-ink-muted/60"
            >
              View Pilot KPIs
            </span>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading eyebrow="Business direction" title="Business direction & model" />
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-muted">
            {roadmapCopy.businessDirection}
          </p>
        </div>
      </section>

      <ComplianceFooter boundaryKey="footer-roadmap" />
    </>
  );
}
