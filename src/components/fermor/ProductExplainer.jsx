import React from "react";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    desc: "See what a number means in plain language — what it assumes, what it leaves out, and what it doesn't promise.",
    Icon: () => (
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
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
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <path d="M12 24h24M28 16l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ProductExplainer() {
  return (
    <section id="about" className="fm-section relative overflow-hidden" style={{ background: "var(--fm-dark)" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 60% at 88% 8%, rgba(185,255,60,0.14) 0%, rgba(12,35,20,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="fm-eyebrow fm-eyebrow-light mb-3">How Fermor works</p>
          <h2
            className="fm-display text-[30px] md:text-[42px]"
            style={{ color: "var(--fm-on-dark)" }}
          >
            Understand, compare, act — in that order.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {STEPS.map((step) => {
            const Icon = step.Icon;
            return (
              <div key={step.n} className="fm-card-dark p-7">
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
                  >
                    <Icon />
                  </span>
                  <span className="fm-tabular font-display text-sm font-bold" style={{ color: "var(--fm-on-dark-soft)" }}>
                    {step.n}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] mb-3" style={{ color: "var(--fm-on-dark)" }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--fm-on-dark-soft)" }}>
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