import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-hairline bg-surface text-ink hover:border-brand hover:text-brand-ink",
  ghost: "text-ink hover:text-brand-ink",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: () => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

type NativeButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-live"?: "polite" | "assertive";
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (props.href) {
    if (props.disabled) {
      return (
        <span className={classes} aria-disabled="true" title="Coming soon">
          {children}
        </span>
      );
    }
    return (
      <Link href={props.href} onClick={props.onClick} target={props.target} rel={props.rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as NativeButtonProps;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-live={(props as NativeButtonProps)["aria-live"]}
      className={classes}
    >
      {children}
    </button>
  );
}
