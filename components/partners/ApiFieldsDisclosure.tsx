import { partnersCopy } from "@/content/copy/partners";
import { responsibilityBoundary } from "@/content/compliance";

export function ApiFieldsDisclosure() {
  return (
    <details className="rounded-xl border border-hairline bg-surface-2 p-5">
      <summary className="cursor-pointer font-display font-semibold text-lg text-ink">
        {partnersCopy.apiFields.cta}
      </summary>
      <div className="mt-4">
        <p className="text-xs font-medium tracking-wide text-ink-muted">
          Example fields (illustrative)
        </p>
        <ul className="mt-3 space-y-2">
          {partnersCopy.apiFields.exampleFields.map((field) => (
            <li key={field} className="font-mono text-sm text-ink">
              {field}
            </li>
          ))}
        </ul>
        <p className="mt-4 border-l-2 border-ink/40 pl-3 font-mono text-xs leading-relaxed text-ink-muted">
          {responsibilityBoundary.apiFieldsNote}
        </p>
      </div>
    </details>
  );
}
