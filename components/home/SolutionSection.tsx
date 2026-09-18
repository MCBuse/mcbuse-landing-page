import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FlowDiagram } from "@/components/shared/FlowDiagram";
import { homeCopy } from "@/content/copy/home";

export function SolutionSection() {
  const { eyebrow, headline, description, flow, cta } = homeCopy.solution;

  return (
    <section className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow={eyebrow} title={headline} description={description} />
        <div className="mt-10">
          <FlowDiagram steps={flow} />
        </div>
        <div className="mt-8">
          <Button href={cta.href} variant="primary">
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
