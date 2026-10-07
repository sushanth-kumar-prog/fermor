import React from "react";

export default function FinalCta() {
  return (
    <section className="bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <div
          className="relative overflow-hidden rounded-[2rem] px-6 py-14 md:px-16 md:py-20 text-center"
          style={{ background: "var(--fm-dark)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(52% 68% at 50% 0%, rgba(185,255,60,0.20) 0%, rgba(12,35,20,0) 70%)",
            }}
          />

          <div className="relative z-10">
            <h2
              className="fm-display text-[30px] md:text-[46px] mb-5 mx-auto max-w-2xl"
              style={{ color: "var(--fm-on-dark)" }}
            >
              Understand your money before you move it.
            </h2>
            <p
              className="text-lg leading-relaxed max-w-xl mx-auto mb-8"
              style={{ color: "var(--fm-on-dark-soft)" }}
            >
              Free calculators and plain answers. No account, no selling, no urgency. Just a clearer
              picture of where you stand.
            </p>
            <a href="#calculators" className="fm-btn fm-btn-lime">
              Explore free calculators
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}