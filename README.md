# Fermor

Understand and compare money decisions. A single-page React app with a working SIP
calculator, a working EMI calculator, and a searchable set of plain-language answers —
no sign-up, no backend, no tracking.

## Stack

- **React 18** + **Vite 8**
- **React Router 6** (`BrowserRouter`)
- **Tailwind CSS 3** with a small set of Fermor design tokens
- **Framer Motion** for the hero reveal
- **Lucide React** for icons
- No backend. All content is local (`src/lib/fermor/`), all calculations run in the browser.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | ESLint (errors only) |
| `npm run lint:fix` | ESLint with autofix |
| `npm run typecheck` | `tsc` against `jsconfig.json` |

Run `npm run lint` and `npm run build` before committing.

## Project structure

```
src/
  App.jsx                  Routes + providers
  main.jsx                 Entry point
  index.css                Design tokens + component classes
  pages/
    Home.jsx               The single page; composes sections in order
  components/
    fermor/                All page sections and the shared brand pieces
    ui/                    shadcn/ui primitives (only lightly used)
    ScrollToTop.jsx        Resets scroll on route/hash change
  lib/
    fermor/
      config.js            Brand name, tagline, disclaimers, SIP assumptions
      calculations.js      Pure SIP/EMI math + slider bounds
      format.js            INR / lakh / crore formatting
      askFermorContent.js  The answer library
    query-client.js        React Query client
    PageNotFound.jsx       404
    utils.js               `cn()` classname helper
public/
  favicon.svg              Brand mark
  og.svg                   Social preview image
  robots.txt
vercel.json                SPA rewrites + build config
```

### Section order

`Home.jsx` composes, top to bottom:

1. `Navbar` — sticky forest header
2. `Hero` — headline, CTAs, device-framed `SipCalculator`, `SampleSnapshot`
3. `TrustStrip` — four trust tiles
4. `CalculatorCards` — question → tool shortcuts
5. `EmiCalculator` — loan cost calculator with year-by-year schedule
6. `ProductExplainer` — Understand / Compare / Act
7. `AskFermor` — searchable answer library
8. `Audience` — who it's for
9. `Learning` — editorial teasers into `AskFermor`
10. `FinalCta` — closing call to action
11. `Footer` + `StickyMobileCta`

## Design system

Tokens live in `src/index.css` under `--fm-*`. Tailwind exposes `lime`, `forest`, and
`paper` colour scales plus a `font-display` family.

| Token | Value | Use |
|---|---|---|
| `--fm-lime` | `#B9FF3C` | Primary accent, always with dark text on it |
| `--fm-dark` | `#0C2314` | Dark section background |
| `--fm-dark-deep` | `#0C2314` → `#071A0E` | Footer |
| `--fm-light` | `#F4F4F2` | Light section background |
| `--fm-surface` | `#FFFFFF` | Cards on light |
| `--fm-ink` | `#0A0A0A` | Text on light |
| `--fm-ink-soft` | `#5C6157` | Secondary text on light |
| `--fm-on-dark-soft` | `rgba(244,244,242,0.66)` | Secondary text on dark |

Type: **Poppins** (700/800) for display headings, **Inter** for body — both loaded from
Google Fonts in `index.html`.

Reusable classes (all in `@layer components`): `fm-section`, `fm-display`, `fm-eyebrow`,
`fm-lead`, `fm-btn` + `fm-btn-lime/dark/outline/outline-light`, `fm-card`,
`fm-card-dark`, `fm-card-feature`, `fm-tile`, `fm-chip`, `fm-tag`, `fm-note`,
`fm-track`, `fm-slider`, `fm-tabular`.

Prefer these over one-off hex values — the violet/blue tokens from the earlier design are gone.

## Calculator maths

`src/lib/fermor/calculations.js` holds pure, testable functions:

- `sipFutureValue(P, annualReturnPct, years)` — standard SIP future value.
- `emiCalc(principal, annualRatePct, years)` — reducing-balance EMI plus a
  year-by-year schedule.

The SIP projection assumes a flat **12%** annual return (`FERMOR.sipAssumedReturn` in
`config.js`). This is an estimate, not a projection — the disclaimer is rendered directly
beneath the result.

## Deploying to Vercel

`vercel.json` pins the framework, build command, output directory, and the SPA rewrite
so client-side routes don't 404 on a hard refresh.

```bash
npx vercel            # preview
npx vercel --prod     # production
```

Connect the GitHub repo in the Vercel dashboard for automatic deploys on push.

## Notes

- The `og.svg` preview image is SVG. Twitter and Facebook do not render SVG Open Graph
  images — replace it with a 1200×630 PNG before relying on link previews.
- Money formatting uses `Intl.NumberFormat("en-IN")` with lakh/crore compaction, so all
  amounts assume Indian numbering.