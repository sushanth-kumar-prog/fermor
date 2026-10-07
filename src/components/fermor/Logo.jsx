import React from "react";
import { FERMOR } from "@/lib/fermor/config";

const LIME = "#B9FF3C";

/**
 * The Fermor mark: a two tone ring around an ascending bar chart, a trend
 * arrow, and a rupee sign.
 *
 * `tone` recolours the dark half of the mark so it stays legible on both
 * planes. "dark" is for light backgrounds, "light" for the forest sections.
 */
export function LogoMark({ size = 34, tone = "dark", className = "" }) {
  const ink = tone === "light" ? "#F4F4F2" : "#0C2314";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Ring: lime over the top, ink around the lower right */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke={LIME}
        strokeWidth="7"
        strokeDasharray="153.9 110"
        transform="rotate(150 50 50)"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke={ink}
        strokeWidth="7"
        strokeDasharray="110 153.9"
        strokeLinecap="round"
      />

      {/* Ascending bars */}
      <g fill={LIME}>
        <rect x="30" y="58" width="10" height="14" rx="2.5" />
        <rect x="45" y="51" width="10" height="21" rx="2.5" />
        <rect x="60" y="44" width="10" height="28" rx="2.5" />
      </g>

      {/* Trend arrow */}
      <path
        d="M26 52l14-8 8 5 8-12"
        stroke={ink}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 37h8v8"
        stroke={ink}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Rupee */}
      <g stroke={ink} strokeWidth="4" strokeLinecap="round">
        <path d="M62 22h15" />
        <path d="M62 28h12" />
        <path d="M67 22v16" />
        <path d="M62 31l15 9" />
      </g>
    </svg>
  );
}

export default function Logo({ showWordmark = true, tone = "dark", size = 34, className = "" }) {
  const wordmarkColor = tone === "light" ? "#F4F4F2" : "#0A0A0A";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} tone={tone} />
      {showWordmark && (
        <span
          className="font-display text-[22px] font-bold leading-none tracking-[-0.03em]"
          style={{ color: wordmarkColor }}
        >
          {FERMOR.name}
        </span>
      )}
    </span>
  );
}