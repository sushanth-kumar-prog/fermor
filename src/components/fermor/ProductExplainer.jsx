import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "See what a number means in plain language — what it assumes, what it leaves out, and what it doesn't promise.",
    Icon: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="21" cy="21" r="12" />
        <path d="M30 30l8 8" strokeLinecap="round" />
        <path d="M16 21h10M21 16v10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Compare",
    desc: "Put two choices side by side — SIP vs FD, old vs new regime, a longer vs shorter tenure — and see where they differ.",
    Icon: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="10" width="14" height="28" rx="2" />
        <rect x="26" y="18" width="14" height="20" rx="2" />
        <path d="M14 22h2M32 26h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Act",
    desc: "Leave with a clear next step and a source to verify it — never a 'buy now' button or a hidden recommendation.",
    Icon: () => (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 24h24M28 16l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ProductExplainer() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-24">
      <div className="max-w-2xl mb-12 md:mb-16">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
          How Fermor works
        </p>
        <h2 className="fermor-heading text-3xl md:text-[42px] leading-tight" style={{ color: "var(--fermor-ink)" }}>
          Understand, compare, act — in that order.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-8">
        {STEPS.map((step) => {
          const Icon = step.Icon;
          return (
            <div key={step.n} className="fermor-card p-7">
              <div className="flex items-start justify-between mb-6">
                <span style={{ color: "var(--fermor-ink)" }}>
                  <Icon />
                </span>
                <span className="fermor-tabular text-sm font-semibold" style={{ color: "var(--fermor-ink-soft)" }}>
                  {step.n}
                </span>
              </div>
              <h3 className="fermor-heading text-xl mb-3" style={{ color: "var(--fermor-ink)" }}>
                {step.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--fermor-ink-soft)" }}>
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}