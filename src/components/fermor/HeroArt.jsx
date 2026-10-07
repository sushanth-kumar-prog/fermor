import React from "react";

/**
 * Hero artwork. The reference leans on a photograph here; we build the same
 * weight and composition from pure SVG so nothing has to load, expire, or
 * get licensed. One dashboard panel, one overlapping phone, two live chips.
 */
export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 560 430"
      className="w-full h-auto block"
      role="img"
      aria-label="A Fermor dashboard showing projected savings growth"
    >
      <defs>
        <linearGradient id="fmArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B9FF3C" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#B9FF3C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fmPhone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F2A18" />
          <stop offset="100%" stopColor="#071A0E" />
        </linearGradient>
      </defs>

      {/* Dashboard panel */}
      <rect x="30" y="24" width="430" height="286" rx="26" fill="#0A1F11" />
      <rect
        x="30"
        y="24"
        width="430"
        height="286"
        rx="26"
        fill="none"
        stroke="rgba(244,244,242,0.14)"
        strokeWidth="1.5"
      />

      <text x="58" y="70" fill="rgba(244,244,242,0.55)" fontSize="12" fontWeight="600" letterSpacing="1.6">
        PROJECTED VALUE
      </text>
      <text
        x="58"
        y="106"
        fill="#F4F4F2"
        fontSize="34"
        fontWeight="800"
        letterSpacing="-1"
        className="fm-svg-display"
      >
        &#8377;23,23,391
      </text>

      {/* Area chart */}
      <path
        d="M58 258 C 108 250, 132 226, 168 214 C 206 201, 226 168, 264 154 C 300 141, 324 118, 356 104 C 386 91, 402 80, 428 70 L 428 262 L 58 262 Z"
        fill="url(#fmArea)"
      />
      <path
        d="M58 258 C 108 250, 132 226, 168 214 C 206 201, 226 168, 264 154 C 300 141, 324 118, 356 104 C 386 91, 402 80, 428 70"
        fill="none"
        stroke="#B9FF3C"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="428" cy="70" r="6" fill="#B9FF3C" />
      <circle cx="428" cy="70" r="12" fill="#B9FF3C" opacity="0.18" />

      {/* Axis ticks */}
      <line x1="58" y1="274" x2="428" y2="274" stroke="rgba(244,244,242,0.14)" strokeWidth="1" />
      {["Y1", "Y5", "Y10"].map((t, i) => (
        <text
          key={t}
          x={58 + i * 185}
          y="294"
          fill="rgba(244,244,242,0.42)"
          fontSize="11"
          fontWeight="500"
        >
          {t}
        </text>
      ))}

      {/* Phone */}
      <rect x="376" y="168" width="164" height="246" rx="30" fill="url(#fmPhone)" />
      <rect
        x="376"
        y="168"
        width="164"
        height="246"
        rx="30"
        fill="none"
        stroke="rgba(244,244,242,0.16)"
        strokeWidth="1.5"
      />
      <rect x="440" y="182" width="36" height="5" rx="2.5" fill="rgba(244,244,242,0.28)" />

      <rect x="398" y="204" width="120" height="46" rx="14" fill="#B9FF3C" />
      <text x="412" y="225" fill="#0C2314" fontSize="10" fontWeight="700" letterSpacing="1.2">
        EMI
      </text>
      <text x="412" y="243" fill="#0C2314" fontSize="15" fontWeight="800" className="fm-svg-display">
        &#8377;10,501
      </text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="398"
            y={266 + i * 40}
            width="120"
            height="28"
            rx="10"
            fill="rgba(244,244,242,0.07)"
          />
          <rect
            x="406"
            y={277 + i * 40}
            width={64 - i * 14}
            height="6"
            rx="3"
            fill="rgba(244,244,242,0.4)"
          />
          <rect
            x={486 - (52 - i * 12)}
            y={277 + i * 40}
            width={52 - i * 12}
            height="6"
            rx="3"
            fill={i === 2 ? "#B9FF3C" : "rgba(244,244,242,0.22)"}
          />
        </g>
      ))}

      {/* Floating chip — growth */}
      <g>
        <rect x="4" y="120" width="196" height="62" rx="18" fill="#F4F4F2" />
        <rect x="20" y="136" width="34" height="30" rx="10" fill="#B9FF3C" />
        <path
          d="M31 156l6-7 5 4 6-8"
          fill="none"
          stroke="#0C2314"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="64" y="148" fill="#5C6157" fontSize="11" fontWeight="600">
          Estimated growth
        </text>
        <text
          x="64"
          y="167"
          fill="#0A0A0A"
          fontSize="16"
          fontWeight="800"
          className="fm-svg-display"
        >
          &#8377;11.2 L
        </text>
      </g>

      {/* Floating chip — disclaimer */}
      <g>
        <rect x="392" y="332" width="168" height="54" rx="16" fill="#B9FF3C" />
        <text x="414" y="355" fill="#0C2314" fontSize="11" fontWeight="700" letterSpacing="0.8">
          NO SIGN UP
        </text>
        <text x="414" y="373" fill="#0C2314" fontSize="11" fontWeight="600">
          Nothing sold. Ever.
        </text>
      </g>
    </svg>
  );
}