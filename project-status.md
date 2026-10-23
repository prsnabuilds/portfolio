# Project Status — Prasanna's Portfolio

> Living log of the project. Maintained across working sessions.
> Last updated: 2026-10-23

## What this project is

A personal portfolio website for **Prasanna Narayanan**, designed and built
entirely in code. The owner designs nothing further in Figma — the agent
(agent = Claude in OpenCode) owns the visual design going forward, following
the direction established by the hero frame the owner mocked up in Figma.

**Design direction** (established by the owner's Figma hero, node `52:1493`):

- White background, minimal; ink `#191919`, soft text `#4c4c4c`
- Playful black face/blob avatar logo (roughened star "hair" + round head + light eyes)
- Display font **ZT Bros Oskon 90s** for headings (italic for the name emphasis)
- Body font **Britti Sans Trial** (Light 300 / Regular 400)
- Pill-shaped components: pill nav with white active chip, pill trays
- **Single narrow centered column (460px max)** — deliberately not a wide desktop layout
- **Tab-switched single-page app**: Works / Services / About / Contact in the pill
  nav swap the content below the nav (no scrolled sections, no anchor jumps)
- No top navbar (name + Let's Talk removed by design)
- "Let's Talk" lives on the Contact tab (email tray with dark CTA)

**Anchor:** `https://prsana.com` (owner's own domain, in their Cloudflare)

## Stack & architecture

| Piece | Choice |
| --- | --- |
| Framework | React 19 + Vite 7 (fully static output, Cloudflare-friendly) |
| Styling | Hand-rolled CSS, single `src/styles.css`, design tokens in `:root` |
| Fonts | Self-hosted woff2 in `public/fonts` via `@font-face` (14 files) |
| Site copy | All in `src/content.js` — edit text without touching layout |
| Hosting | Cloudflare (Pages — which is now part of Workers), deployed via `wrangler deploy` |
| CI/CD | GitHub Actions: push to `main` → build → deploy (workflow `.github/workflows/deploy.yml`) |
| Repo | `github.com/prsnabuilds/portfolio` (branch `main`) |
| Config | `wrangler.jsonc` declares the worker + `prsana.com` custom domain |

URLs:

- Production: `https://prasanna-portfolio.prasanna-portfolio.workers.dev` (live ✓)
- Custom domain: `https://prsana.com` — **see status below**
- Every push to `main` in GitHub redeploys automatically

## Project log

### Phase 1 — Design handoff (Figma → code)

1. Connected the official Figma MCP server (`https://mcp.figma.com/mcp`) to
   OpenCode; added to project config `opencode.json`; owner authenticated
   through `/mcps`.
2. Owner shared the hero design link (frame `MacBook Air - 5`, node `52:1493`,
   file key `VOE8wwbORyVjCavvFU6Cz0`).
3. Built the hero as static HTML/CSS/JS first (index.html + styles.css):
   - Extracted the exact tokens/colors/layout numbers from the Figma node
   - Recomposed the face avatar from its 4 assets at percentage offsets
   - Downloaded the 5 assets; **closest-font placeholders** (Instrument Serif
     for Oskon, Inter for Britti) pending real font files
4. Verified geometry in the browser against the design (logo top y=160,
   heading y=231.7, pill nav y=368, card 395px wide — all matched).

### Phase 2 — Full site build in React (Vite)

1. Owner decided: the rest of the site is designed in code by the agent; the
   Figma file (`node 38:170`, "MacBook Air - 4") is a **content source only**.
2. Framework decision: React + **Vite** for Cloudflare Pages hosting
   (Next.js was avoided — not the friendliest for Cloudflare).
3. Restructured the project into a Vite React app:
   - `src/components/` — `Face`, `PillNav` (later also router-driven),
     (TopBar existed, then removed)
   - `src/sections/` — Works, Services (incl. process), About, Contact, Footer
   - `src/content.js` — all copy centralized
   - `public/assets/` — Figma assets (project thumbnail, about portrait, 4
     process icons, logo layers)
4. Content extracted from Figma `38:170`:
   - Projects: Edtech migration; AI-first commodity trade platform; PG
     management system (title + desc + tags each)
   - Services: xxx3 numbered offerings with tag chips
   - Process: Understand / Design / Build / Launch and Refine (icons fetched)
   - About: "How I Got Here" five years story + portrait
   - Contact: "Got a Site or Product to Fix, Launch, or Grow?"
5. Owner supplied the real font files (14 woff2: Britti Sans Light/Regular/
   Semibold/Bold + italics; ZT Bros Oskon ExtraLight/Light/Regular + italics).
   Copied into `public/fonts`; `@font-face` wired and verified loaded (14/14
   faces, zero errors).

### Phase 3 — Repo + hosting

1. GitHub repo created with a PAT: **prsnabuilds/portfolio** (public).
2. Cloudflare Pages project created and deployed via wrangler
   (`prasanna-portfolio`), live on the workers.dev URL.
3. GitHub Actions auto-deploy pipeline set up; Cloudflare API token + account
   ID stored as **encrypted** GitHub repo secrets (`CF_API_TOKEN`,
   `CF_ACCOUNT_ID`). Verified: dispatch run completed "success".
4. GitHub local push quirk: macOS keychain holds a credential for a different
   GitHub account (`levelupadmin`) and hijacked pushes; fixed per-repo with
   `credential.helper=""` (local config). Pushes from this folder prompt for
   the owner's own credentials; agent pushes use the PAT inline, never stored.

### Phase 4 — Major direction revision (layout rework)

Owner's revision (three-plus-one points):

1. Not regular stacked-scrolling sections / anchor navigation — tab-switched
   single views instead.
2. Hero content (face, heading, sub) sits above the pill menu; narrow column:
   no more than ~500-600px, down to ~400px is fine.
3. Remove the top navbar (name + Let's Talk). Selecting a menu shows only that
   section's content below the nav.
4. The face avatar was rendering broken; owner suspected layering issues
   (hair layer vs round-blob layer are separate assets).

What was done:

1. Rebuilt the app as **hash-routed tabs** (`#works` default, `#services`,
   `#about`, `#contact`): only the active tab's content renders, scroll resets
   on switch, quick fade-slide transition, back/forward buttons work.
2. All content constrained to a **460px centered column**; pill nav is sticky
   (top: 16px) so switching is possible mid-scroll.
3. Top bar deleted; "Let's Talk" moved to the Contact tab's email tray;
   footer reduced to a centered brand + email row.
4. Root cause of the broken face found: the face stylesheet had been written
   to `src/styles/face.css` during the Vite restructure but **no file imported
   it** — the logo rendered unstyled. Merged back into `src/styles.css`
   (single stylesheet policy now) and corrected the head/vector wrapper to
   Figma's exact inset structure.
5. Verified all four tabs swap content correctly, geometry restored
   (face 44x48px, hero column exactly 460px), zero console errors. Deployed.

### Phase 5 — Custom domain connection

1. Owner says the site is connected to their domain **prsana.com** in
   Cloudflare (zone active — confirmed via API).
2. `wrangler.jsonc` updated to declare the custom domain route
   (`"pattern": "prsana.com", "custom_domain": true`); committed and verified
   CI deploys happily with it.
3. **Current blocker:** token-based domain attachment is refused by both the
   Cloudflare API and wrangler (`method not allowed for this authentication
   scheme`), so DNS + binding must be created by the owner once in the
   dashboard: Workers & Pages → prasanna-portfolio → Settings →
   **Domains & Routes** → Add Custom domain → `prsana.com`.
4. Current observed state: `prsana.com` resolves to nothing yet
   (workers.dev live ✓).

## Current status checklist

| Item | Status |
| --- | --- |
| Hero (per Figma frame 52:1493) | ✅ live |
| Tab navigation (Works / Services / About / Contact) | ✅ live |
| Works tab — 3 project cards | ✅ (2 of 3 project images are placeholders) |
| Services tab — 3 offerings | ✅ |
| Process block (within Services tab) | ✅ |
| About tab — portrait + story | ✅ |
| Contact tab — email pill + Let's Talk | ✅ |
| Fonts (real Britti Sans + ZT Bros Oskon 90s) | ✅ loaded, 14/14 faces |
| Cloudflare hosting + workers.dev URL | ✅ |
| GitHub repo + auto-deploy on push | ✅ |
| `prsana.com` custom domain | ⏳ owner must click "Add Custom domain" in dashboard; binding already declared in `wrangler.jsonc` |
| Project #2 and #3 screenshots (thumbnails shown as "Screenshot coming soon") | ⏳ awaiting images from owner |

## Pending / open items

- [ ] Owner: attach `prsana.com` in Cloudflare dashboard → agent verifies live domain.
- [ ] Owner: send screenshots for project 2 (AI trading platform) and project
      3 (PG management system) to replace placeholder panels (or Figma links).
- [ ] **Rotate both leaked credentials** — the GitHub PAT and the Cloudflare
      API token were pasted into chat, so treat them as exposed. When the
      Cloudflare token is replaced, the CI secret `CF_API_TOKEN` must be
      re-sealed with the new token.
- [ ] Face avatar: if the owner still sees glitchy rendering after the fix,
      they will supply one flattened file (SVG/PNG) to drop in.
- [ ] Visual design QA round on all tabs (owner hasn't reviewed the full rework
      visually yet beyond layout acceptance of the hero early on).

## Design decisions & conventions (for future agent sessions)

- **One stylesheet** (`src/styles.css`): tokens at top (`:root`), then
  sections. Never split into partial files without importing — that is how
  the face broke.
- **All copy in `src/content.js`.** Push revised wording there, not JSX.
- Colors must stay within the token set: `#191919`, `#4c4c4c`, `#f4f4f4`,
  `#eaeaea`, `#e4e4e4`, white.
- Fonts: `--font-display` (Oskon 90s) for big headings; `--font-body`
  (Britti Sans) everywhere else. Heading name emphasis = italic.
- Everything sits in one 460px column; pills, trays and cards express the
  visual language; dividers are `#e4e4e4` 1px.
- The site is a static SPA — deploy target assumes zero runtime (Workers
  static assets).
- Email on site: `hi@prsana.com` — intentional (the domain IS prsana.com,
  the address is not a typo of "prasanna").
- Asset pipeline: Figma nodes are pulled through the Figma MCP
  (`get_design_context` / `get_screenshot`), downloaded to `public/assets`,
  and referenced locally — never hot-linked to figma.com URLs.
- Working Figma file: file key `VOE8wwbORyVjCavvFU6Cz0`; hero node `52:1493`;
  content plan node `38:170`.
