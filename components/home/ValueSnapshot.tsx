import Link from "next/link";
import { Glow } from "@/components/ui/Glow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeCopy } from "@/content/copy/home";

export function ValueSnapshot() {
  const { headline, items, cta } = homeCopy.valueSnapshot;

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-surface">
      <Glow variant="subtle" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <SectionHeading eyebrow="Built for micro-retail" title={headline} />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-hairline bg-surface-2 p-6 transition-colors hover:border-brand/60"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <h3 className="font-display font-semibold text-lg text-ink">{item.label}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={cta.href}
            className="inline-flex items-center rounded-[10px] bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
