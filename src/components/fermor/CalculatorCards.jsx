import React from "react";

// Line-illustration "graphic mathematical abstracts" for each calculator card.
function SproutIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 36V18" strokeLinecap="round" />
      <path d="M20 22c0-5 4-8 9-8 0 5-4 8-9 8z" strokeLinejoin="round" />
      <path d="M20 18c0-4-3-7-7-7 0 4 3 7 7 7z" strokeLinejoin="round" />
      <path d="M10 36h20" strokeLinecap="round" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 8v26M14 34h12" strokeLinecap="round" />
      <path d="M8 14h24l-4 9a4 4 0 0 1-8 0L8 14z" strokeLinejoin="round" />
      <path d="M8 14l-3 9a4 4 0 0 0 8 0l-3-9" strokeLinejoin="round" />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="20" cy="20" r="14" />
      <path d="M25 15l-7 3-3 7 7-3 3-7z" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}
function VaultIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
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
    question: "How much can my SIP grow?",
    action: "Opens the SIP calculator",
    href: "#top",
    Icon: SproutIcon,
  },
  {
    question: "Which tax regime suits me?",
    action: "Opens Ask Fermor — tax answers",
    href: "#ask-fermor",
    topic: "tax",
    Icon: CompassIcon,
  },
  {
    question: "Where should I keep my savings?",
    action: "Opens Ask Fermor — SIP vs FD",
    href: "#ask-fermor",
    topic: "savings",
    Icon: VaultIcon,
  },
];

export default function CalculatorCards({ onSelectAskFermor }) {
  return (
    <section id="calculators" className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-24">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
          Start with one question
        </p>
        <h2 className="fermor-heading text-3xl md:text-[42px] leading-tight" style={{ color: "var(--fermor-ink)" }}>
          Pick the question you came here to answer.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {CARDS.map((card) => {
          const Icon = card.Icon;
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
              className="fermor-card fermor-card-hover p-6 flex flex-col h-full fermor-focus"
              style={{ color: "var(--fermor-ink)" }}
            >
              <span style={{ color: "var(--fermor-ink)" }}>
                <Icon />
              </span>
              <h3 className="fermor-heading text-lg mt-5 mb-2 leading-snug">{card.question}</h3>
              <p className="text-sm mt-auto pt-4" style={{ color: "var(--fermor-ink-soft)" }}>
                {card.action}
                <span className="inline-block ml-1" aria-hidden="true">→</span>
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}