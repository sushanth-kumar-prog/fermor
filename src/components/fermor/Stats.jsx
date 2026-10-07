import React from "react";
import { ASK_FERMOR } from "@/lib/fermor/askFermorContent";
import { FERMOR } from "@/lib/fermor/config";

// Honest numbers, deliberately unglamorous. The reference sells scale; we have
// two calculators and a static answer library, so we say exactly that.
const TILES = [
  {
    value: "2",
    label: "Calculators that do real maths",
    span: true,
  },
  {
    value: String(ASK_FERMOR.length),
    label: "Written answers, no chatbot",
  },
  {
    value: "0",
    label: "Sign ups, ever",
    accent: true,
  },
  {
    value: `${FERMOR.sipAssumedReturn}%`,
    label: "Assumed return, loudly labelled",
  },
];

export default function Stats() {
  return (
    <section className="bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {TILES.map((t) => (
            <div
              key={t.label}
              className={`${t.accent ? "fm-tile-accent" : "fm-tile"} px-5 md:px-6 py-7 ${
                t.span ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <p
                className="fm-tabular font-display text-[44px] md:text-[56px] font-extrabold leading-none tracking-[-0.04em] mb-2.5"
                style={{ color: t.accent ? "var(--fm-dark)" : "var(--fm-ink)" }}
              >
                {t.value}
              </p>
              <p
                className="text-sm font-medium leading-snug"
                style={{ color: t.accent ? "rgba(7,26,14,0.72)" : "var(--fm-ink-soft)" }}
              >
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}