import React from "react";
import { ArrowRight } from "lucide-react";
import { ASK_FERMOR } from "@/lib/fermor/askFermorContent";

// Three editorial teasers linking to Ask Fermor answers.
const TEASERS = [
  {
    id: "emergency-fund",
    kicker: "Safety first",
    title: "How big should your emergency fund really be?",
    excerpt: "Three to six months of essentials, kept somewhere you can reach without penalty — and why access matters more than growth here.",
  },
  {
    id: "old-vs-new-tax",
    kicker: "Tax",
    title: "Old vs new tax regime: the only honest way to decide",
    excerpt: "Lower rates versus more deductions. Compute both on your actual income instead of guessing — here's how.",
  },
  {
    id: "sip-vs-fd",
    kicker: "Savings",
    title: "SIP vs FD: not a rivalry, a timeline question",
    excerpt: "One keeps money steady and known; the other aims for growth over years but moves along the way. When each wins.",
  },
];

export default function Learning() {
  return (
    <section className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="fm-eyebrow mb-3">Learn</p>
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Short reads that settle a question.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {TEASERS.map((t) => {
            const answer = ASK_FERMOR.find((a) => a.id === t.id);
            return (
              <a
                key={t.id}
                href="#ask-fermor"
                onClick={(e) => {
                  e.preventDefault();
                  const evt = new CustomEvent("fermor:open-answer", { detail: t.id });
                  window.dispatchEvent(evt);
                  document.getElementById("ask-fermor")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="fm-card fm-card-hover p-7 flex flex-col h-full fm-focus group"
                style={{ color: "var(--fm-ink)" }}
              >
                <span
                  className="inline-flex self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: "var(--fm-lime-wash)", color: "var(--fm-dark)" }}
                >
                  {t.kicker}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] mt-4 mb-3 leading-snug">
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fm-ink-soft)" }}>
                  {t.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 mt-auto pt-6 text-sm font-semibold"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}