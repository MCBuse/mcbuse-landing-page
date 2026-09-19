import { SafeLine } from "@/components/layout/SafeLine";

const comingSoonActions = ["Watch Pitch Video", "Watch Sandbox Guided Video"];

export function SandboxPanel() {
  return (
    <div id="sandbox" className="scroll-mt-24 rounded-xl border border-hairline bg-surface-2 p-6">
      <h3 className="font-display font-semibold text-xl text-ink">Interactive Sandbox Environment</h3>
      <p className="mt-2 text-sm text-ink-muted">Test data capture and dashboard alerts on simulated feeds.</p>
      <div className="mt-4">
        <SafeLine copyKey="sandbox-status" label="Status" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="https://merchant.mcbuse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[10px] border border-brand bg-brand/10 px-4 py-2 text-sm font-medium text-brand-ink transition-colors hover:bg-brand/20"
        >
          Merchant Portal Login
          <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            Live pilot
          </span>
        </a>
        {comingSoonActions.map((action) => (
          <span
            key={action}
            aria-disabled="true"
            title="Coming soon"
            className="inline-flex items-center rounded-[10px] border border-ink/30 px-4 py-2 text-sm font-medium text-ink-muted"
          >
            {action}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-muted">
        Merchant Portal Login is limited to provisioned pilot accounts, not a public sign-up.
      </p>
    </div>
  );
}
