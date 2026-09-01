import Link from "next/link";
import { site } from "@/lib/site";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl bg-clay-600 text-white shadow-glow ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none">
        <path
          d="M12 20.4s-7.4-4.3-7.4-9.5A4.3 4.3 0 0 1 12 8.3a4.3 4.3 0 0 1 7.4 2.6c0 5.2-7.4 9.5-7.4 9.5Z"
          fill="currentColor"
        />
        <path
          d="M12 3.4v2.1M6.6 5.2l1.2 1.6M17.4 5.2l-1.2 1.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    </span>
  );
}

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — ana sayfa`}>
      <LogoMark className="h-11 w-11 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="leading-tight">
        <span
          className={`block font-display text-[17px] font-extrabold tracking-tight ${
            light ? "text-white" : "text-ink-950"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`block text-[11px] font-medium tracking-[0.12em] ${
            light ? "text-sand-300" : "text-clay-600"
          }`}
        >
          {site.nameSuffix}
        </span>
      </span>
    </Link>
  );
}
