import Link from "next/link";
import { productCopy } from "@/content/copy/product";

export function SystemFilterTabs() {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Jump to a system">
      <Link
        href="#systems"
        className="rounded-full bg-brand px-4 py-1.5 text-sm font-semibold text-near-black"
      >
        All
      </Link>
      {productCopy.systems.map((system) => (
        <Link
          key={system.id}
          href={`#${system.id}`}
          className="rounded-full border border-hairline bg-surface-2 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand-ink"
        >
          {system.name}
        </Link>
      ))}
    </div>
  );
}
