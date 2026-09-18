/**
 * Ambient blue glows used behind page heroes. Purely decorative.
 */
export function Glow({ variant = "hero" }: { variant?: "hero" | "subtle" }) {
  if (variant === "subtle") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
      />
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 rounded-full bg-brand-dark/20 blur-3xl"
      />
    </>
  );
}
