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
    <footer style={{ background: "var(--fermor-ink)", color: "var(--fermor-bg)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-base max-w-sm leading-relaxed" style={{ color: "rgba(247,246,242,0.7)" }}>
              {FERMOR.tagline}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="fermor-focus rounded text-sm font-medium"
                style={{ color: "var(--fermor-bg)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="rounded-xl px-5 py-5 md:px-7 md:py-6"
          style={{ border: "1px solid rgba(247,246,242,0.18)" }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "rgba(247,246,242,0.72)" }}>
            {FERMOR.disclaimer}
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(247,246,242,0.5)" }}>
            © {new Date().getFullYear()} {FERMOR.name}. Educational tools, not investment advice.
          </p>
          <p className="text-xs" style={{ color: "rgba(247,246,242,0.5)" }}>
            Estimates are estimates. Always read the source.
          </p>
        </div>
      </div>
    </footer>
  );
}