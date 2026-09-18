import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/copy/home";

export function ProblemSection() {
  const { eyebrow, headline, description, cards } = homeCopy.problem;

  return (
    <section className="border-t border-hairline bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow={eyebrow} title={headline} description={description} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-hairline bg-surface p-5 transition-colors hover:border-brand/60"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <h3 className="font-display text-base text-ink">{card.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
