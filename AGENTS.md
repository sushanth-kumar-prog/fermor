# AGENTS.md

## Project Context

Fermor is a static single-page React/Vite app: SIP and EMI calculators plus a local
answer library. There is no backend, no database, and no authentication. Treat it as
user-owned application code, keep changes focused on the request, and follow existing
conventions.

Start with `README.md` for setup, structure, and the design system.

## Key Files

- `src/pages/Home.jsx` — the only page; composes every section in order.
- `src/components/fermor/` — all sections plus `Logo`, `Navbar`, `Footer`, `Slider`.
- `src/lib/fermor/` — brand config, pure calculator maths, INR formatting, answer content.
- `src/index.css` — design tokens (`--fm-*`) and shared component classes.
- `src/components/ui/` — shadcn primitives. Only lightly used; don't grow this folder
  without a reason.
- `vercel.json` — build config and the SPA rewrite.

## Working Notes

- **`npm run dev` is correct here.** This is a plain Vite app — there is no separate
  backend to start, and no Base44 CLI in the loop.
- **Never hand-roll the calculator maths.** `src/lib/fermor/calculations.js` is pure and
  testable; extend it rather than computing inside a component.
- **Keep every financial disclaimer attached to the number it qualifies.** The SIP and
  EMI assumptions live in `config.js`; render the disclaimer directly below the result.
- **Use the design tokens.** Prefer `fm-*` component classes and `--fm-*` variables over
  new hex literals, and keep lime (`#B9FF3C`) paired with dark text.
- **The brand name is not hardcoded.** Change it in `src/lib/fermor/config.js`; the logo,
  footer, and 404 all read from there.
- **Respect `prefers-reduced-motion`.** `index.css` neutralises transitions globally;
  the number-tweening hook in `SipCalculator.jsx` short-circuits when it's set.
- Run `npm run lint` and `npm run build` before finishing code changes.