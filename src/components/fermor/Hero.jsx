import React from "react";
import { motion } from "framer-motion";
import SipCalculator from "./SipCalculator";
import SampleSnapshot from "./SampleSnapshot";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-12 md:pt-20 pb-10 md:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: headline + CTAs */}
          <motion.div 
            className="lg:pt-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-sm"
              style={{ background: "rgba(59, 130, 246, 0.1)", color: "var(--fermor-mint)", border: "1px solid rgba(59, 130, 246, 0.2)" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Educational tools, not investment advice
            </motion.p>

            <motion.h1 
              variants={itemVariants}
              className="fermor-heading text-[48px] md:text-[72px] font-bold leading-[1.05] tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400" 
            >
              Where do I stand financially, and what should I compare next?
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg leading-relaxed mb-10 max-w-xl font-medium" 
              style={{ color: "var(--fermor-ink-soft)" }}
            >
              Fermor helps you understand and compare money decisions. Move the sliders, read the
              estimate, and follow the source — no sign-up, no selling, no pressure.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href="#calculators"
                className="fermor-focus inline-flex items-center px-8 py-4 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                style={{ background: "var(--fermor-mint)", color: "var(--fermor-bg)" }}
              >
                Explore free calculators
              </a>
              <a
                href="#ask-fermor"
                className="fermor-focus inline-flex items-center px-8 py-4 rounded-full text-sm font-bold border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--fermor-ink)" }}
              >
                Ask Fermor a question
              </a>
            </motion.div>
          </motion.div>

          {/* Right: SIP calculator + sample snapshot */}
          <motion.div 
            className="flex flex-col gap-5"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            <SipCalculator />
            <SampleSnapshot />
          </motion.div>
        </div>
      </div>
    </section>
  );
}