import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { TeamCard } from "@/components/team/TeamCard";
import { ComplianceFooter } from "@/components/layout/ComplianceFooter";
import { Glow } from "@/components/ui/Glow";
import { teamCopy } from "@/content/copy/team";

export const metadata: Metadata = {
  title: "Team MCBuse",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Glow />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
            {teamCopy.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{teamCopy.subheadline}</p>
        </div>
      </section>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 sm:grid-cols-3">
            {teamCopy.members.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact#merchant-form" variant="primary">
              Join the Pilot
            </Button>
            <Button href="/contact#partner-form" variant="secondary">
              Schedule Partner Call
            </Button>
          </div>
        </div>
      </section>

      <ComplianceFooter boundaryKey="footer-default" />
    </>
  );
}
