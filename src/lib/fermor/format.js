// Indian-rupee formatting helpers shared across the Fermor UI.

const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

// Full, readable rupee amount. Pass { decimals: n } to keep fraction digits.
export function formatRupees(value, { decimals = 0 } = {}) {
  if (!Number.isFinite(value)) return INR.format(0);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

// Compact form: ₹1.2 Cr, ₹4.5 L, ₹12.3 K, handy for big numbers.
export function formatCompact(value) {
  if (!Number.isFinite(value)) return "₹0";
  const abs = Math.abs(value);
  if (abs >= 1e7) return `₹${trim(value / 1e7)} Cr`;
  if (abs >= 1e5) return `₹${trim(value / 1e5)} L`;
  if (abs >= 1e3) return `₹${trim(value / 1e3)}K`;
  return `₹${Math.round(value)}`;
}

function trim(n) {
  return (Math.round(n * 10) / 10).toString();
}
