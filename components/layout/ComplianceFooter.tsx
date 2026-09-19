import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "@/content/nav";
import { SafeLine } from "@/components/layout/SafeLine";
import { TrustRibbon } from "@/components/layout/TrustRibbon";
import type { ComplianceKey } from "@/content/compliance";

export function ComplianceFooter({
  boundaryKey = "footer-default",
}: {
  boundaryKey?: ComplianceKey;
}) {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <Image
          src="/brand/mcbuse-logo.png"
          alt="MCBuse"
          width={130}
          height={65}
          loading="eager"
          className="h-9 w-auto"
        />

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-mono text-xs font-semibold tracking-wide text-ink-muted">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink transition-colors hover:text-brand-ink hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <SafeLine copyKey={boundaryKey} label="Boundary statement" variant="footer" />
        <p className="mt-6 text-xs text-ink-muted">
          &copy; {new Date().getFullYear()} MCBuse. All rights reserved.
        </p>
      </div>
      <TrustRibbon />
    </footer>
  );
}
