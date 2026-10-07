import React from "react";
import { motion } from "framer-motion";
import SipCalculator from "./SipCalculator";
import SampleSnapshot from "./SampleSnapshot";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--fm-dark)" }}>
      {/* Ambient lime glow — stands in for the reference's photography. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 52% at 72% 6%, rgba(185,255,60,0.20) 0%, rgba(12,35,20,0) 70%), radial-gradient(46% 44% at 12% 96%, rgba(185,255,60,0.10) 0%, rgba(12,35,20,0) 72%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-24 pb-12 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: headline + CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-7 text-xs font-semibold"
              style={{
                background: "var(--fm-lime-wash)",
                color: "var(--fm-lime)",
                border: "1px solid rgba(185,255,60,0.32)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
              </span>
              Educational tools, not investment advice
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[40px] md:text-[64px] font-extrabold leading-[1.04] tracking-[-0.035em] mb-6"
              style={{ color: "var(--fm-on-dark)" }}
            >
              Where do I stand{" "}
              <span style={{ color: "var(--fm-lime)" }}>financially</span>, and what should I
              compare next?
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="fm-lead mb-9 max-w-xl"
              style={{ color: "var(--fm-on-dark-soft)", fontSize: "1.0625rem" }}
            >
              Fermor helps you understand and compare money decisions. Move the sliders, read the
              estimate, and follow the source — no sign-up, no selling, no pressure.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
              <a href="#calculators" className="fm-btn fm-btn-lime">
                Explore free calculators
              </a>
              <a href="#ask-fermor" className="fm-btn fm-btn-outline-light">
                Ask Fermor a question
              </a>
            </motion.div>

            {/* Fills the left column on desktop; stacked under the device on mobile. */}
            <motion.div variants={itemVariants} className="hidden lg:block mt-10 max-w-md">
              <SampleSnapshot />
            </motion.div>
          </motion.div>

          {/* Right: device-framed SIP calculator */}
          <motion.div
            initial={{ opacity: 0, y: 26, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, delay: 0.18 }}
            className="relative"
          >
            {/* Lime bloom behind the device */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-8 rounded-[3rem]"
              style={{
                background:
                  "radial-gradient(60% 55% at 50% 42%, rgba(185,255,60,0.26) 0%, rgba(185,255,60,0) 72%)",
              }}
            />

            {/* Device shell */}
            <div
              className="relative rounded-[2.25rem] p-2.5"
              style={{ background: "rgba(244,244,242,0.10)", border: "1px solid rgba(244,244,242,0.16)" }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 pt-2 pb-3">
                <span className="text-[11px] font-medium" style={{ color: "var(--fm-on-dark-soft)" }}>
                  9:41
                </span>
                <span
                  className="rounded-full text-[10px] font-semibold px-2.5 py-1"
                  style={{ background: "var(--fm-lime)", color: "var(--fm-dark)" }}
                >
                  Live
                </span>
              </div>

              {/* Screen */}
              <div className="rounded-[1.75rem] overflow-hidden">
                <SipCalculator />
              </div>
            </div>

            {/* Floating stat chip */}
            <div
              className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-3 rounded-2xl px-4 py-3"
              style={{
                background: "var(--fm-light)",
                color: "var(--fm-dark)",
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)",
              }}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: "var(--fm-lime)" }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 17l6-6 4 4 7-7" />
                  <path d="M14 8h6v6" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-medium" style={{ color: "var(--fm-ink-soft)" }}>
                  Estimated growth
                </span>
                <span className="fm-tabular block font-display text-base font-bold" style={{ color: "var(--fm-ink)" }}>
                  tracked live
                </span>
              </span>
            </div>

            <div className="mt-6 md:mt-7 lg:hidden">
              <SampleSnapshot />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}