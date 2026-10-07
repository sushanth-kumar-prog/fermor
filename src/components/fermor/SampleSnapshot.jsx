import React from "react";
import { formatRupees } from "@/lib/fermor/format";

// A clearly-marked sample monthly breakdown. Marked "Sample" so it is never
// mistaken for the visitor's own data.
const SAMPLE = {
  income: 80000,
  essentials: 38000,
  investments: 12000,
  available: 30000,
  savingsRate: 52.5,
};

export default function SampleSnapshot() {
  return (
    <div className="fm-card-dark p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-base font-semibold tracking-[-0.02em]" style={{ color: "var(--fm-on-dark)" }}>
          A sample monthly breakdown
        </h2>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider"
          style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
        >
          SAMPLE
        </span>
      </div>

      <div className="space-y-2.5">
        <Row label="Income" value={formatRupees(SAMPLE.income)} />
        <Row label="Essentials" value={formatRupees(SAMPLE.essentials)} indent />
        <Row label="Investments" value={formatRupees(SAMPLE.investments)} indent />
        <div className="h-px my-1.5" style={{ background: "var(--fm-line-dark)" }} />
        <Row label="Available to plan" value={formatRupees(SAMPLE.available)} bold />
      </div>

      <div className="mt-4 pt-4 border-t fm-divider-dark">
        <div className="flex items-baseline justify-between">
          <span className="text-xs" style={{ color: "var(--fm-on-dark-soft)" }}>
            Savings rate
          </span>
          <span className="fm-tabular text-sm font-semibold" style={{ color: "var(--fm-lime)" }}>
            {SAMPLE.savingsRate}%
          </span>
        </div>
        <div className="fm-track-dark mt-2.5 h-2">
          <div className="fm-fill-lime h-full rounded-full" style={{ width: `${SAMPLE.savingsRate}%` }} />
        </div>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed" style={{ color: "var(--fm-on-dark-soft)" }}>
        Illustrative numbers only — not your data. Fermor does not store or ask for your income.
      </p>
    </div>
  );
}

function Row({ label, value, indent, bold }) {
  return (
    <div className={`flex items-baseline justify-between ${indent ? "pl-3" : ""}`}>
      <span
        className={`text-sm ${bold ? "font-semibold" : ""}`}
        style={{ color: bold ? "var(--fm-on-dark)" : "var(--fm-on-dark-soft)" }}
      >
        {label}
      </span>
      <span
        className={`fm-tabular text-sm ${bold ? "font-semibold" : ""}`}
        style={{ color: bold ? "var(--fm-on-dark)" : "var(--fm-on-dark-soft)" }}
      >
        {value}
      </span>
    </div>
  );
}