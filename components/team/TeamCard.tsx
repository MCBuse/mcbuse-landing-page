export function TeamCard({
  name,
  role,
  education,
  experience,
}: {
  name: string;
  role: string;
  education: string;
  experience: string;
}) {
  return (
    <div className="rounded-xl border border-hairline bg-surface-2 p-6 transition-colors hover:border-brand/60">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
        <h3 className="font-display text-lg text-ink">{name}</h3>
      </div>
      <p className="mt-1 text-sm font-medium text-brand-ink">{role}</p>
      <p className="mt-4 text-sm text-ink-muted">{education}</p>
      <p className="mt-1 text-sm text-ink-muted">Experience: {experience}</p>
      <a
        href="#"
        className="mt-4 inline-block text-sm font-medium text-ink underline underline-offset-4 hover:text-brand-ink"
      >
        LinkedIn
      </a>
    </div>
  );
}
