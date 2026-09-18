import { responsibilityBoundary } from "@/content/compliance";

export function ResponsibilityBoundaryTable() {
  const { infrastructure, regulated } = responsibilityBoundary;

  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
      <div className="bg-surface-2 p-6">
        <p className="font-mono text-xs tracking-wide text-brand-ink">{infrastructure.title}</p>
        <p className="mt-1 text-sm text-ink-muted">{infrastructure.subtitle}</p>
        <ul className="mt-4 space-y-2">
          {infrastructure.items.map((item) => (
            <li key={item} className="border-l-2 border-brand/50 pl-3 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-surface-2 p-6">
        <p className="font-mono text-xs tracking-wide text-ink">{regulated.title}</p>
        <p className="mt-1 text-sm text-ink-muted">{regulated.subtitle}</p>
        <ul className="mt-4 space-y-2">
          {regulated.items.map((item) => (
            <li key={item} className="border-l-2 border-ink/30 pl-3 text-sm text-ink">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
