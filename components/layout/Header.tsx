"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav, headerCtas } from "@/content/nav";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/brand/mcbuse-logo.png" alt="MCBuse" width={110} height={55} priority className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-brand-ink ${
                  isActive ? "text-brand-ink" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={headerCtas.watchDemo.href} variant="ghost">
            {headerCtas.watchDemo.label}
          </Button>
          <Button href={headerCtas.joinPilot.href} variant="primary" target="_blank" rel="noopener noreferrer">
            {headerCtas.joinPilot.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[10px] border border-hairline p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-hairline bg-paper lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center py-2 text-sm font-medium text-ink hover:text-brand-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex flex-col gap-2">
              <Button href={headerCtas.watchDemo.href} variant="ghost" onClick={() => setOpen(false)} className="w-full">
                {headerCtas.watchDemo.label}
              </Button>
              <Button
                href={headerCtas.joinPilot.href}
                variant="primary"
                onClick={() => setOpen(false)}
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {headerCtas.joinPilot.label}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
