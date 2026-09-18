import type { ReactNode } from "react";

export function LedgerGrid({ children }: { children: ReactNode }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {children}
    </div>
  );
}

export function LedgerRow({
  index,
  title,
  description,
  meta,
}: {
  index?: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6">
      {index !== undefined ? (
        <span className="font-mono text-sm text-brand-ink">{index}</span>
      ) : (
        <span aria-hidden="true" className="hidden sm:block" />
      )}
      <div>
        <h3 className="font-display text-lg text-ink">{title}</h3>
        {description && (
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>
        )}
      </div>
      {meta && <div className="font-mono text-sm text-ink-muted">{meta}</div>}
    </div>
  );
}
