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
    <section id="emi" className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="fm-eyebrow mb-3">Working EMI calculator</p>
          <h2 className="fm-display text-[30px] md:text-[42px]">
            See what a loan actually costs you.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-start">
          {/* Controls */}
          <div className="fm-card p-6 md:p-8">
            <div className="space-y-8">
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

          {/* Results — dark plane so the headline number carries the weight */}
          <div className="fm-card-dark p-6 md:p-8" style={{ background: "var(--fm-dark)" }}>
            <p className="fm-eyebrow fm-eyebrow-light mb-2">Monthly EMI</p>
            <p
              className="fm-tabular font-display text-[40px] md:text-[46px] font-extrabold leading-none tracking-[-0.03em]"
              style={{ color: "var(--fm-lime)" }}
            >
              {formatCompact(emi)}
            </p>
            <p className="fm-tabular text-sm mt-2" style={{ color: "var(--fm-on-dark-soft)" }}>
              {formatRupees(emi)} per month
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="fm-card-dark px-4 py-3">
                <p className="text-xs mb-1" style={{ color: "var(--fm-on-dark-soft)" }}>
                  Total interest
                </p>
                <p className="fm-tabular font-display text-lg font-semibold" style={{ color: "var(--fm-on-dark)" }}>
                  {formatCompact(totalInterest)}
                </p>
              </div>
              <div className="fm-card-dark px-4 py-3">
                <p className="text-xs mb-1" style={{ color: "var(--fm-on-dark-soft)" }}>
                  Total payment
                </p>
                <p className="fm-tabular font-display text-lg font-semibold" style={{ color: "var(--fm-on-dark)" }}>
                  {formatCompact(totalPayment)}
                </p>
              </div>
            </div>

            {/* Year-by-year balance breakdown */}
            <div className="mt-6 pt-6 border-t fm-divider-dark">
              <p className="text-xs font-semibold uppercase tracking-wide mb-3.5" style={{ color: "var(--fm-on-dark-soft)" }}>
                Year-by-year balance
              </p>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {schedule.map((row) => {
                  const pct = principal > 0 ? (row.endBalance / principal) * 100 : 0;
                  return (
                    <div key={row.year} className="flex items-center gap-3">
                      <span className="fm-tabular text-xs w-8 shrink-0" style={{ color: "var(--fm-on-dark-soft)" }}>
                        Y{row.year}
                      </span>
                      <div className="fm-track-dark flex-1 h-2.5">
                        <div className="fm-fill-lime h-full rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="fm-tabular text-xs w-20 text-right font-medium" style={{ color: "var(--fm-on-dark)" }}>
                        {formatCompact(row.endBalance)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="fm-note fm-note-dark mt-6">
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
                EMI uses the standard reducing-balance formula. Actual offers vary by lender,
                credit profile, and fees — this is an estimate for comparison, not a quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}