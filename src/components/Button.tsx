import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "soft" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-clay-600 text-white shadow-glow hover:bg-clay-700 hover:shadow-lift",
  dark: "bg-ink-950 text-sand-50 hover:bg-ink-900",
  outline: "border border-ink-200 bg-white text-ink-900 hover:border-clay-300 hover:bg-clay-50",
  soft: "bg-clay-50 text-clay-700 hover:bg-clay-100",
  light: "bg-white text-ink-950 hover:bg-sand-100 shadow-card",
  ghost: "text-ink-700 hover:bg-sand-100",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-[13.5px]",
  md: "h-11.5 px-6 text-[14.5px]",
  lg: "h-13 px-7 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
