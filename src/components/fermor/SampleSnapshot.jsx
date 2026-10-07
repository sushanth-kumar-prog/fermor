import React from "react";
import { formatRupees } from "@/lib/fermor/format";

// A worked example, clearly labelled so it is never mistaken for the visitor's
// own numbers.
const SAMPLE = {
  income: 80000,
  essentials: 38000,
  investments: 12000,
  available: 30000,
  savingsRate: 52.5,
};

export default function SampleSnapshot() {
  return (
    <div
      className="px-6 md:px-7 pt-6 pb-7 border-t"
      style={{ borderColor: "var(--fm-line)", background: "var(--fm-light)" }}
    >
      <div className="flex items-center justify-between mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--fm-ink-soft)" }}>
          One month, imagined
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider"
          style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
        >
          EXAMPLE
        </span>
      </div>

      <p
        className="fm-tabular font-display text-[42px] font-extrabold leading-none tracking-[-0.04em] mb-1.5"
        style={{ color: "var(--fm-ink)" }}
      >
        {formatRupees(SAMPLE.income)}
      </p>
      <p className="text-sm mb-7" style={{ color: "var(--fm-ink-soft)" }}>
        takes home, for someone earning a normal amount
      </p>

      <div className="space-y-2.5">
        <Row label="Essentials" value={formatRupees(SAMPLE.essentials)} />
        <Row label="Investments" value={formatRupees(SAMPLE.investments)} />
        <div className="h-px my-3" style={{ background: "var(--fm-line)" }} />
        <Row label="Left to plan with" value={formatRupees(SAMPLE.available)} bold />
      </div>

      <div className="mt-7 pt-6 border-t" style={{ borderColor: "var(--fm-line)" }}>
        <div className="flex items-baseline justify-between mb-2.5">
          <span className="text-sm" style={{ color: "var(--fm-ink-soft)" }}>
            Savings rate
          </span>
          <span className="fm-tabular font-display text-lg font-bold" style={{ color: "var(--fm-dark)" }}>
            {SAMPLE.savingsRate}%
          </span>
        </div>
        <div className="fm-track h-2.5">
          <div className="fm-fill-lime h-full rounded-full" style={{ width: `${SAMPLE.savingsRate}%` }} />
        </div>
      </div>

      <div className="fm-note mt-6">
        <svg
          className="fm-note-icon"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5M12 8h.01" />
        </svg>
        <p>
          Made up numbers, on purpose. We never ask for your income and we have nowhere to put it.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className="flex items-baseline justify-between">
      <span
        className={`text-sm ${bold ? "font-semibold" : ""}`}
        style={{ color: bold ? "var(--fm-ink)" : "var(--fm-ink-soft)" }}
      >
        {label}
      </span>
      <span
        className={`fm-tabular text-sm ${bold ? "font-semibold" : ""}`}
        style={{ color: bold ? "var(--fm-ink)" : "var(--fm-ink)" }}
      >
        {value}
      </span>
    </div>
  );
}