import { SafeLine } from "@/components/layout/SafeLine";

const actions = ["Watch Pitch Video", "Watch Sandbox Guided Video", "Download Test APK Build (Prototype)"];

export function SandboxPanel() {
  return (
    <div id="sandbox" className="scroll-mt-24 rounded-xl border border-hairline bg-surface-2 p-6">
      <h3 className="font-display text-xl text-ink">Interactive Sandbox Environment</h3>
      <p className="mt-2 text-sm text-ink-muted">Test data capture and dashboard alerts on simulated feeds.</p>
      <div className="mt-4">
        <SafeLine copyKey="sandbox-status" label="Status" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {actions.map((action) => (
          <span
            key={action}
            aria-disabled="true"
            title="Coming soon"
            className="inline-flex items-center rounded-xl border border-ink/30 px-4 py-2 text-sm font-medium text-ink-muted"
          >
            {action}
          </span>
        ))}
      </div>
    </div>
  );
}
