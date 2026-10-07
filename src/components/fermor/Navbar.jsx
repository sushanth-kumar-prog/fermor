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
      className="sticky top-0 z-40 bg-forest border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="fm-focus rounded" aria-label="Fermor home">
          <Logo tone="light" />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
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

        <div className="hidden md:block">
          <a href="#calculators" className="fm-btn fm-btn-lime fm-btn-sm">
            Explore free calculators
          </a>
        </div>

        <button
          className="md:hidden fm-focus rounded p-2 -mr-2 transition-colors hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ color: "var(--fm-on-dark)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-forest-deep">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="fm-focus rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-lime"
                style={{ color: "var(--fm-on-dark)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#calculators"
              onClick={() => setOpen(false)}
              className="fm-btn fm-btn-lime w-full mt-3"
            >
              Explore free calculators
            </a>
          </div>
        </div>
      )}
    </header>
  );
}