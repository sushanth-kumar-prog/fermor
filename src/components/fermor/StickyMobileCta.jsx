import React, { useState, useEffect } from "react";

// Sticky mobile CTA bar. Appears on small screens once the user scrolls past
// the hero, and hides when the calculator section is in view.
export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const hero = document.getElementById("top");
      const calculators = document.getElementById("calculators");
      if (!hero || !calculators) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const calcTop = calculators.getBoundingClientRect().top;
      // show after hero scrolls past, hide when calculators section reaches view
      const pastHero = heroBottom < 0;
      const calcInView = calcTop < window.innerHeight * 0.6;
      setVisible(pastHero && !calcInView);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pt-2"
      style={{ background: "linear-gradient(to top, var(--fermor-bg) 70%, transparent)" }}
    >
      <a
        href="#calculators"
        className="fermor-focus flex items-center justify-center w-full px-6 py-3.5 rounded-full text-sm font-semibold"
        style={{ background: "var(--fermor-ink)", color: "var(--fermor-bg)" }}
      >
        Explore calculators
      </a>
    </div>
  );
}