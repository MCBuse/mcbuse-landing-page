export function DashboardMockupPlaceholder({
  label,
  rows,
}: {
  label: string;
  rows: { name: string; value: string }[];
}) {
  return (
    <div className="rounded-xl border border-hairline bg-surface-2 p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs tracking-wide text-ink-muted">{label}</span>
        <span className="rounded-xl bg-ink/5 px-2 py-0.5 font-mono text-[10px] text-ink">
          Sample data only
        </span>
      </div>
      <dl className="divide-y divide-hairline">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center justify-between py-2">
            <dt className="text-sm text-ink-muted">{row.name}</dt>
            <dd className="font-mono text-sm text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
