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
      <div className="flex items-baseline justify-between mb-2.5">
        <label className="text-sm font-medium" style={{ color: "var(--fermor-ink)" }}>
          {label}
        </label>
        <div className="fermor-tabular text-lg font-semibold" style={{ color: "var(--fermor-ink)" }}>
          {formatValue ? formatValue(value) : value}
        </div>
      </div>
      <input
        type="range"
        className="fermor-slider fermor-focus"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        style={{
          background: `linear-gradient(to right, var(--fermor-mint) 0%, var(--fermor-mint) ${pct}%, var(--fermor-track) ${pct}%, var(--fermor-track) 100%)`,
        }}
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-xs" style={{ color: "var(--fermor-ink-soft)" }}>
          {formatValue ? formatValue(min) : min}
        </span>
        <input
          type="number"
          className="w-24 text-right text-sm fermor-tabular bg-transparent border-0 focus:outline-none fermor-focus rounded px-1"
          style={{ color: "var(--fermor-ink)" }}
          value={text}
          onChange={handleText}
          min={min}
          max={max}
          step={step}
          aria-label={`${label} value`}
        />
        <span className="text-xs" style={{ color: "var(--fermor-ink-soft)" }}>
          {formatValue ? formatValue(max) : max}
        </span>
      </div>
      {message && (
        <p className="text-xs mt-1.5" style={{ color: "var(--fermor-ink)" }}>
          {message}
        </p>
      )}
      {hint && !message && (
        <p className="text-xs mt-1.5" style={{ color: "var(--fermor-ink-soft)" }}>
          {hint}
        </p>
      )}
    </div>
  );
}