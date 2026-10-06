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
    <div className="fermor-card p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="fermor-heading text-base" style={{ color: "var(--fermor-ink)" }}>
          A sample monthly breakdown
        </h3>
        <span
          className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "var(--fermor-flax)", color: "var(--fermor-ink)" }}
        >
          SAMPLE
        </span>
      </div>

      <div className="space-y-2.5">
        <Row label="Income" value={formatRupees(SAMPLE.income)} />
        <Row label="Essentials" value={formatRupees(SAMPLE.essentials)} indent />
        <Row label="Investments" value={formatRupees(SAMPLE.investments)} indent />
        <div className="h-px my-1" style={{ background: "var(--fermor-border)" }} />
        <Row label="Available to plan" value={formatRupees(SAMPLE.available)} bold />
      </div>

      <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--fermor-border)" }}>
        <div className="flex items-baseline justify-between">
          <span className="text-xs" style={{ color: "var(--fermor-ink-soft)" }}>
            Savings rate
          </span>
          <span className="fermor-tabular text-sm font-semibold" style={{ color: "var(--fermor-ink)" }}>
            {SAMPLE.savingsRate}%
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--fermor-track)" }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${SAMPLE.savingsRate}%`, background: "var(--fermor-mint)" }}
          />
        </div>
      </div>

      <p className="text-[11px] mt-4 leading-relaxed" style={{ color: "var(--fermor-ink-soft)" }}>
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
        style={{ color: bold ? "var(--fermor-ink)" : "var(--fermor-ink-soft)" }}
      >
        {label}
      </span>
      <span
        className={`fermor-tabular text-sm ${bold ? "font-semibold" : ""}`}
        style={{ color: "var(--fermor-ink)" }}
      >
        {value}
      </span>
    </div>
  );
}