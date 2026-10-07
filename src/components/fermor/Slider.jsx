import React from "react";

// Reusable labelled slider. Keeps the number input in sync with the slider.
// Out-of-range typed values clamp to the allowed range with an inline message.
export default function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  formatValue,
  hint,
}) {
  const [text, setText] = React.useState(String(value));
  const [message, setMessage] = React.useState("");

  // Keep the text field synced when the slider moves it.
  React.useEffect(() => {
    setText(String(value));
    setMessage("");
  }, [value]);

  function handleText(e) {
    const raw = e.target.value;
    setText(raw);
    if (raw === "") return;
    let n = Number(raw);
    if (Number.isNaN(n)) return;
    if (n < min) {
      n = min;
      setMessage(`Minimum is ${formatValue ? formatValue(min) : min}.`);
    } else if (n > max) {
      n = max;
      setMessage(`Maximum is ${formatValue ? formatValue(max) : max}.`);
    }
    onChange(n);
  }

  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-sm font-medium" style={{ color: "var(--fm-ink)" }}>
          {label}
        </label>
        <div className="fm-tabular font-display text-lg font-semibold" style={{ color: "var(--fm-ink)" }}>
          {formatValue ? formatValue(value) : value}
        </div>
      </div>

      <input
        type="range"
        className="fm-slider fm-focus"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        aria-valuetext={formatValue ? formatValue(value) : undefined}
        style={{
          background: `linear-gradient(to right, #B9FF3C 0%, #B9FF3C ${pct}%, rgba(10,10,10,0.10) ${pct}%, rgba(10,10,10,0.10) 100%)`,
        }}
      />

      <div className="flex items-center justify-between mt-2.5 gap-2">
        <span className="fm-tabular text-[11px] font-medium" style={{ color: "var(--fm-ink-soft)" }}>
          {formatValue ? formatValue(min) : min}
        </span>
        <input
          type="number"
          className="fm-tabular w-24 rounded-lg border px-2 py-1 text-right text-sm font-semibold focus:outline-none fm-focus"
          style={{
            background: "var(--fm-surface)",
            borderColor: "var(--fm-line-strong)",
            color: "var(--fm-ink)",
          }}
          value={text}
          onChange={handleText}
          min={min}
          max={max}
          step={step}
          aria-label={`${label} value`}
        />
        <span className="fm-tabular text-[11px] font-medium" style={{ color: "var(--fm-ink-soft)" }}>
          {formatValue ? formatValue(max) : max}
        </span>
      </div>

      {message && (
        <p className="mt-2 text-xs font-medium" style={{ color: "var(--fm-ink)" }}>
          {message}
        </p>
      )}
      {hint && !message && (
        <p className="mt-2 text-xs" style={{ color: "var(--fm-ink-soft)" }}>
          {hint}
        </p>
      )}
    </div>
  );
}