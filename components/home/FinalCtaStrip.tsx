import Link from "next/link";
import { Glow } from "@/components/ui/Glow";
import { homeCopy } from "@/content/copy/home";

export function FinalCtaStrip() {
  const { headline, ctas } = homeCopy.finalCta;

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-paper">
      <Glow />
      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display font-semibold text-3xl text-ink sm:text-4xl">{headline}</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {ctas.map((cta) =>
            "disabled" in cta && cta.disabled ? (
              <span
                key={cta.label}
                aria-disabled="true"
                title="Coming soon"
                className="inline-flex items-center rounded-[10px] border border-hairline px-6 py-3 text-sm font-semibold text-ink-muted/50"
              >
                {cta.label}
              </span>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                target={"external" in cta && cta.external ? "_blank" : undefined}
                rel={"external" in cta && cta.external ? "noopener noreferrer" : undefined}
                className={
                  cta.variant === "primary"
                    ? "inline-flex items-center rounded-[10px] bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                    : "inline-flex items-center rounded-[10px] border border-hairline bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand-ink"
                }
              >
                {cta.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
