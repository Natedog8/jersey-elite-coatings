/** Inline, crisp line icons (no dependency). 1.6 stroke, currentColor. */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const Icon = {
  /** stacked coating layers — epoxy system cross-section */
  layers: (p: P) => (
    <svg {...base(p)}>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </svg>
  ),
  /** flame — kitchens / heat resistance */
  flame: (p: P) => (
    <svg {...base(p)}>
      <path d="M12 21c3.9 0 6.5-2.6 6.5-6.2 0-2.6-1.4-4.6-2.9-6.3-.6 1-1.3 1.7-2.1 2.1.2-2.7-1-5.6-3.5-7.6.2 2.3-.7 3.9-2 5.4-1.3 1.5-2.5 3.3-2.5 6.4C5.5 18.4 8.1 21 12 21Z" />
      <path d="M12 21c-1.7 0-3-1.3-3-3.2 0-1.4.8-2.4 1.7-3.4.5.6 1 .9 1.6 1 .8.9 1.7 1.6 1.7 2.7 0 1.6-1.3 2.9-2 2.9Z" />
    </svg>
  ),
  spray: (p: P) => (
    <svg {...base(p)}>
      <path d="M9 11V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6" />
      <rect x="8" y="11" width="6" height="10" rx="1.5" />
      <path d="M13 5h3M16 4v2M19 6l-2 1M19 9h-2.5" />
    </svg>
  ),
  home: (p: P) => (
    <svg {...base(p)}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  ),
  roof: (p: P) => (
    <svg {...base(p)}>
      <path d="M2 12 12 4l10 8" />
      <path d="M5 10v9h14v-9" />
      <path d="M9 19v-5h6v5" />
    </svg>
  ),
  road: (p: P) => (
    <svg {...base(p)}>
      <path d="M6 21 9 3M18 21 15 3" />
      <path d="M12 5v2M12 11v2M12 17v2" />
    </svg>
  ),
  gutter: (p: P) => (
    <svg {...base(p)}>
      <path d="M3 7h18l-1.5 4.5a2 2 0 0 1-1.9 1.5H6.4a2 2 0 0 1-1.9-1.5Z" />
      <path d="M8 13v6M16 13v6M12 13v8" />
    </svg>
  ),
  deck: (p: P) => (
    <svg {...base(p)}>
      <path d="M3 8h18M3 13h18M3 18h18" />
      <path d="M7 8v10M17 8v10" />
    </svg>
  ),
  pavers: (p: P) => (
    <svg {...base(p)}>
      <rect x="3" y="4" width="7" height="7" rx="1" />
      <rect x="14" y="4" width="7" height="7" rx="1" />
      <rect x="3" y="13" width="7" height="7" rx="1" />
      <rect x="14" y="13" width="7" height="7" rx="1" />
    </svg>
  ),
  window: (p: P) => (
    <svg {...base(p)}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M12 3v18M4 12h16" />
      <path d="M7.5 6.5l2 2M14.5 6.5l2 2" />
    </svg>
  ),
  building: (p: P) => (
    <svg {...base(p)}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </svg>
  ),
  star: (p: P) => (
    <svg {...base({ ...p, fill: "currentColor", stroke: "none" })}>
      <path d="m12 2 2.9 6.26L21.5 9.3l-4.8 4.6 1.2 6.6L12 17.4 6.1 20.5l1.2-6.6L2.5 9.3l6.6-1.04Z" />
    </svg>
  ),
  phone: (p: P) => (
    <svg {...base(p)}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  ),
  check: (p: P) => (
    <svg {...base(p)}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  ),
  shield: (p: P) => (
    <svg {...base(p)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  bolt: (p: P) => (
    <svg {...base(p)}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6Z" />
    </svg>
  ),
  leaf: (p: P) => (
    <svg {...base(p)}>
      <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 11-4 16-9 16Z" />
      <path d="M4 21c3-5 6-7 9-8" />
    </svg>
  ),
  clock: (p: P) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  pin: (p: P) => (
    <svg {...base(p)}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  arrow: (p: P) => (
    <svg {...base(p)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  badge: (p: P) => (
    <svg {...base(p)}>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 13.5-1 7L12 18l4.5 2.5-1-7" />
    </svg>
  ),
  google: (p: P) => (
    <svg {...base({ ...p, stroke: "none" })} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M21.6 12.23c0-.66-.06-1.3-.17-1.9H12v3.6h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.89-1.74 2.99-4.3 2.99-7.22Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.23-2.5c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.41 13.91a6 6 0 0 1 0-3.82V7.5H3.07a10 10 0 0 0 0 9l3.34-2.59Z" />
      <path fill="#EA4335" d="M12 5.96c1.47 0 2.79.5 3.83 1.5l2.86-2.86A10 10 0 0 0 3.07 7.5l3.34 2.59C7.2 7.73 9.4 5.96 12 5.96Z" />
    </svg>
  ),
};

export type IconKey = keyof typeof Icon;
