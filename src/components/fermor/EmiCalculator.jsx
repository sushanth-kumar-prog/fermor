import React, { useState } from "react";
import Slider from "./Slider";
import { emiCalc, EMI_DEFAULTS } from "@/lib/fermor/calculations";
import { formatRupees, formatCompact } from "@/lib/fermor/format";

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState(EMI_DEFAULTS.principal);
  const [rate, setRate] = useState(EMI_DEFAULTS.rate);
  const [years, setYears] = useState(EMI_DEFAULTS.years);

  const { emi, totalPayment, totalInterest, schedule } = emiCalc(principal, rate, years);

  return (
    <div
      className="px-6 md:px-7 pt-6 pb-7 border-t"
      style={{ borderColor: "var(--fm-line)", background: "var(--fm-light)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--fm-ink-soft)" }}>
          Every month
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider"
          style={{ background: "var(--fm-dark)", color: "var(--fm-on-dark)" }}
        >
          REDUCING
        </span>
      </div>

      <p
        className="fm-tabular font-display text-[42px] font-extrabold leading-none tracking-[-0.04em] mb-1.5"
        style={{ color: "var(--fm-ink)" }}
      >
        {formatCompact(emi)}
      </p>
      <p className="fm-tabular text-sm mb-6" style={{ color: "var(--fm-ink-soft)" }}>
        {formatRupees(emi)} per month
      </p>

      <div className="grid grid-cols-2 gap-3 mb-7">
        <div className="fm-tile-flat px-4 py-3">
          <p className="text-[11px] mb-1" style={{ color: "var(--fm-ink-soft)" }}>
            Interest
          </p>
          <p className="fm-tabular font-display text-base font-semibold" style={{ color: "var(--fm-ink)" }}>
            {formatCompact(totalInterest)}
          </p>
        </div>
        <div className="fm-tile-flat px-4 py-3">
          <p className="text-[11px] mb-1" style={{ color: "var(--fm-ink-soft)" }}>
            All together
          </p>
          <p className="fm-tabular font-display text-base font-semibold" style={{ color: "var(--fm-ink)" }}>
            {formatCompact(totalPayment)}
          </p>
        </div>
      </div>

      <div className="space-y-7 mb-7">
        <Slider
          label="Loan amount"
          value={principal}
          min={EMI_DEFAULTS.minPrincipal}
          max={EMI_DEFAULTS.maxPrincipal}
          step={EMI_DEFAULTS.stepPrincipal}
          onChange={setPrincipal}
          formatValue={(v) => formatRupees(v)}
        />
        <Slider
          label="Interest rate"
          value={rate}
          min={EMI_DEFAULTS.minRate}
          max={EMI_DEFAULTS.maxRate}
          step={EMI_DEFAULTS.stepRate}
          onChange={setRate}
          formatValue={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Tenure"
          value={years}
          min={EMI_DEFAULTS.minYears}
          max={EMI_DEFAULTS.maxYears}
          step={EMI_DEFAULTS.stepYears}
          onChange={setYears}
          formatValue={(v) => `${v} yr${v === 1 ? "" : "s"}`}
        />
      </div>

      {/* Year by year balance */}
      <div className="pt-6 border-t" style={{ borderColor: "var(--fm-line)" }}>
        <p className="text-[11px] font-bold uppercase tracking-wider mb-3.5" style={{ color: "var(--fm-ink-soft)" }}>
          Balance left, year by year
        </p>
        <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
          {schedule.map((row) => {
            const pct = principal > 0 ? (row.endBalance / principal) * 100 : 0;
            return (
              <div key={row.year} className="flex items-center gap-3">
                <span className="fm-tabular text-[11px] w-7 shrink-0" style={{ color: "var(--fm-ink-soft)" }}>
                  Y{row.year}
                </span>
                <div className="fm-track flex-1 h-2">
                  <div className="fm-fill-lime h-full rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span
                  className="fm-tabular text-[11px] w-16 text-right font-medium"
                  style={{ color: "var(--fm-ink)" }}
                >
                  {formatCompact(row.endBalance)}
                </span>
              </div>
            );
          })}
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
          Standard reducing balance maths. Real offers move with your credit score and whatever
          fees the lender hides in clause fourteen.
        </p>
      </div>
    </div>
  );
}