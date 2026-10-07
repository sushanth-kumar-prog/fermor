import React from "react";
import { motion } from "framer-motion";
import HeroArt from "./HeroArt";
import TrustStrip from "./TrustStrip";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--fm-dark)" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 46% at 50% 0%, rgba(185,255,60,0.18) 0%, rgba(12,35,20,0) 68%), radial-gradient(40% 38% at 10% 88%, rgba(185,255,60,0.08) 0%, rgba(12,35,20,0) 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Oversized headline */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-14 md:pt-20">
          <motion.h1
            variants={rise}
            className="fm-mega text-[11.5vw] md:text-[92px]"
          >
            Money math
            <br />
            <span style={{ color: "rgba(244,244,242,0.34)" }}>without the mystique</span>
          </motion.h1>
        </div>

        {/* Artwork */}
        <motion.div
          variants={rise}
          className="max-w-[1200px] mx-auto px-5 md:px-8 mt-8 md:mt-10"
        >
          <div className="max-w-[620px] mx-auto">
            <HeroArt />
          </div>
        </motion.div>

        {/* Action row */}
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7">
            <motion.div variants={rise} className="flex flex-wrap items-center gap-4">
              <a href="#calculators" className="fm-btn fm-btn-lime">
                Open the calculators
              </a>
              <a
                href="#ask-fermor"
                className="fm-focus inline-flex items-center gap-2 rounded text-sm font-semibold transition-colors hover:text-lime"
                style={{ color: "var(--fm-on-dark)" }}
              >
                Read the answers
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.p
              variants={rise}
              className="max-w-sm text-sm leading-relaxed md:text-right"
              style={{ color: "var(--fm-on-dark-soft)" }}
            >
              Two calculators, one honest answer, zero follow up calls. The maths runs in your
              browser and your numbers never leave it.
            </motion.p>
          </div>
        </div>

        <TrustStrip />
      </motion.div>
    </section>
  );
}