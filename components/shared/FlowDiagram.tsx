import Link from "next/link";

const anchors = ["system-payment-capture", "system-business-analytics", "system-credit-readiness", "system-institutional-matching"];

export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0" aria-label="Product flow">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-3 sm:flex-1">
          <Link
            href={`/product#${anchors[i]}`}
            className="flex-1 rounded-[10px] border border-hairline bg-surface-2 px-4 py-3 text-center font-mono text-sm text-ink transition-colors hover:border-brand hover:text-brand-ink"
          >
            {step}
          </Link>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="hidden text-ink-muted sm:block sm:px-2">
              &rarr;
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
