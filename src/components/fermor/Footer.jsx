import React from "react";
import Logo from "./Logo";
import { FERMOR } from "@/lib/fermor/config";

const NAV = [
  { label: "Calculators", href: "#calculators" },
  { label: "Ask Fermor", href: "#ask-fermor" },
  { label: "How it works", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--fm-dark-deep)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <Logo tone="light" />
            <p
              className="mt-4 text-base max-w-sm leading-relaxed"
              style={{ color: "var(--fm-on-dark-soft)" }}
            >
              {FERMOR.tagline}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
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
        </div>

        <div
          className="rounded-xl px-5 py-5 md:px-7 md:py-6"
          style={{ border: "1px solid var(--fm-line-dark)" }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "var(--fm-on-dark-soft)" }}>
            {FERMOR.disclaimer}
          </p>
        </div>

        <div
          className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4"
        >
          <p className="text-xs" style={{ color: "var(--fm-on-dark-soft)" }}>
            © {new Date().getFullYear()} {FERMOR.name}. Educational tools, not investment advice.
          </p>
          <p className="text-xs" style={{ color: "var(--fm-on-dark-soft)" }}>
            Estimates are estimates. Always read the source.
          </p>
        </div>
      </div>

      {/* Oversized wordmark — the reference's signature footer element */}
      <div
        aria-hidden="true"
        className="relative select-none px-2 text-center font-display font-extrabold tracking-[-0.04em] leading-[0.8] select-none"
        style={{
          fontSize: "clamp(64px, 21vw, 300px)",
          // >=3:1 against --fm-dark-deep so the decorative watermark still
          // passes axe colour-contrast (large-text threshold).
          color: "rgba(244,244,242,0.36)",
        }}
      >
        {FERMOR.name}
      </div>
    </footer>
  );
}