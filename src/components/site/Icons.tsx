/* Inline SVG brand mark + icon set. No external icon dependency. */

import type { SVGProps } from "react";

/** The SnipCode mark: a crop/selection marquee over a sky-gradient tile. */
export function BrandMark({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sc-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5c9be0" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#sc-mark)" />
      {/* crop corners = "snip this element" */}
      <path
        d="M11 8.5H9.5A1.5 1.5 0 0 0 8 10v1.5M21 8.5h1.5A1.5 1.5 0 0 1 24 10v1.5M11 23.5H9.5A1.5 1.5 0 0 1 8 22v-1.5M21 23.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* code caret inside the marquee */}
      <path
        d="M14.5 13.5 12 16l2.5 2.5M17.5 13.5 20 16l-2.5 2.5"
        stroke="#ffffff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const CursorIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 4l7.5 16 2.3-6.2L20 11.5 4 4z" />
  </svg>
);

export const LayersIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5M3 16l9 5 9-5" opacity="0.55" />
  </svg>
);

export const BracesIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M8 3c-2 0-3 1-3 3v2c0 1.2-.8 2-2 2 1.2 0 2 .8 2 2v2c0 2 1 3 3 3" />
    <path d="M16 3c2 0 3 1 3 3v2c0 1.2.8 2 2 2-1.2 0-2 .8-2 2v2c0 2-1 3-3 3" />
  </svg>
);

export const WandIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M15 4V2M15 10V8M12 7h-2M20 7h-2" opacity="0.7" />
    <path d="M4 20l10-10 1.5 1.5L5.5 21.5 4 20z" />
    <path d="M13.5 8.5L15.5 10.5" />
  </svg>
);

export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9.2 12l2 2 3.6-3.8" />
  </svg>
);

export const KeyIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.8 12.2L20 3M17 6l2 2M14 9l2 2" />
  </svg>
);

export const BoxIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M21 8l-9-5-9 5 9 5 9-5z" />
    <path d="M3 8v8l9 5 9-5V8M12 13v8" />
  </svg>
);

export const OfflineIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M3 12a9 9 0 0 1 15-6.7M21 12a9 9 0 0 1-15 6.7" opacity="0.6" />
    <path d="M12 8v4l2.5 2.5" />
    <path d="M3 3l18 18" opacity="0.6" />
  </svg>
);

export const ArrowIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
