import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const HeartIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20.5s-7.5-4.4-7.5-9.6A4.4 4.4 0 0 1 12 8.3a4.4 4.4 0 0 1 7.5 2.6c0 5.2-7.5 9.6-7.5 9.6Z" />
  </svg>
);

export const BookIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 7.2C10.4 5.7 8.2 5 5.5 5H4v13h1.5c2.7 0 4.9.7 6.5 2.2 1.6-1.5 3.8-2.2 6.5-2.2H20V5h-1.5c-2.7 0-4.9.7-6.5 2.2Z" />
    <path d="M12 7.2v13" />
  </svg>
);

export const PillIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.6" y="8.6" width="18.8" height="6.8" rx="3.4" transform="rotate(-45 12 12)" />
    <path d="M9.2 9.2 14.8 14.8" />
  </svg>
);

export const BackpackIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5.5 10.5A5.5 5.5 0 0 1 11 5h2a5.5 5.5 0 0 1 5.5 5.5V19a1.6 1.6 0 0 1-1.6 1.6H7.1A1.6 1.6 0 0 1 5.5 19Z" />
    <path d="M9.5 5V4.2a1.7 1.7 0 0 1 1.7-1.7h1.6a1.7 1.7 0 0 1 1.7 1.7V5" />
    <path d="M9 20.6v-5.2a1.4 1.4 0 0 1 1.4-1.4h3.2a1.4 1.4 0 0 1 1.4 1.4v5.2M9 16.6h6" />
  </svg>
);

export const BasketIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 9.5h17l-1.6 9a2 2 0 0 1-2 1.6H7.1a2 2 0 0 1-2-1.6Z" />
    <path d="m8.5 9.5 3-6M15.5 9.5l-3-6M10 13.5v3M14 13.5v3" />
  </svg>
);

export const SmileIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9 14.5a4 4 0 0 0 6 0M9.5 9.5h.01M14.5 9.5h.01" />
  </svg>
);

export const UsersIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9.5" cy="8" r="3.2" />
    <path d="M3.5 20a6 6 0 0 1 12 0M16.5 5.2a3.2 3.2 0 0 1 0 6M17.5 14.4A6 6 0 0 1 20.5 20" />
  </svg>
);

export const HandIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 11V5.8a1.6 1.6 0 0 1 3.2 0V11" />
    <path d="M11.2 10.6V4.6a1.6 1.6 0 0 1 3.2 0v6" />
    <path d="M14.4 11V7.4a1.6 1.6 0 0 1 3.2 0v6.4a6.6 6.6 0 0 1-6.6 6.6A6.6 6.6 0 0 1 4.4 14l-.6-1.9a1.5 1.5 0 0 1 2.6-1.4L8 12.6" />
  </svg>
);

export const SparkIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5 13.8 9l5.7 1.9-5.7 1.9L12 18.4l-1.8-5.6L4.5 11l5.7-2Z" />
  </svg>
);

export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.2 19 6v6c0 4.3-3 7.2-7 8.8-4-1.6-7-4.5-7-8.8V6Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.4" />
    <path d="m3.8 7 7.2 5.2a1.8 1.8 0 0 0 2 0L20.2 7" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.6 3.6h2.6l1.4 3.6-2 1.4a11 11 0 0 0 5 5l1.4-2 3.6 1.4v2.6a2 2 0 0 1-2.2 2A15.6 15.6 0 0 1 4.6 5.8a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21Z" />
    <circle cx="12" cy="10.6" r="2.4" />
  </svg>
);

export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.4V12l3 1.8" />
  </svg>
);

export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.6 4.4 4.4L19 7.4" />
  </svg>
);

export const QuoteIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M9.6 5.4c-3 1.5-4.8 4-4.8 7.6v5.6h6.4v-6.4H8.1c0-1.9.8-3.2 2.6-4.2Zm9.6 0c-3 1.5-4.8 4-4.8 7.6v5.6h6.4v-6.4h-3.1c0-1.9.8-3.2 2.6-4.2Z" />
  </svg>
);

export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const iconMap = {
  book: BookIcon,
  pill: PillIcon,
  heart: HeartIcon,
  backpack: BackpackIcon,
  basket: BasketIcon,
  smile: SmileIcon,
} as const;
