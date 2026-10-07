import React from "react";

// Rotations and size nudges are applied per item to get the loose, scattered
// arrangement the reference uses for its logo cloud.
const CLOUD = [
  { label: "UPI", nudge: "-rotate-2", tone: "#B9FF3C" },
  { label: "Salary account", nudge: "rotate-1", tone: "#0C2314" },
  { label: "Fixed deposit", nudge: "-rotate-1", tone: "#9EE614" },
  { label: "Recurring deposit", nudge: "rotate-2", tone: "#0C2314" },
  { label: "PPF", nudge: "", tone: "#B9FF3C" },
  { label: "EPF", nudge: "rotate-1", tone: "#0C2314" },
  { label: "NPS", nudge: "-rotate-2", tone: "#9EE614" },
  { label: "Gold", nudge: "rotate-1", tone: "#0C2314" },
  { label: "Mutual funds", nudge: "", tone: "#B9FF3C" },
  { label: "Term insurance", nudge: "rotate-2", tone: "#0C2314" },
  { label: "Credit card", nudge: "-rotate-1", tone: "#9EE614" },
  { label: "Credit card bill", nudge: "rotate-1", tone: "#0C2314" },
];

export default function Integrations() {
  return (
    <section className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-14">
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Plays nicely with the money you already have
          </h2>
          <p className="fm-lead mt-4">
            Bring whichever account is doing the work. We line them up against each other and show
            you where the difference actually is.
          </p>
        </div>

        <div className="fm-cloud py-2">
          {CLOUD.map((item) => (
            <span key={item.label} className={`fm-cloud-item ${item.nudge}`}>
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{ background: item.tone }}
                aria-hidden="true"
              />
              {item.label}
            </span>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#ask-fermor" className="fm-btn fm-btn-lime">
            Have a look
          </a>
        </div>
      </div>
    </section>
  );
}