import React from "react";
import { FERMOR } from "@/lib/fermor/config";

// Fermor geometric mark: two shapes in mint, plus the wordmark in navy.
export default function Logo({ showWordmark = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" rx="7" fill="#75FB90" />
        <path
          d="M9 19V9h6.5a3.5 3.5 0 0 1 0 7H9"
          stroke="#16233B"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span className="fermor-heading text-[22px] leading-none" style={{ color: "var(--fermor-ink)" }}>
          {FERMOR.name}
        </span>
      )}
    </span>
  );
}