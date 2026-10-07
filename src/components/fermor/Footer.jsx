import React from "react";
import Logo from "./Logo";
import { FERMOR } from "@/lib/fermor/config";

const NAV = [
  { label: "Calculators", href: "#calculators" },
  { label: "Answers", href: "#ask-fermor" },
  { label: "How it works", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--fm-dark)" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 54% at 50% 8%, rgba(185,255,60,0.18) 0%, rgba(12,35,20,0) 70%)",
        }}
      />

      <div className="relative z-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="fm-focus rounded text-sm font-medium transition-colors hover:text-lime"
                style={{ color: "var(--fm-on-dark)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <h2 className="fm-mega text-[26px] md:text-[46px] max-w-3xl mx-auto text-center mb-9 normal-case tracking-[-0.035em]">
            Take control of your money before you move any of it
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-5">
            <a href="#ask-fermor" className="fm-btn fm-btn-outline-light">
              Browse the answers
            </a>
            <a href="#calculators" className="fm-btn fm-btn-lime">
              Open the calculators
            </a>
          </div>

          <p
            className="text-center text-sm mb-14"
            style={{ color: "var(--fm-on-dark-soft)" }}
          >
            No app store. No download. Nothing to update.
          </p>
        </div>

        {/* Oversized wordmark */}
        <div
          aria-hidden="true"
          className="px-2 text-center font-display font-extrabold tracking-[-0.04em] leading-[0.8]"
          style={{
            fontSize: "clamp(64px, 21vw, 300px)",
            // Kept above 3:1 against the forest so axe does not flag the
            // decorative watermark, even though it is aria hidden.
            color: "rgba(244,244,242,0.36)",
          }}
        >
          {FERMOR.name}
        </div>

        <div
          className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(244,244,242,0.14)" }}
        >
          <Logo tone="light" />
          <p className="text-xs" style={{ color: "var(--fm-on-dark-soft)" }}>
            © {new Date().getFullYear()} {FERMOR.name}. Made in India.
          </p>
          <p
            className="text-xs max-w-md md:text-right leading-relaxed"
            style={{ color: "var(--fm-on-dark-soft)" }}
          >
            {FERMOR.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}