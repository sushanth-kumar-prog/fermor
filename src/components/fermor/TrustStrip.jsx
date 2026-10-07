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
    <section className="bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pb-10 md:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="fm-tile flex items-center gap-3 px-4 py-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
                >
                  <Icon size={18} strokeWidth={2.1} aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-tight" style={{ color: "var(--fm-ink)" }}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}