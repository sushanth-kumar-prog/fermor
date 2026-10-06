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
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-24">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
          Learn
        </p>
        <h2 className="fermor-heading text-3xl md:text-[42px] leading-tight" style={{ color: "var(--fermor-ink)" }}>
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
              className="fermor-card fermor-card-hover p-7 flex flex-col h-full fermor-focus"
              style={{ color: "var(--fermor-ink)" }}
            >
              <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--fermor-ink-soft)" }}>
                {t.kicker}
              </span>
              <h3 className="fermor-heading text-lg mt-3 mb-3 leading-snug">{t.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fermor-ink-soft)" }}>
                {t.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold mt-5 pt-1" style={{ color: "var(--fermor-ink)" }}>
                Read the answer
                <ArrowRight size={15} />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}