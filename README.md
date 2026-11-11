# Fitkit — investors site

Static site for potential investors: about, team, roadmap + FAQ, products.

Frontend only. React + Vite + React Router. Mobile-first (most visitors come from a QR code).

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
```

## Pages

| Route       | What                                                         |
|-------------|--------------------------------------------------------------|
| `/`         | About (placeholder copy)                                     |
| `/team`     | Wide team photo, then one card per member                    |
| `/roadmap`  | Now / Next / Later, then FAQ (`/roadmap#faq`)                 |
| `/products` | Two screens: extension (“Open in store”), app (“Join waitlist”) |

LinkedIn in the nav opens https://www.linkedin.com/company/fitkitcommerce/ in a new tab.

## Content

All text, links and images are in `src/content.js`. Images go into `public/`;
set `src` (e.g. `"/team.jpg"`). While `src` is `null` a labelled placeholder
box is shown.

Store, waitlist and LinkedIn links live in `LINKS` in `src/content.js`.
Optional build-time env var: `VITE_CONTACT_URL` for the footer “Contact us”
(or set `LINKS.contact` directly).

## Deploy (Vercel)

Import the repo in Vercel (Root Directory stays empty). Framework preset Vite is detected automatically (build `npm run build`,
output `dist`). No env vars are required.

`vercel.json` rewrites every path to `/index.html`, so direct links such as
`/team` work. Real files (JS, CSS, images) are served before the rewrite.

## For brands (`/for-brands`)

FitKit's brand landing, moved in from `fitkit-infra/fitkit-landing` with its
original TypeScript pages and components. Everything lives in
`src/features/fitkit/`, assets in `public/fitkit/`.

| Route | Page |
| --- | --- |
| `/for-brands` | Landing (the scroll story) |
| `/for-brands/creators` | How listing works; where "List your brand" leads |
| `/for-brands/policies` | Privacy policy of the browser extension |

- Loaded lazily from `src/App.jsx`: the main pages never download it.
- Has its own top bar and footer; "Main page" in its bar goes back to `/`.
- Its styles are scoped to the `.fk` wrapper, and the main site's resets skip
  `.fk`, so neither side affects the other.
- `npm run typecheck` checks the TypeScript part; `npm run build` runs it too.
- The Roadmap page of the original landing was dropped.

## Theme

Light / dark for the whole site: the Theme button (main header and the
FitKit bar) sets `<html data-theme="dark">` and remembers the choice in
`localStorage` (`fitkit-theme`). Without a saved choice the system setting is
used. `index.html` applies it before first paint.

## Style notes

- Headings: Newsreader (Google Fonts). Body: SF on Apple devices, Helvetica fallback.
- White background, #111 text and lines, `border-radius: 0` everywhere, no animations.
- Checked at 320, 390 and 1280 px wide with no horizontal scroll.
