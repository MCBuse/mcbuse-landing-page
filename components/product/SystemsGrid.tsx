import { SafeLine } from "@/components/layout/SafeLine";
import { productCopy } from "@/content/copy/product";

export function SystemsGrid() {
  return (
    <div id="systems" className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
      {productCopy.systems.map((system) => (
        <div key={system.id} id={system.id} className="scroll-mt-24 bg-surface-2 p-6">
          <h3 className="font-display text-xl text-ink">{system.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{system.bullet}</p>
          {"warning" in system && system.warning && (
            <p className="mt-2 text-xs font-medium text-ink">Warning: {system.warning}</p>
          )}
          <div className="mt-4">
            <SafeLine copyKey={system.safeLineKey} />
          </div>
        </div>
      ))}
    </div>
  );
}
