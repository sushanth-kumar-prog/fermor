import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "Read what a number quietly assumes, including the parts it hopes you will not notice.",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <circle cx="21" cy="21" r="12" />
        <path d="M30 30l8 8" strokeLinecap="round" />
        <path d="M16 21h10M21 16v10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Compare",
    desc: "Line two options up next to each other until the difference stops being theoretical.",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <rect x="8" y="10" width="14" height="28" rx="2" />
        <rect x="26" y="18" width="14" height="20" rx="2" />
        <path d="M14 22h2M32 26h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Act",
    desc: "Leave with a next step and something to check it against. No buy now button, no callback.",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <path d="M12 24h24M28 16l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ProductExplainer() {
  return (
    <section className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Smart spending, in the order that works
          </h2>
          <p className="fm-lead mt-4">
            Everyone skips step one and regrets it in month four.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {STEPS.map((step) => {
            const Icon = step.Icon;
            return (
              <div key={step.n} className="fm-card fm-card-hover p-7 h-full">
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
                  >
                    <Icon />
                  </span>
                  <span
                    className="fm-tabular font-display text-sm font-bold"
                    style={{ color: "var(--fm-ink-soft)" }}
                  >
                    {step.n}
                  </span>
                </div>
                <h3
                  className="font-display text-xl font-semibold tracking-[-0.02em] mb-3"
                  style={{ color: "var(--fm-ink)" }}
                >
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--fm-ink-soft)" }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}