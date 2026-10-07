import React, { useState, useMemo, useEffect } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { ASK_FERMOR, ASK_FERMOR_TOPICS } from "@/lib/fermor/askFermorContent";
import { FERMOR } from "@/lib/fermor/config";

export default function AskFermor({ externalTopic, externalAnswerId, onConsumeExternalTopic }) {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(null);
  const [topicFilter, setTopicFilter] = useState(null);

  // When a calculator card opens Ask Fermor filtered to a topic.
  useEffect(() => {
    if (externalTopic) {
      setTopicFilter(externalTopic);
      const target = externalAnswerId
        ? ASK_FERMOR.find((a) => a.id === externalAnswerId)
        : ASK_FERMOR.find((a) => a.topic === externalTopic);
      if (target) setActiveId(target.id);
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
  const activeAnswer = activeId ? ASK_FERMOR.find((a) => a.id === activeId) : null;

  // Closest chips for the no-match state.
  const closest = useMemo(() => {
    if (!noMatch) return [];
    return ASK_FERMOR.slice(0, 4);
  }, [noMatch]);

  function selectChip(id) {
    setActiveId(id);
    setQuery("");
  }

  return (
    <section id="ask-fermor" className="fm-section bg-paper">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-8 md:mb-10">
          <p className="fm-eyebrow mb-3">Ask Fermor</p>
          <h2 className="fm-display text-[30px] md:text-[42px] mb-4">
            Plain answers to the money questions people actually ask.
          </h2>
          <p className="fm-lead">
            No chatbot guessing. Each answer has a short summary, what it depends on, and a source
            you can check yourself.
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
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveId(null);
            }}
            placeholder="Search — try 'emergency fund' or 'tax regime'"
            className="w-full rounded-full bg-white pl-12 pr-5 py-4 text-base fm-focus"
            style={{ border: "1px solid var(--fm-line-strong)", color: "var(--fm-ink)" }}
            aria-label="Search Ask Fermor answers"
          />
        </div>

        {/* Topic filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setTopicFilter(null)}
            className={`fm-chip fm-focus ${topicFilter === null ? "fm-chip-active" : ""}`}
          >
            All topics
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
            <p className="font-display text-xl font-semibold tracking-[-0.02em] mb-2" style={{ color: "var(--fm-ink)" }}>
              No answers match that yet.
            </p>
            <p className="text-sm mb-5" style={{ color: "var(--fm-ink-soft)" }}>
              Try one of these:
            </p>
            <div className="flex flex-wrap gap-2">
              {closest.map((a) => (
                <button
                  key={a.id}
                  onClick={() => selectChip(a.id)}
                  className="fm-chip fm-focus"
                >
                  {a.question}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Chips */}
            <div>
              <div className="flex flex-wrap gap-2.5">
                {filtered.map((a) => {
                  const isActive = activeId === a.id;
                  return (
                    <button
                      key={a.id}
                      onClick={() => selectChip(a.id)}
                      aria-pressed={isActive}
                      className="fm-focus rounded-full px-4 py-2.5 text-sm font-medium text-left transition-all"
                      style={
                        isActive
                          ? {
                              background: "var(--fm-lime)",
                              color: "var(--fm-dark)",
                              border: "1px solid var(--fm-lime)",
                            }
                          : {
                              background: "var(--fm-surface)",
                              border: "1px solid var(--fm-line-strong)",
                              color: "var(--fm-ink)",
                            }
                      }
                    >
                      {a.question}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Answer card */}
            <div className="lg:sticky lg:top-24">
              {activeAnswer ? (
                <AnswerCard answer={activeAnswer} />
              ) : (
                <div className="fm-card p-8">
                  <p className="leading-relaxed" style={{ color: "var(--fm-ink-soft)" }}>
                    Select a question to read its answer, source, and disclaimer. Or search above —
                    if nothing matches, we&apos;ll say so and show the closest chips.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function AnswerCard({ answer }) {
  return (
    <article className="fm-card p-7 md:p-8">
      <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] leading-snug mb-4" style={{ color: "var(--fm-ink)" }}>
        {answer.question}
      </h3>

      <p className="text-base leading-relaxed mb-5 font-medium" style={{ color: "var(--fm-ink)" }}>
        {answer.short}
      </p>

      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--fm-ink-soft)" }}>
        {answer.explanation}
      </p>

      <a
        href={answer.source.link}
        target="_blank"
        rel="noopener noreferrer"
        className="fm-chip fm-focus inline-flex font-semibold"
      >
        Source: {answer.source.name}
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>

      <div className="fm-note mt-5">
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
    </article>
  );
}