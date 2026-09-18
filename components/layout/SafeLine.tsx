import { complianceCopy, type ComplianceKey } from "@/content/compliance";

export function SafeLine({
  copyKey,
  label = "Safe line",
  variant = "inline",
}: {
  copyKey: ComplianceKey;
  label?: string;
  variant?: "inline" | "footer";
}) {
  const text = complianceCopy[copyKey];

  if (variant === "footer") {
    return (
      <p className="mt-6 border-t border-hairline pt-4 font-mono text-xs leading-relaxed text-ink-muted">
        <span className="mr-2 font-semibold tracking-wide text-ink">{label}</span>
        {text}
      </p>
    );
  }

  return (
    <p className="border-l-2 border-brand/60 pl-3 font-mono text-xs leading-relaxed text-ink-muted">
      <span className="mr-2 font-semibold tracking-wide text-brand-ink">{label}</span>
      {text}
    </p>
  );
}
