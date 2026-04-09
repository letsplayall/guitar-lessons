# CLAUDE.md — Let's Play All Guitar Site

## Project Overview
Astro 6.1.3 static site for a guitar lessons brand focused on grunge/alt-rock.
- **Live site:** letsplayallguitar.com
- **GitHub:** https://github.com/letsplayall
- **Deployed via:** GitHub Actions on push to `main` branch

## Dev Server
```
npx astro dev          # localhost:4321 (or 4322 if port taken)
npx astro dev --host   # expose on LAN for mobile testing
```
Do NOT use `node serve.mjs` — that is for plain HTML projects only.

## Screenshot URL
Use `http://localhost:4321` (not 3000) when screenshotting this project.

## Output Format
This is a **multi-page Astro site** — NOT a single index.html. Edit `.astro` files in `src/`. Do not inline all styles into one file.

## Git Workflow
```
# Work on dev branch, merge to main to deploy
git checkout dev
# make changes, then:
git add <specific files>
git commit -m "message"
git checkout main
git merge dev
git push origin main   # triggers GitHub Actions deploy
```
- No need to stop the dev server to run git commands
- No need to pull before adding (dev is local only)
- Pushing to main triggers a live deploy — confirm with user before doing so

## Key Files
- `src/layouts/BaseLayout.astro` — global nav, footer, CSS tokens, fonts
- `src/pages/index.astro` — home page
- `src/pages/lessons/index.astro` — lessons browser with sidebar + mobile filters
- `src/pages/tone/index.astro` — tone/pedal settings page with band filter bar
- `src/data/site-data.js` — all site content (bands, lessons, tone settings, SITE config)
- `src/components/PedalDiagram.astro` — SVG pedal knob renderer
- `.github/workflows/deploy.yml` — CI/CD pipeline (requires Node 22)
- `public/CNAME` — custom domain (`letsplayallguitar.com`) — do not delete

## Design Tokens
Defined in `BaseLayout.astro` as CSS custom properties:
```css
--red: #f9c231          /* brand gold — used for accents, active states */
--red-dark: #d4a01a
--bg: #0a0a0a
--surface: #111111
--surface2: #1a1a1a
--surface3: #222222
--border: rgba(255,255,255,0.07)
--border2: rgba(255,255,255,0.12)
--text: #ffffff
--muted: #6b6b6b
--muted2: #a0a0a0
--font-display: 'Bebas Neue'
--font-body: 'Barlow'
--font-mono: 'IBM Plex Mono'
```
Nav height: `80px`. All sticky elements use `top: 80px` offset.

## Site Structure & Current State
- **Nav:** Home, Lessons, Tones, YouTube (hidden mobile), Patreon (hidden mobile) — no CTA button
- **Lessons page:** Sidebar with unified A-Z + Coverage sort across all bands; mobile-only dropdown filter; stats row and header action buttons hidden on mobile
- **Tone page:** Horizontal sticky band filter bar (desktop + mobile); pedal diagrams per song
- **Sections marked WIP:** Tone Settings page label, Gear Used collab section on home page

## Sticky Scroll Offset Pattern
When scrolling to a target element that sits below sticky nav + filter bars, use:
```js
const navHeight = document.querySelector('.site-nav-wrap')?.offsetHeight ?? 80;
const filterHeight = document.querySelector('.some-filter-bar')?.offsetHeight ?? 0;
const offset = target.getBoundingClientRect().top + window.scrollY - navHeight - filterHeight - 12;
window.scrollTo({ top: offset, behavior: 'smooth' });
```

## Mobile Breakpoints
- `max-width: 640px` — nav hide, song-row stack
- `max-width: 768px` — lessons sidebar/main layout switch
