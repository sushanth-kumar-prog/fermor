import React from "react";
import { ArrowRight } from "lucide-react";

const PERSONAS = [
  {
    kicker: "Starting out",
    title: "Your first salary is now a standing order",
    desc: "Build the emergency fund before the SIP. In that order, every time. The fund is the boring part that saves you later.",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 34V14M20 14c0-4-3-7-7-7 0 4 3 7 7 7z" strokeLinejoin="round" />
        <path d="M20 18c0-3 3-6 7-6 0 3-3 6-7 6z" strokeLinejoin="round" />
        <path d="M10 34h20" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    kicker: "Planning ahead",
    title: "Two regimes, one salary, one decision",
    desc: "Run the old tax regime against the new one on your actual income instead of a screenshot somebody posted in a forum.",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="8" y="8" width="24" height="24" rx="3" />
        <path d="M14 20h12M14 24h8" strokeLinecap="round" />
        <path d="M20 8v4M20 28v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    kicker: "Growing steadily",
    title: "Insurance is not an investment",
    desc: "Separate the two before you compare returns, which two different people keep mixing up at the same party.",
    Icon: () => (
      <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M8 30l8-10 6 5 10-13" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 12h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const READS = [
  {
    id: "emergency-fund",
    kicker: "Safety first",
    title: "How big should the emergency fund really be?",
    excerpt:
      "Three to six months of essentials, parked somewhere you can reach without paying a penalty. Access matters more than growth here.",
  },
  {
    id: "old-vs-new-tax",
    kicker: "Tax",
    title: "The only honest way to pick a tax regime",
    excerpt:
      "Lower rates on one side, more deductions on the other. Run both on your own income and stop relaying advice from strangers.",
  },
  {
    id: "sip-vs-fd",
    kicker: "Savings",
    title: "Savings account against fixed deposit",
    excerpt:
      "One keeps money steady and known. The other chases growth over years while wobbling on the way. They were never rivals.",
  },
];

export default function Audience() {
  return (
    <section className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Who this is for, and what to read while you decide
          </h2>
          <p className="fm-lead mt-4">
            No invented customer quotes on this page. That felt like a strange thing to do, so
            here is who it actually helps instead.
          </p>
        </div>

        {/* Personas */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {PERSONAS.map((p) => {
            const Icon = p.Icon;
            return (
              <article key={p.kicker} className="fm-card fm-card-hover p-7 h-full flex flex-col">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full mb-5"
                  style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
                >
                  <Icon />
                </span>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider mb-2.5"
                  style={{ color: "var(--fm-ink-soft)" }}
                >
                  {p.kicker}
                </span>
                <h3
                  className="font-display text-lg font-bold tracking-[-0.02em] mb-3 leading-snug"
                  style={{ color: "var(--fm-ink)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fm-ink-soft)" }}>
                  {p.desc}
                </p>
              </article>
            );
          })}
        </div>

        {/* Reads */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
          {READS.map((r) => (
            <a
              key={r.id}
              href="#ask-fermor"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(
                  new CustomEvent("fermor:open-answer", { detail: r.id })
                );
                document.getElementById("ask-fermor")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="fm-card fm-card-hover p-7 h-full flex flex-col fm-focus group"
              style={{ color: "var(--fm-ink)" }}
            >
              <span
                className="self-start rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4"
                style={{ background: "var(--fm-lime-wash)", color: "var(--fm-dark)" }}
              >
                {r.kicker}
              </span>
              <h3
                className="font-display text-lg font-bold tracking-[-0.02em] mb-3 leading-snug"
                style={{ color: "var(--fm-ink)" }}
              >
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--fm-ink-soft)" }}>
                {r.excerpt}
              </p>
              <span
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: "var(--fm-ink)" }}
              >
                Read the answer
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}