import { roadmapCopy } from "@/content/copy/roadmap";

export function PhaseTimeline() {
  return (
    <ol className="space-y-0">
      {roadmapCopy.phases.map((phase, i) => (
        <li key={phase.title} className="relative pl-10">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-brand font-mono text-xs text-brand-ink"
          >
            {i + 1}
          </span>
          {i < roadmapCopy.phases.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[11px] top-7 h-full w-px bg-hairline"
            />
          )}
          <div className="border-b border-hairline pb-8 pt-0.5 last:border-b-0">
            <h3 className="font-display text-xl text-ink">{phase.title}</h3>
            <ul className="mt-3 space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
