import React from "react";

const TAGS = [
  "SIP projections",
  "EMI breakdowns",
  "Tax regime answers",
  "Savings comparisons",
];

export default function DarkCta() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--fm-dark)" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46% 62% at 82% 30%, rgba(185,255,60,0.16) 0%, rgba(12,35,20,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <h2
              className="fm-mega text-[30px] md:text-[52px] mb-6 normal-case tracking-[-0.035em]"
              style={{ color: "var(--fm-on-dark)" }}
            >
              Take smarter control of your money, minus the sales pitch
            </h2>

            <p className="mb-8 max-w-md leading-relaxed" style={{ color: "var(--fm-on-dark-soft)" }}>
              Most money advice is a funnel with a calculator on top. This one is just the
              calculator.
            </p>

            <a href="#features" className="fm-btn fm-btn-lime mb-8">
              Start with a number
            </a>

            <div className="flex flex-wrap gap-2.5">
              {TAGS.map((t) => (
                <span key={t} className="fm-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <svg
              viewBox="0 0 340 320"
              className="w-full max-w-[340px] h-auto"
              role="img"
              aria-label="Illustration of a yearly savings split"
            >
              <defs>
                <linearGradient id="fmDonut" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#B9FF3C" />
                  <stop offset="100%" stopColor="#9EE614" />
                </linearGradient>
              </defs>

              {/* Donut */}
              <circle cx="170" cy="160" r="104" fill="none" stroke="rgba(244,244,242,0.10)" strokeWidth="30" />
              <circle
                cx="170"
                cy="160"
                r="104"
                fill="none"
                stroke="url(#fmDonut)"
                strokeWidth="30"
                strokeLinecap="round"
                strokeDasharray="654"
                strokeDashoffset="250"
                transform="rotate(-90 170 160)"
              />

              <text
                x="170"
                y="152"
                textAnchor="middle"
                fill="#F4F4F2"
                fontSize="46"
                fontWeight="800"
                letterSpacing="-1.5"
                className="fm-svg-display"
              >
                62%
              </text>
              <text x="170" y="182" textAnchor="middle" fill="rgba(244,244,242,0.55)" fontSize="13" fontWeight="600">
                kept
              </text>

              {/* Legend */}
              {[
                { c: "#B9FF3C", t: "Invested", v: "₹12,000" },
                { c: "rgba(244,244,242,0.28)", t: "Spent", v: "₹38,000" },
                { c: "rgba(244,244,242,0.14)", t: "Unspent", v: "₹30,000" },
              ].map((row, i) => (
                <g key={row.t}>
                  <rect
                    x="14"
                    y={232 + i * 28}
                    width="312"
                    height="22"
                    rx="11"
                    fill="rgba(244,244,242,0.06)"
                  />
                  <circle cx="30" cy={243 + i * 28} r="5" fill={row.c} />
                  <text x="44" y={247 + i * 28} fill="rgba(244,244,242,0.75)" fontSize="12" fontWeight="500">
                    {row.t}
                  </text>
                  <text
                    x="312"
                    y={247 + i * 28}
                    textAnchor="end"
                    fill="#F4F4F2"
                    fontSize="12"
                    fontWeight="700"
                    className="fm-svg-display"
                  >
                    {row.v}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}