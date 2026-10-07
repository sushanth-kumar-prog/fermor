import React, { useState, useRef, useEffect } from "react";
import Slider from "./Slider";
import { sipFutureValue, SIP_DEFAULTS } from "@/lib/fermor/calculations";
import { formatRupees, formatCompact } from "@/lib/fermor/format";
import { FERMOR } from "@/lib/fermor/config";

// Animated number that eases to its target over ~300ms (instant for reduced motion).
function useAnimatedNumber(target) {
  const [display, setDisplay] = useState(target);
  const ref = useRef(target);
  const raf = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      ref.current = target;
      return;
    }
    const start = ref.current;
    const delta = target - start;
    const duration = 300;
    const startTime = performance.now();
    cancelAnimationFrame(raf.current);
    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = start + delta * eased;
      setDisplay(val);
      ref.current = val;
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else {
        setDisplay(target);
        ref.current = target;
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target]);

  return display;
}

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(SIP_DEFAULTS.monthly);
  const [years, setYears] = useState(SIP_DEFAULTS.years);
  const { futureValue, invested, growth } = sipFutureValue(
    monthly,
    FERMOR.sipAssumedReturn,
    years
  );

  const animFv = useAnimatedNumber(futureValue);
  const animInvested = useAnimatedNumber(invested);
  const animGrowth = useAnimatedNumber(growth);

  return (
    <div
      className="px-6 md:px-7 pt-6 pb-7 border-t"
      style={{ borderColor: "var(--fm-line)", background: "var(--fm-light)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--fm-ink-soft)" }}>
          Estimated value
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider"
          style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
        >
          LIVE
        </span>
      </div>

      <p
        className="fm-tabular font-display text-[42px] font-extrabold leading-none tracking-[-0.04em] mb-1.5"
        style={{ color: "var(--fm-ink)" }}
      >
        {formatCompact(animFv)}
      </p>
      <p className="fm-tabular text-sm mb-6" style={{ color: "var(--fm-ink-soft)" }}>
        {formatRupees(animFv, { decimals: 0 })}
      </p>

      <div className="grid grid-cols-2 gap-3 mb-7">
        <div className="fm-tile-flat px-4 py-3">
          <p className="text-[11px] mb-1" style={{ color: "var(--fm-ink-soft)" }}>
            You put in
          </p>
          <p className="fm-tabular font-display text-base font-semibold" style={{ color: "var(--fm-ink)" }}>
            {formatCompact(animInvested)}
          </p>
        </div>
        <div className="fm-tile-flat px-4 py-3">
          <p className="text-[11px] mb-1" style={{ color: "var(--fm-ink-soft)" }}>
            The gain
          </p>
          <p className="fm-tabular font-display text-base font-semibold" style={{ color: "var(--fm-dark)" }}>
            {formatCompact(animGrowth)}
          </p>
        </div>
      </div>

      <div className="space-y-7">
        <Slider
          label="Monthly investment"
          value={monthly}
          min={SIP_DEFAULTS.minMonthly}
          max={SIP_DEFAULTS.maxMonthly}
          step={SIP_DEFAULTS.stepMonthly}
          onChange={setMonthly}
          formatValue={(v) => formatRupees(v)}
        />
        <Slider
          label="Investment period"
          value={years}
          min={SIP_DEFAULTS.minYears}
          max={SIP_DEFAULTS.maxYears}
          step={SIP_DEFAULTS.stepYears}
          onChange={setYears}
          formatValue={(v) => `${v} yr${v === 1 ? "" : "s"}`}
        />
      </div>

      <div className="fm-note mt-7">
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
        <p>{FERMOR.sipReturnLabel}</p>
      </div>
    </div>
  );
}