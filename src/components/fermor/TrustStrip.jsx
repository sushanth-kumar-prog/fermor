import React from "react";
import { ShieldCheck, UserX, MapPin, Eye } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, text: "Free to use" },
  { icon: UserX, text: "No sign-up needed" },
  { icon: MapPin, text: "Built for India" },
  { icon: Eye, text: "Transparent calculations" },
];

export default function TrustStrip() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-10 md:pb-16">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-2xl p-4 md:p-5"
        style={{ background: "rgba(117, 251, 144, 0.18)", border: "1px solid var(--fermor-border)" }}
      >
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.text} className="flex items-center gap-2.5">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                style={{ background: "var(--fermor-mint)", color: "var(--fermor-ink)" }}
              >
                <Icon size={16} strokeWidth={2} />
              </span>
              <span className="text-sm font-medium" style={{ color: "var(--fermor-ink)" }}>
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}