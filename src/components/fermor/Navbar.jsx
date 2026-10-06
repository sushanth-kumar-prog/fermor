import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Calculators", href: "#calculators" },
  { label: "Ask Fermor", href: "#ask-fermor" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md bg-[#09090b]/80 border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="fermor-focus rounded transition-transform hover:scale-105" aria-label="Fermor home">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold fermor-focus rounded px-2 py-1 transition-colors hover:text-[#3b82f6]"
              style={{ color: "var(--fermor-ink-soft)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#calculators"
            className="fermor-focus inline-flex items-center px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-0.5"
            style={{ background: "var(--fermor-mint)", color: "var(--fermor-bg)" }}
          >
            Explore free calculators
          </a>
        </div>

        <button
          className="md:hidden fermor-focus rounded p-2 transition-colors hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ color: "var(--fermor-ink)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#09090b]/95 backdrop-blur-lg">
          <div className="px-5 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 text-sm font-semibold fermor-focus rounded-lg hover:bg-white/5 transition-colors"
                style={{ color: "var(--fermor-ink)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#calculators"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center px-5 py-3.5 rounded-full text-sm font-bold fermor-focus shadow-lg"
              style={{ background: "var(--fermor-mint)", color: "var(--fermor-bg)" }}
            >
              Explore free calculators
            </a>
          </div>
        </div>
      )}
    </header>
  );
}