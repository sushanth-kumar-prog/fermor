import React, { useState, useMemo, useEffect } from "react";
import { Search, ArrowUpRight, Info } from "lucide-react";
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
    <section id="ask-fermor" className="py-14 md:py-24" style={{ background: "var(--fermor-surface)", borderTop: "1px solid var(--fermor-border)", borderBottom: "1px solid var(--fermor-border)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="text-sm font-medium mb-3" style={{ color: "var(--fermor-ink-soft)" }}>
            Ask Fermor
          </p>
          <h2 className="fermor-heading text-3xl md:text-[42px] leading-tight mb-4" style={{ color: "var(--fermor-ink)" }}>
            Plain answers to the money questions people actually ask.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--fermor-ink-soft)" }}>
            No chatbot guessing. Each answer has a short summary, what it depends on, and a source
            you can check yourself.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mb-6">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: "var(--fermor-ink-soft)" }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveId(null);
            }}
            placeholder="Search — try 'emergency fund' or 'tax regime'"
            className="w-full pl-11 pr-4 py-3.5 rounded-full text-base fermor-focus bg-transparent"
            style={{ border: "1px solid var(--fermor-border-strong)", color: "var(--fermor-ink)" }}
            aria-label="Search Ask Fermor answers"
          />
        </div>

        {/* Topic filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setTopicFilter(null)}
            className="fermor-focus text-sm px-4 py-2 rounded-full font-medium transition-colors"
            style={
              topicFilter === null
                ? { background: "var(--fermor-ink)", color: "var(--fermor-bg)" }
                : { border: "1px solid var(--fermor-border-strong)", color: "var(--fermor-ink)" }
            }
          >
            All topics
          </button>
          {ASK_FERMOR_TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTopicFilter(t.id)}
              className="fermor-focus text-sm px-4 py-2 rounded-full font-medium transition-colors"
              style={
                topicFilter === t.id
                  ? { background: "var(--fermor-ink)", color: "var(--fermor-bg)" }
                  : { border: "1px solid var(--fermor-border-strong)", color: "var(--fermor-ink)" }
              }
            >
              {t.label}
            </button>
          ))}
        </div>

        {noMatch ? (
          <div className="fermor-card p-8 max-w-2xl">
            <p className="fermor-heading text-xl mb-2" style={{ color: "var(--fermor-ink)" }}>
              No answers match that yet.
            </p>
            <p className="text-sm mb-5" style={{ color: "var(--fermor-ink-soft)" }}>
              Try one of these:
            </p>
            <div className="flex flex-wrap gap-2">
              {closest.map((a) => (
                <button
                  key={a.id}
                  onClick={() => selectChip(a.id)}
                  className="fermor-focus text-sm px-4 py-2 rounded-full font-medium transition-colors"
                  style={{ border: "1px solid var(--fermor-border-strong)", color: "var(--fermor-ink)" }}
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
                      className="fermor-focus text-sm px-4 py-2.5 rounded-full font-medium text-left transition-all"
                      style={
                        isActive
                          ? { background: "var(--fermor-mint)", color: "var(--fermor-ink)", border: "1px solid var(--fermor-mint)" }
                          : { border: "1px solid var(--fermor-border-strong)", color: "var(--fermor-ink)", background: "var(--fermor-bg)" }
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
                <div className="fermor-card p-8">
                  <p className="text-base leading-relaxed" style={{ color: "var(--fermor-ink-soft)" }}>
                    Select a question to read its answer, source, and disclaimer. Or search above —
                    if nothing matches, we'll say so and show the closest chips.
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
    <article className="fermor-card p-7 md:p-8">
      <h3 className="fermor-heading text-2xl leading-snug mb-4" style={{ color: "var(--fermor-ink)" }}>
        {answer.question}
      </h3>

      <p className="text-base leading-relaxed mb-5" style={{ color: "var(--fermor-ink)" }}>
        {answer.short}
      </p>

      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--fermor-ink-soft)" }}>
        {answer.explanation}
      </p>

      <div className="flex items-center gap-2 mb-5">
        <a
          href={answer.source.link}
          target="_blank"
          rel="noopener noreferrer"
          className="fermor-focus inline-flex items-center gap-1.5 text-sm font-semibold rounded px-1"
          style={{ color: "var(--fermor-ink)" }}
        >
          Source: {answer.source.name}
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div
        className="px-4 py-3 rounded-lg flex items-start gap-2.5"
        style={{ background: "var(--fermor-flax)" }}
      >
        <Info size={15} className="mt-0.5 shrink-0" style={{ color: "var(--fermor-ink)" }} />
        <p className="text-xs leading-relaxed" style={{ color: "var(--fermor-ink)" }}>
          {FERMOR.disclaimer}
        </p>
      </div>
    </article>
  );
}