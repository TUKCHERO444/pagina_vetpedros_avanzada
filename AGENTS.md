# AGENTS.md

## Stack

- **Next.js 15** (App Router, JSX — no TypeScript)
- **React 19**
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin (no `tailwind.config` file — config lives in `app/globals.css` `@theme` block)
- **PostCSS** with `postcss.config.mjs`
- Fonts: Google Fonts via `<link>` in `layout.jsx` (Inter + Oswald), **not** `next/font`

## Commands

```bash
npm run dev      # next dev
npm run build    # next build
npm run start    # next start
npm run lint     # next lint
```

No test suite. No typecheck (plain JSX). No formatter config.

## Architecture

- **App Router** — all routes live under `app/`
- **Language:** Spanish (Peru) — all user-facing text, metadata, comments
- **Content site** for "VET PEDROS CHICLAYO" veterinary clinic

### Routes

| Path | File | Notes |
|------|------|-------|
| `/` | `app/page.jsx` | Homepage with hero, promos, services grid, CTA |
| `/nosotros` | `app/nosotros/page.jsx` | About page |
| `/servicios` | `app/servicios/page.jsx` | Services with modal detail view |
| `/productos` | `app/productos/page.jsx` | Product catalog / shop |
| `/contactanos` | `app/contactanos/page.jsx` | Contact form + map (client component) |

### Shared components (`app/components/`)

- `Header.jsx` — sticky nav, mobile drawer ("use client")
- `Footer.jsx`
- `Reveal.jsx` — IntersectionObserver scroll animation (stagger via `delay` prop)
- `ServicesSection.jsx`

### Data layer (`app/data/`)

- `servicios.jsx` — services catalog (shared by homepage + `/servicios`)
- `productos.jsx` — product catalog (10 items, images from Unsplash)

## Design tokens

Defined in `app/globals.css` `@theme` block — this is the **single source of truth** for colors and fonts. No separate Tailwind config.

Key token families:
- `primary-*` — blue (health/clinical emphasis)
- `red-*` — brand red (CTAs, badges, active nav)
- `brasa-*` / `sol-*` / `accent-*` — orange spectrum (gradients, hero backgrounds, header/footer surfaces)
- `ink` / `ink-medium` / `haze` — text
- `paper` / `surface` / `surface-soft` — backgrounds
- `night-*` — reserved for future dark mode (unused)

Design spec: `docs/design.md`

## Conventions

- **No `"use client"`** except in `Header.jsx` and `contactanos/page.jsx`
- `Reveal` component wraps most visible sections for scroll-in animation
- `lazy-section` CSS class for content-visibility optimization on major sections
- Images in `public/imgs/` for clinic photos; Unsplash URLs for products/stock photos
- Contact form uses `alert()` on submit (no backend)
- Products link to WhatsApp (`wa.me`) for ordering
- z-index stacking: header `z-[60]`, mobile drawer `z-[70]`, modal `z-[80]`

## Gotchas

- Tailwind v4 uses `@theme` in CSS instead of `tailwind.config.js` — if you need to add colors/fonts, edit `globals.css`, not a config file
- No lock on `package-lock.json` in `.gitignore` — it's committed
- `.next/` is gitignored
- The `docs/` folder contains text briefs and a CVE advisory doc — not source code
