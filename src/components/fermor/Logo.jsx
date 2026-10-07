import React from "react";
import { FERMOR } from "@/lib/fermor/config";

/**
 * Fermor mark: a lime tile with a forest "F" counterform.
 * `tone` picks the wordmark colour — "dark" for light backgrounds,
 * "light" for the forest backgrounds.
 */
export default function Logo({ showWordmark = true, tone = "dark", className = "" }) {
  const wordmarkColor = tone === "light" ? "#F4F4F2" : "#0A0A0A";
  const counterColor = tone === "light" ? "#071A0E" : "#0C2314";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#B9FF3C" />
        <path
          d="M20 46V18h17a8 8 0 0 1 0 16H20"
          stroke={counterColor}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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