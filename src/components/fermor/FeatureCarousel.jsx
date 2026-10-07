import React, { useCallback, useEffect, useRef, useState } from "react";
import SipCalculator from "./SipCalculator";
import EmiCalculator from "./EmiCalculator";
import SampleSnapshot from "./SampleSnapshot";

const FEATURES = [
  {
    id: "sip",
    kicker: "SIP projections",
    title: "Smart Analytics",
    blurb: "Move the sliders. Watch the number move. Nothing is rounded in your favour.",
    render: () => <SipCalculator />,
  },
  {
    id: "emi",
    kicker: "EMI planner",
    title: "Loan Cost Explorer",
    blurb: "The instalment looks affordable. The interest does not. Now you can see both.",
    render: () => <EmiCalculator />,
  },
  {
    id: "breakdown",
    kicker: "Monthly view",
    title: "Where It Went",
    blurb: "A worked example so you can place your own income against it without guessing.",
    render: () => <SampleSnapshot />,
  },
];

export default function FeatureCarousel() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setIndex(Math.round(p * (FEATURES.length - 1)));
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  function goTo(i) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }

  return (
    <section id="features" className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-12">
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Features that take the guesswork out
          </h2>
          <p className="fm-lead mt-4">
            Three tools, all of them live on this page. Nothing to download, nothing to wait for a
            callback.
          </p>
        </div>
      </div>

      {/* Track bleeds to the right edge so the next card peeks in, as in the reference. */}
      <div
        ref={trackRef}
        onScroll={sync}
        className="fm-scroll-x pl-5 md:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]"
      >
        {FEATURES.map((f, i) => (
          <article
            key={f.id}
            id={f.id === "emi" ? "emi" : undefined}
            className="fm-card w-[86vw] sm:w-[460px] md:w-[500px] overflow-hidden flex flex-col"
          >
            <header className="px-6 md:px-7 pt-6 md:pt-7 pb-5">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="fm-tabular text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: "var(--fm-ink-soft)" }}>
                  {f.kicker}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.03em] mb-2" style={{ color: "var(--fm-ink)" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fm-ink-soft)" }}>
                {f.blurb}
              </p>
            </header>

            <div className="mt-auto">{f.render()}</div>
          </article>
        ))}
      </div>

      {/* Progress rail + dots */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 mt-8">
        <div className="flex items-center gap-5">
          <div className="fm-track flex-1 h-1.5 max-w-[240px]">
            <div
              className="fm-fill-lime h-full rounded-full transition-[width] duration-200"
              style={{ width: `${Math.max(12, progress * 100)}%` }}
            />
          </div>
          <div className="flex items-center gap-1">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => goTo(i)}
                aria-label={`Show ${f.title}`}
                aria-current={i === index}
                className="fm-focus flex items-center justify-center rounded-full p-2"
              >
                <span
                  className="block rounded-full transition-all duration-200"
                  style={{
                    width: i === index ? 22 : 8,
                    height: 8,
                    background: i === index ? "var(--fm-lime)" : "var(--fm-line-strong)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}