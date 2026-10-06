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
    <div className="fermor-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="fermor-heading text-xl" style={{ color: "var(--fermor-ink)" }}>
          SIP Calculator
        </h3>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ background: "var(--fermor-mint)", color: "var(--fermor-ink)" }}
        >
          Live estimate
        </span>
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

      <div className="mt-7 pt-6 border-t" style={{ borderColor: "var(--fermor-border)" }}>
        <p className="text-xs uppercase tracking-wide font-medium mb-1.5" style={{ color: "var(--fermor-ink-soft)" }}>
          Estimated value
        </p>
        <p className="fermor-heading fermor-tabular text-4xl md:text-[44px] leading-none" style={{ color: "var(--fermor-ink)" }}>
          {formatCompact(animFv)}
        </p>
        <p className="fermor-tabular text-sm mt-1" style={{ color: "var(--fermor-ink-soft)" }}>
          {formatRupees(animFv, { decimals: 0 })}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div>
            <p className="text-xs mb-1" style={{ color: "var(--fermor-ink-soft)" }}>
              You invest
            </p>
            <p className="fermor-tabular text-lg font-semibold" style={{ color: "var(--fermor-ink)" }}>
              {formatCompact(animInvested)}
            </p>
          </div>
          <div>
            <p className="text-xs mb-1" style={{ color: "var(--fermor-ink-soft)" }}>
              Estimated growth
            </p>
            <p className="fermor-tabular text-lg font-semibold" style={{ color: "var(--fermor-ink)" }}>
              {formatCompact(animGrowth)}
            </p>
          </div>
        </div>

        <div
          className="mt-5 px-3.5 py-3 rounded-lg text-xs leading-relaxed"
          style={{ background: "var(--fermor-flax)", color: "var(--fermor-ink)" }}
        >
          {FERMOR.sipReturnLabel}
        </div>
      </div>
    </div>
  );
}