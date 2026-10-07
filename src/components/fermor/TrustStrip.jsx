import React from "react";
import { ShieldCheck, UserX, MapPin, Eye } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, text: "Free to use" },
  { icon: UserX, text: "No sign up needed" },
  { icon: MapPin, text: "Built for India" },
  { icon: Eye, text: "Every formula shown" },
];

// Sits as a bar at the foot of the hero, matching the reference's trust strip.
export default function TrustStrip() {
  return (
    <div
      className="border-t"
      style={{ borderColor: "rgba(244,244,242,0.14)", background: "rgba(7,26,14,0.5)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="flex items-center gap-2.5">
                <Icon
                  size={16}
                  strokeWidth={2}
                  style={{ color: "var(--fm-lime)" }}
                  aria-hidden="true"
                  className="shrink-0"
                />
                <span className="text-sm font-medium" style={{ color: "var(--fm-on-dark)" }}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}