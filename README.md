# Active Ingredient

A one-page site for **Active Ingredient** — a growth partner for wellness retreat hosts and spiritual coaches. Built as a static, zero-backend Next.js app that deploys to Vercel with no configuration.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Requires Node.js 18.18+ (Vercel uses Node 22 by default).

---

## The three placeholders

All editable details live in one file: **`lib/site.ts`**.

```ts
export const BOOKING_URL = "https://cal.com/BOOKING_URL";              // TODO
export const EMAIL = "EMAIL_PLACEHOLDER";                              // TODO
export const INSTAGRAM_URL = "https://instagram.com/INSTAGRAM_PLACEHOLDER"; // TODO
export const SITE_URL = "https://activeingredient.site";               // update after deploy
```

| Placeholder | Where it appears |
| --- | --- |
| `BOOKING_URL` | Header "Book a meeting", hero, services, closing section |
| `EMAIL` | Footer `mailto:` link (and its visible label) |
| `INSTAGRAM_URL` | Footer "Instagram" link |
| `SITE_URL` | Canonical URL, Open Graph URL, `sitemap.xml`, `robots.txt` |

Every "Book a meeting" button opens the booking URL in a new tab. No other configuration is required — there are no environment variables, no database and no API routes.

---

## Structure

```
active-ingredient/
├── app/
│   ├── layout.tsx            # metadata, font preloads, html shell
│   ├── page.tsx              # page composition + JSON-LD
│   ├── globals.css           # design tokens, @font-face, motion, utilities
│   ├── robots.ts             # /robots.txt
│   ├── sitemap.ts            # /sitemap.xml
│   ├── icon.png              # favicon (mandala mark on espresso)
│   ├── apple-icon.png
│   └── favicon.ico
├── components/
│   ├── sections/
│   │   ├── hero.tsx          # gradient hero: wordmark, flock, branch, sun
│   │   ├── the-problem.tsx   # editorial serif statement
│   │   ├── what-we-do.tsx    # six offerings + closing line
│   │   ├── process.tsx       # four steps on a hairline
│   │   ├── services.tsx      # Foundations / The Fill Campaign / Always-On
│   │   ├── audience.tsx      # who we serve (id="about")
│   │   └── cta-band.tsx      # "SO..." espresso section + gulls
│   ├── site-header.tsx       # announcement bar, sticky nav, mobile menu
│   ├── site-footer.tsx       # contact (id="contact"), Instagram, email
│   ├── illustrations.tsx     # SVG flock, branch, gulls, bird mark
│   ├── icons.tsx             # line icons and petal mark
│   ├── ornaments.tsx         # mandala mark / watermark, sun, divider
│   ├── book-button.tsx       # the pill CTA in three tones
│   ├── section-label.tsx
│   └── reveal.tsx            # fade-up on first view (progressive enhancement)
├── lib/
│   ├── site.ts               # ← placeholders live here
│   └── utils.ts
├── public/
│   ├── brand/                # mandala artwork (ink + cream, 160px / 512px)
│   ├── fonts/                # self-hosted Instrument Sans + Newsreader
│   └── og.png                # 1200×630 Open Graph card
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Design system

**Palette** (`app/globals.css` + `tailwind.config.ts`)

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#FAF7F2` | main background |
| `cream` | `#F2ECE1` | alternating sections |
| `ink` | `#241A12` | text and line work |
| `muted` | `#5E5145` | secondary copy |
| `espresso` | `#2B1709` | dark sections, buttons, sun |
| `espresso-deep` | `#1C0E05` | footer |
| `hairline` | `rgba(43,23,9,.16)` | 1px rules and card borders |

**Type**

- Headings and body: **Instrument Sans** (variable, 400–700), wide tracking on labels.
- Editorial statements, article titles and italic taglines: **Newsreader** Light (variable), set tight.
- Both are self-hosted from `public/fonts`, preloaded, with `font-display: swap`.

**Motion**

- Hero birds drift on three very slow loops (26s / 34s / 48s); the sun breathes over 18s.
- Sections fade up 22px once, on first view, via `IntersectionObserver`.
- `prefers-reduced-motion: reduce` disables every animation and transition, and settles all reveals instantly.
- No JavaScript is required for content to be visible (there is a `<noscript>` fallback that reveals everything).

---

## Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section` (each labelled), `footer`.
- Skip-to-content link, visible focus rings on light and dark surfaces.
- All decorative SVG and artwork is `aria-hidden`; the logo link has an accessible name.
- Text/background pairs pass WCAG AA — verified with axe-core at 390, 768, 1440 and 1920px (0 violations).
- Mobile menu: `aria-expanded`, `aria-controls`, Escape to close, scroll lock.
- Smooth scrolling is CSS-only and disabled under reduced motion.

---

## Deploy to Vercel

**Option A — GitHub + dashboard (recommended)**

1. Create a new repository and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Active Ingredient site"
   git branch -M main
   git remote add origin https://github.com/<you>/active-ingredient.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects **Next.js** automatically. Leave the defaults:
   - Framework preset: **Next.js**
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`
4. Press **Deploy**. Every push to `main` redeploys.
5. Add the custom domain under **Settings → Domains**, then update `SITE_URL` in `lib/site.ts` and push again so canonical and Open Graph URLs match.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

No environment variables, build settings or server configuration are needed.

---

## Before launch

- [ ] Replace `BOOKING_URL`, `EMAIL`, `INSTAGRAM_URL` in `lib/site.ts`.
- [ ] Replace `SITE_URL` with the live domain.
- [ ] Check the email link's visible label (it currently reads `EMAIL_PLACEHOLDER` by design).
- [ ] Optional: swap `public/og.png` with a new 1200×630 export if the wordmark changes.

---

## Notes

- No prices, statistics or testimonials appear anywhere on the site.
- There is no backend, no database, no login and no third-party tracking.
- The only external links are the booking URL and Instagram; both are placeholders.
