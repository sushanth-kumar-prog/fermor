import React from "react";

const AUDIENCES = [
  {
    title: "Starting out",
    desc: "Build your first emergency fund, understand your first salary slip, and see what a small monthly SIP could become over time.",
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 34V14M20 14c0-4-3-7-7-7 0 4 3 7 7 7z" strokeLinejoin="round" />
        <path d="M20 18c0-3 3-6 7-6 0 3-3 6-7 6z" strokeLinejoin="round" />
        <path d="M10 34h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Planning ahead",
    desc: "Compare old vs new tax regime, weigh a home loan tenure, and check what to verify before any investment.",
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="24" height="24" rx="3" />
        <path d="M14 20h12M14 24h8" strokeLinecap="round" />
        <path d="M20 8v4M20 28v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Growing steadily",
    desc: "Sense-check your asset mix, separate insurance from investment, and keep inflation from quietly eroding your savings.",
    Icon: () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 30l8-10 6 5 10-13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 12h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Audience() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-24">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
          Who Fermor is for
        </p>
        <h2 className="fermor-heading text-3xl md:text-[42px] leading-tight" style={{ color: "var(--fermor-ink)" }}>
          Wherever you are, here's what you can do.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-5">
        {AUDIENCES.map((a) => {
          const Icon = a.Icon;
          return (
            <div key={a.title} className="fermor-card fermor-card-hover p-7 h-full">
              <span style={{ color: "var(--fermor-ink)" }}>
                <Icon />
              </span>
              <h3 className="fermor-heading text-xl mt-5 mb-3" style={{ color: "var(--fermor-ink)" }}>
                {a.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--fermor-ink-soft)" }}>
                {a.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}