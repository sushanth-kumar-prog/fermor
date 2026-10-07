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
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pt-6"
      style={{
        background: "linear-gradient(to top, var(--fm-light) 62%, rgba(244,244,242,0) 100%)",
      }}
    >
      <a href="#calculators" className="fm-btn fm-btn-lime w-full">
        Explore calculators
      </a>
    </div>
  );
}