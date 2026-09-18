import Link from "next/link";
import { Glow } from "@/components/ui/Glow";
import { SafeLine } from "@/components/layout/SafeLine";
import { homeCopy } from "@/content/copy/home";

export function Hero() {
  const { headline, subheadline } = homeCopy.hero;

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-paper">
      <Glow />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-ink-muted">MVP &middot; pilot preparation</span>
          <span className="font-mono text-xs text-ink-muted">Berlin &amp; Munich</span>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="font-display text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{subheadline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/contact#merchant-form"
                className="inline-flex items-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-near-black transition-colors hover:bg-brand-dark"
              >
                Join the Pilot
              </Link>
              <Link
                href="/contact#sandbox"
                className="text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Watch Demo &rarr;
              </Link>
            </div>
            <div className="mt-8 max-w-md">
              <SafeLine copyKey="home-hero" variant="footer" label="Safe line" />
            </div>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-hairline bg-surface shadow-2xl"
            role="img"
            aria-label="Mobile app mockup: QR payment trigger animation and clean data analytics cards flowing. No coin or crypto graphics."
          >
            <div className="flex items-center gap-1.5 border-b border-hairline bg-surface-2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <span className="ml-3 font-mono text-[10px] text-ink-muted">merchant-dashboard</span>
            </div>
            <div className="p-6">
              <div className="rounded-xl border border-hairline bg-surface-2 p-5 text-center">
                <p className="font-mono text-xs text-ink-muted">Scan to pay</p>
                <div className="mx-auto mt-4 grid h-24 w-24 grid-cols-4 grid-rows-4 gap-0.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${(i * 7) % 3 === 0 ? "bg-ink" : "bg-transparent"} block`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-hairline bg-surface-2 p-3">
                  <p className="font-mono text-[10px] text-ink-muted">Today</p>
                  <p className="font-mono text-lg text-brand-ink">&euro;186.40</p>
                </div>
                <div className="rounded-xl border border-hairline bg-surface-2 p-3">
                  <p className="font-mono text-[10px] text-ink-muted">Transactions</p>
                  <p className="font-mono text-lg text-ink">47</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-hairline bg-surface-2 p-3">
                <p className="font-mono text-[10px] text-ink-muted">Expected payout</p>
                <p className="font-mono text-lg text-ink">&euro;172.10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
