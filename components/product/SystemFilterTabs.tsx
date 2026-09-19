import Link from "next/link";
import { productCopy } from "@/content/copy/product";

export function SystemFilterTabs() {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Jump to a system">
      <Link
        href="#systems"
        className="inline-flex min-h-11 items-center rounded-[10px] bg-brand px-4 text-sm font-semibold text-white"
      >
        All
      </Link>
      {productCopy.systems.map((system) => (
        <Link
          key={system.id}
          href={`#${system.id}`}
          className="inline-flex min-h-11 items-center rounded-[10px] border border-hairline bg-surface-2 px-4 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand-ink"
        >
          {system.name}
        </Link>
      ))}
    </div>
  );
}
