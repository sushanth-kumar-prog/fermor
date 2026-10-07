import React, { useState, useMemo, useEffect } from "react";
import { Search, Plus, ArrowUpRight } from "lucide-react";
import { ASK_FERMOR, ASK_FERMOR_TOPICS } from "@/lib/fermor/askFermorContent";
import { FERMOR } from "@/lib/fermor/config";

export default function AskFermor({ externalTopic, externalAnswerId, onConsumeExternalTopic }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);
  const [topicFilter, setTopicFilter] = useState(null);

  // A services card or a read can ask this section to open a specific answer.
  useEffect(() => {
    if (externalTopic) {
      setTopicFilter(externalTopic);
      const target = externalAnswerId
        ? ASK_FERMOR.find((a) => a.id === externalAnswerId)
        : ASK_FERMOR.find((a) => a.topic === externalTopic);
      if (target) setOpenId(target.id);
      onConsumeExternalTopic?.();
    }
  }, [externalTopic, externalAnswerId, onConsumeExternalTopic]);

  const filtered = useMemo(() => {
    let list = ASK_FERMOR;
    if (topicFilter) list = list.filter((a) => a.topic === topicFilter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.question.toLowerCase().includes(q) ||
          a.short.toLowerCase().includes(q) ||
          a.explanation.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, topicFilter]);

  const noMatch = query.trim().length > 0 && filtered.length === 0;

  return (
    <section id="ask-fermor" className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-8 md:mb-10">
          <h2 className="fm-display text-[30px] md:text-[42px]">
            Looking for answers? Consider them covered.
          </h2>
          <p className="fm-lead mt-4">
            Each one comes with a short version, the longer version, and a source you can check
            yourself. No chatbot guessing.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mb-5">
          <Search
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: "var(--fm-ink-soft)" }}
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search answers, try emergency fund"
            className="w-full rounded-full bg-white pl-12 pr-5 py-4 text-base fm-focus"
            style={{ border: "1px solid var(--fm-line-strong)", color: "var(--fm-ink)" }}
            aria-label="Search answers"
          />
        </div>

        {/* Topic filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setTopicFilter(null)}
            className={`fm-chip fm-focus ${topicFilter === null ? "fm-chip-active" : ""}`}
          >
            Everything
          </button>
          {ASK_FERMOR_TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTopicFilter(t.id)}
              className={`fm-chip fm-focus ${topicFilter === t.id ? "fm-chip-active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {noMatch ? (
          <div className="fm-card p-7 max-w-2xl">
            <p
              className="font-display text-xl font-semibold tracking-[-0.02em] mb-2"
              style={{ color: "var(--fm-ink)" }}
            >
              Nothing matches that, which is embarrassing for us.
            </p>
            <p className="text-sm mb-5" style={{ color: "var(--fm-ink-soft)" }}>
              Try one of these instead.
            </p>
            <div className="flex flex-wrap gap-2">
              {ASK_FERMOR.slice(0, 4).map((a) => (
                <button
                  key={a.id}
                  onClick={() => {
                    setOpenId(a.id);
                    setQuery("");
                  }}
                  className="fm-chip fm-focus"
                >
                  {a.question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl space-y-3">
            {filtered.map((a) => {
              const open = openId === a.id;
              return (
                <div key={a.id} className={`fm-faq-row ${open ? "fm-faq-open" : ""}`}>
                  <button
                    onClick={() => setOpenId(open ? null : a.id)}
                    aria-expanded={open}
                    className="fm-faq-head fm-focus font-display text-base md:text-[17px] font-semibold tracking-[-0.015em]"
                    style={{ color: "var(--fm-ink)" }}
                  >
                    <span>{a.question}</span>
                    <span
                      className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300"
                      style={{
                        background: open ? "var(--fm-lime)" : "var(--fm-lime-wash)",
                        color: "var(--fm-dark)",
                        transform: open ? "rotate(45deg)" : "none",
                      }}
                      aria-hidden="true"
                    >
                      <Plus size={16} strokeWidth={2.6} />
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 pt-2">
                        <p
                          className="text-base font-semibold leading-relaxed mb-3"
                          style={{ color: "var(--fm-ink)" }}
                        >
                          {a.short}
                        </p>
                        <p className="fm-faq-body mb-5">{a.explanation}</p>

                        <a
                          href={a.source.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fm-chip fm-focus inline-flex font-semibold"
                        >
                          Source: {a.source.name}
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </a>

                        <div className="fm-note mt-4">
                          <svg
                            className="fm-note-icon"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 11v5M12 8h.01" />
                          </svg>
                          <p>{FERMOR.disclaimer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}