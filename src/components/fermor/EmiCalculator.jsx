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
    <section id="emi" className="max-w-[1200px] mx-auto px-5 md:px-8 pb-14 md:pb-24">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
          Working EMI calculator
        </p>
        <h2 className="fermor-heading text-3xl md:text-[42px] leading-tight" style={{ color: "var(--fermor-ink)" }}>
          See what a loan actually costs you.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* Controls */}
        <div className="fermor-card p-6 md:p-8">
          <div className="space-y-7">
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
              label="Interest rate (annual)"
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
        </div>

        {/* Results */}
        <div className="fermor-card p-6 md:p-8">
          <p className="text-xs uppercase tracking-wide font-medium mb-1.5" style={{ color: "var(--fermor-ink-soft)" }}>
            Monthly EMI
          </p>
          <p className="fermor-heading fermor-tabular text-4xl md:text-[44px] leading-none mb-1" style={{ color: "var(--fermor-ink)" }}>
            {formatCompact(emi)}
          </p>
          <p className="fermor-tabular text-sm" style={{ color: "var(--fermor-ink-soft)" }}>
            {formatRupees(emi)} per month
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t" style={{ borderColor: "var(--fermor-border)" }}>
            <div>
              <p className="text-xs mb-1" style={{ color: "var(--fermor-ink-soft)" }}>
                Total interest
              </p>
              <p className="fermor-tabular text-lg font-semibold" style={{ color: "var(--fermor-ink)" }}>
                {formatCompact(totalInterest)}
              </p>
            </div>
            <div>
              <p className="text-xs mb-1" style={{ color: "var(--fermor-ink-soft)" }}>
                Total payment
              </p>
              <p className="fermor-tabular text-lg font-semibold" style={{ color: "var(--fermor-ink)" }}>
                {formatCompact(totalPayment)}
              </p>
            </div>
          </div>

          {/* Year-by-year balance breakdown */}
          <div className="mt-6 pt-6 border-t" style={{ borderColor: "var(--fermor-border)" }}>
            <p className="text-xs font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
              Year-by-year balance
            </p>
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {schedule.map((row) => {
                const pct = principal > 0 ? (row.endBalance / principal) * 100 : 0;
                return (
                  <div key={row.year} className="flex items-center gap-3">
                    <span className="fermor-tabular text-xs w-8 shrink-0" style={{ color: "var(--fermor-ink-soft)" }}>
                      Y{row.year}
                    </span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "var(--fermor-track)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: "var(--fermor-mint)" }}
                      />
                    </div>
                    <span className="fermor-tabular text-xs w-20 text-right" style={{ color: "var(--fermor-ink)" }}>
                      {formatCompact(row.endBalance)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="mt-5 px-3.5 py-3 rounded-lg text-xs leading-relaxed"
            style={{ background: "var(--fermor-flax)", color: "var(--fermor-ink)" }}
          >
            EMI uses the standard reducing-balance formula. Actual offers vary by lender, credit
            profile, and fees — this is an estimate for comparison, not a quote.
          </div>
        </div>
      </div>
    </section>
  );
}