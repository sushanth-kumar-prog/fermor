# Fermor

Understand and compare money decisions. A single page React app with a working SIP
calculator, a working EMI calculator, and a searchable library of plain language answers.
No sign up, no backend, no tracking.

## Stack

- **React 18** + **Vite 8**
- **React Router 6** (`BrowserRouter`)
- **Tailwind CSS 3** with a small set of Fermor design tokens
- **Framer Motion** for the hero reveal only
- **Lucide React** for icons
- No backend. All content is local (`src/lib/fermor/`), all arithmetic runs in the browser.

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
  index.css                Design tokens + shared component classes
  pages/
    Home.jsx               The only page; composes sections in order
  components/
    fermor/                Every section plus the shared brand pieces
    ui/                    shadcn/ui primitives, barely used
    ScrollToTop.jsx        Resets scroll on route or hash change
  lib/
    fermor/
      config.js            Brand name, tagline, disclaimers, SIP assumptions
      calculations.js      Pure SIP and EMI maths, plus slider bounds
      format.js            INR formatting with lakh and crore compaction
      askFermorContent.js  The answer library
    query-client.js        React Query client
    PageNotFound.jsx       404
    utils.js               cn() classname helper
public/
  favicon.svg  og.svg  robots.txt
vercel.json                SPA rewrites + build config
```

### Section order

`Home.jsx` composes, top to bottom:

| # | Component | Section |
|---|---|---|
| 1 | `Navbar` | Sticky forest header |
| 2 | `Hero` + `HeroArt` + `TrustStrip` | Oversized headline, SVG dashboard, action row, trust bar |
| 3 | `Stats` | Four stat tiles, one of them lime |
| 4 | `CalculatorCards` | Four question to tool shortcuts, first one lime |
| 5 | `DarkCta` | Forest CTA with headline, button, tags, donut illustration |
| 6 | `Integrations` | Scattered chips for the accounts people already hold |
| 7 | `FeatureCarousel` | Horizontally scrolling carousel of the three live tools |
| 8 | `ProductExplainer` | Understand, Compare, Act |
| 9 | `Audience` | Three personas plus three reads, as a 3 by 2 grid |
| 10 | `AskFermor` | Searchable accordion of every answer |
| 11 | `Footer` | Closing headline, buttons, oversized wordmark |
| 12 | `StickyMobileCta` | Mobile only |

`SipCalculator`, `EmiCalculator` and `SampleSnapshot` are card bodies rendered inside
`FeatureCarousel`, not sections of their own.

## Brand

The mark is a two tone ring around an ascending bar chart, with a trend arrow and a rupee
sign. It is drawn as inline SVG, not an image file, so it stays sharp at any size and
colours itself to whatever it sits on.

`src/components/fermor/Logo.jsx` exports:

- `LogoMark` — the mark alone, takes `size` and `tone`
- `Logo` — the mark plus the wordmark, the default export

`tone` is what keeps it legible on both planes:

| `tone` | Used on | Dark half renders as |
|---|---|---|
| `"dark"` | light backgrounds | `#0C2314` forest |
| `"light"` | forest sections, so navbar and footer | `#F4F4F2` |

The lime half is always `#B9FF3C`. If you change the accent in `index.css`, update the
`LIME` constant in `Logo.jsx` to match.

Two static copies exist for places a React component will not render:

| File | Purpose |
|---|---|
| `public/favicon.svg` | Simplified to ring and bars only, since the arrow and rupee are illegible below 16px. Sits on a forest tile so it holds contrast on light browser chrome. |
| `public/og.svg` | Social preview card, mark plus headline |

**Before going further on the identity:** the reference artwork this mark was drawn from
was a watermarked Shutterstock file (ID 2476228421). A vector interpretation was built
instead, which is what is committed. If you want the original artwork rather than this
interpretation, you will need to purchase a licence and it will need redrawing as vector
anyway, so the mark would still differ from the raster.

## Design system

Tokens live in `src/index.css` under `--fm-*`. Tailwind exposes `lime`, `forest` and
`paper` colour scales plus a `font-display` family.

| Token | Value | Use |
|---|---|---|
| `--fm-lime` | `#B9FF3C` | The only accent, always with dark text on it |
| `--fm-dark` | `#0C2314` | Dark section background |
| `--fm-dark-deep` | `#071A0E` | Footer |
| `--fm-light` | `#F4F4F2` | Light section background |
| `--fm-surface` | `#FFFFFF` | Cards on light |
| `--fm-ink` | `#0A0A0A` | Text on light |
| `--fm-ink-soft` | `#5C6157` | Secondary text on light |
| `--fm-on-dark-soft` | `rgba(244,244,242,0.66)` | Secondary text on dark |

Type is **Plus Jakarta Sans** (800 for display, 500 to 700 elsewhere) over **Inter** for
body, both from Google Fonts.

Shared classes, all in `@layer components`:

`fm-section`, `fm-mega`, `fm-display`, `fm-display-sm`, `fm-eyebrow`, `fm-eyebrow-light`,
`fm-lead`, `fm-tabular`, `fm-divider`, `fm-divider-dark`

`fm-btn`, `fm-btn-lime`, `fm-btn-dark`, `fm-btn-outline`, `fm-btn-outline-light`, `fm-btn-sm`

`fm-card`, `fm-card-hover`, `fm-card-dark`, `fm-card-feature`, `fm-tile`, `fm-tile-flat`,
`fm-tile-accent`

`fm-chip`, `fm-chip-active`, `fm-tag`, `fm-note`, `fm-note-dark`, `fm-track`,
`fm-track-dark`, `fm-fill-lime`, `fm-fill-dark`

`fm-scroll-x` (carousel track), `fm-faq-row`, `fm-faq-head`, `fm-faq-body`, `fm-faq-open`,
`fm-cloud`, `fm-cloud-item`, `fm-slider`, `fm-focus`, `fm-svg-display`

Prefer these over new hex literals.

## Copy style

Two rules the content follows, both enforced by hand:

- **No em dashes and no hyphenated words** anywhere in user facing copy. Ranges such as
  "3 to 6 months" are spelled out rather than written with a dash.
- **Dry, not cute.** The answers are genuinely educational and the maths is unchanged, but
  the voice is allowed to be funny. Nothing is fabricated, including testimonials, which
  is why the reference's testimonial block is presented as personas instead.

## Calculator maths

`src/lib/fermor/calculations.js` holds pure, testable functions:

- `sipFutureValue(P, annualReturnPct, years)` for standard SIP future value
- `emiCalc(principal, annualRatePct, years)` for reducing balance EMI, returning a year by
  year schedule alongside the totals

The SIP projection assumes a flat **12%** annual return, set as `FERMOR.sipAssumedReturn`
in `config.js`. It is rendered with its disclaimer directly beneath it.

## Accessibility

Lighthouse scores 100 for accessibility, best practices and SEO. Current baseline to keep:

- The oversized footer wordmark is `aria-hidden` but still needs 3:1 contrast, so its
  opacity is floored at `rgba(244,244,242,0.36)` against the forest. Lower looks nicer and
  fails the audit.
- Every interactive control has a 24px or larger hit area, including the carousel dots.
- `prefers-reduced-motion` is honoured globally in `index.css` and short circuits the
  number tweening in `SipCalculator`.

## Deploying to Vercel

`vercel.json` pins the framework, build command, output directory and the SPA rewrite so
client side routes survive a hard refresh.

```bash
npx vercel            # preview
npx vercel --prod     # production
```

Importing the GitHub repo in the Vercel dashboard gives automatic deploys on push.

### Current deployment

| | |
|---|---|
| Production URL | https://fermor-tan.vercel.app |
| Project | `fermor` (`prj_wCrGC0mwikx2Kyrq2k0P0S6Olvsu`) |
| Scope | `sushanth-kumar-progs-projects`, hobby plan |
| Linked by | `.vercel/project.json`, which is gitignored |

The project is already connected to this account, so `vercel --prod` from the project root
redeploys without any further linking. To get automatic deploys on push, import the repo in
the Vercel dashboard and set the production branch to `master`.

### On Windows

PowerShell blocks the `vercel.ps1` shim under the default execution policy, so use
`vercel.cmd` or `npx vercel` rather than bare `vercel`.

## Notes

- `public/og.svg` is SVG. Twitter and Facebook do not render SVG Open Graph images, so
  replace it with a 1200 by 630 PNG before relying on link previews.
- `robots.txt` deliberately omits a `Sitemap:` line. Add one with the absolute production
  URL once the domain is known, because the spec rejects relative sitemap paths.
- Money formatting uses `Intl.NumberFormat("en-IN")` with lakh and crore compaction, so
  every amount assumes Indian numbering.