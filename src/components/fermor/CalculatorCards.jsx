import React from "react";

function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 8v26M14 34h12" strokeLinecap="round" />
      <path d="M8 14h24l-4 9a4 4 0 0 1-8 0L8 14z" strokeLinejoin="round" />
      <path d="M8 14l-3 9a4 4 0 0 0 8 0l-3-9" strokeLinejoin="round" />
    </svg>
  );
}
function SproutIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20 36V18" strokeLinecap="round" />
      <path d="M20 22c0-5 4-8 9-8 0 5-4 8-9 8z" strokeLinejoin="round" />
      <path d="M20 18c0-4-3-7-7-7 0 4 3 7 7 7z" strokeLinejoin="round" />
      <path d="M10 36h20" strokeLinecap="round" />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="20" cy="20" r="14" />
      <path d="M25 15l-7 3-3 7 7-3 3-7z" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}
function VaultIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="6" y="10" width="28" height="22" rx="3" />
      <circle cx="22" cy="21" r="6" />
      <path d="M22 15v3M22 24v3M16 21h3M25 21h3" strokeLinecap="round" />
      <path d="M6 16h28" />
    </svg>
  );
}

const CARDS = [
  {
    question: "Can I afford this loan?",
    action: "Opens the EMI calculator",
    href: "#emi",
    Icon: ScaleIcon,
  },
  {
    question: "How far can this SIP grow?",
    action: "Opens the SIP calculator",
    href: "#features",
    Icon: SproutIcon,
  },
  {
    question: "Which tax regime wins?",
    action: "Opens the tax answers",
    href: "#ask-fermor",
    topic: "tax",
    Icon: CompassIcon,
  },
  {
    question: "Savings account or FD?",
    action: "Opens SIP vs FD",
    href: "#ask-fermor",
    topic: "savings",
    Icon: VaultIcon,
  },
];

export default function CalculatorCards({ onSelectAskFermor }) {
  return (
    <section id="calculators" className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Pick the question you actually came here to answer.
          </h2>
          <p className="fm-lead mt-4">
            Four shortcuts, each opening the tool that settles the argument you are currently
            having with someone at home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.Icon;
            const featured = i === 0;
            return (
              <a
                key={card.question}
                href={card.href}
                onClick={(e) => {
                  if (card.topic && onSelectAskFermor) {
                    e.preventDefault();
                    onSelectAskFermor(card.topic);
                    document.getElementById("ask-fermor")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`${featured ? "fm-card-feature" : "fm-card fm-card-hover"} p-6 flex flex-col h-full fm-focus group`}
                style={{ color: featured ? "var(--fm-dark)" : "var(--fm-ink)" }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    background: featured ? "rgba(7,26,14,0.12)" : "var(--fm-lime-wash)",
                    color: "var(--fm-dark)",
                  }}
                >
                  <Icon />
                </span>

                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] mt-5 mb-2 leading-snug">
                  {card.question}
                </h3>

                <p
                  className="mt-auto pt-4 text-sm font-medium inline-flex items-center gap-1.5"
                  style={{ color: featured ? "rgba(7,26,14,0.72)" : "var(--fm-ink-soft)" }}
                >
                  {card.action}
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}