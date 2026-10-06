import React from "react";

export default function FinalCta() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-28">
      <div
        className="rounded-3xl px-6 py-14 md:px-16 md:py-20 text-center"
        style={{ background: "var(--fermor-ink)", color: "var(--fermor-bg)" }}
      >
        <h2 className="fermor-heading text-3xl md:text-[48px] leading-tight mb-5">
          Understand your money before you move it.
        </h2>
        <p className="text-lg leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "rgba(247,246,242,0.72)" }}>
          Free calculators and plain answers. No account, no selling, no urgency. Just a clearer
          picture of where you stand.
        </p>
        <a
          href="#calculators"
          className="fermor-focus inline-flex items-center px-7 py-4 rounded-full text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--fermor-mint)", color: "var(--fermor-ink)" }}
        >
          Explore free calculators
        </a>
      </div>
    </section>
  );
}