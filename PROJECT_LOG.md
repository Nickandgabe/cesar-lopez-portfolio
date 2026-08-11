# Project Log — Cesar Lopez Portfolio

Living handoff doc. Read this first when picking the project back up.

## What this is

Next.js 16 (App Router, TypeScript) portfolio site for Cesar Lopez (Senior
Product Design Leader / Systems Architect). Design system is **"Deep Space &
Bioluminescence"**: a single committed dark world (void/charcoal grounds,
cyan + purple glow accents), sharp 8px-radius technical tokens, glass HUD
panels instead of filled cards. This superseded the earlier Material Design 3
token architecture entirely — there is no M3 left in the codebase.

**Homepage concept, current iteration:** a centered, cinematic hero — one
badge, one headline, one line of support copy, two CTAs ("View Work" →
`/work`, "Get in Touch" → `/#contact`) — over a full-bleed glowing particle
"energy ring" (`src/components/motion/energy-ring-canvas.tsx`). This
replaced two earlier, larger iterations that are worth knowing about if you
hit references to them in old commits/comments: (1) an "Engineering Console"
— asymmetrical sidebar + HUD-terminal chrome — and (2) a version of that
console where the WebGL field itself (shaped like a brain) was the primary
nav, with clickable project nodes and a camera-dolly reveal. Both were
scrapped after live user feedback ("poor, nothing impressive, 0 interactive,
plain horrible text") in favor of the current minimal, reference-matched
layout. Project browsing now lives on a plain `/work` index page
(`src/app/work/page.tsx`), not inside the 3D scene.

- Live at: **https://iamcesarlopez.com** (and `www.` variant) — both domain
  mappings are `Ready` with SSL provisioned. **Note: production is still
  running the old M3 build** — see "Uncommitted work" below, the console
  redesign has not been deployed yet.
- Cloud Run fallback URL: https://cesar-lopez-portfolio-284662609384.us-central1.run.app
- GitHub: https://github.com/Nickandgabe/cesar-lopez-portfolio (branch `main`)
- GCP project: `cesar-lopez-portfolio`, region `us-central1`

## Stack

- Next.js 16 App Router + TypeScript, Tailwind CSS v4 (`@theme inline` token system)
- Framer Motion for all animation + scroll choreography (pinned sections, sticky radiographs)
- React Three Fiber + `@react-three/postprocessing` for the WebGL layer (Neural Core particle field, per-project Logic Tree schematics)
- Fonts: **Roboto** (display/headlines) + **JetBrains Mono** (HUD/technical readouts), loaded via `next/font/google`
- `clsx`-only `cn()` utility — **no tailwind-merge**, so conflicting
  Tailwind classes passed via `className` are not override-safe. When a
  component needs a real toggle (e.g. padding, glass vs. solid), add an
  explicit boolean/variant prop instead of relying on class-string order.

## Design system reference

- Tokens (color roles, elevation/glow, shape, type scale, HUD readout scale): `src/app/globals.css`
- UI primitives: `src/components/ui/` (Button, Card, Chip, Fab)
- Homepage layout: `src/components/sections/hero.tsx` — single centered
  section, no sidebar/HUD chrome. Badge pill, headline, subtext, two CTAs,
  full-bleed decorative `EnergyRingCanvas` behind everything (`pointer-events`
  never need special-casing here since the ring isn't clickable — a big
  simplification vs. both earlier console iterations).
- Project browsing: `src/app/work/page.tsx` — plain index page, practice/R&D
  filter as local `useState` (not a shared context), reuses the card grid
  markup from the now-fully-dead `selected-works.tsx`. Case study pages
  themselves (`src/app/work/[slug]/page.tsx`) are unchanged.
- WebGL: `src/components/motion/energy-ring-canvas.tsx` — particle+filament
  torus/ring (260 points, k-nearest-neighbor edges for the woven-filament
  look), vertical 3-stop color gradient baked per-vertex from each point's Y
  position (red top → purple mid → blue bottom), rotates only around the Y
  axis so that gradient never drifts out of alignment as it turns.
  `EffectComposer` + `Bloom` (intensity 3.5, luminanceThreshold 0.1) — same
  tuned values that have proven stable in this scene; **do not raise
  point/line opacity or density without testing** — this exact combination
  of additive blending + Bloom has blacked out the whole canvas from HDR
  overflow three separate times in earlier iterations (see git history /
  earlier session notes if this recurs). Falls back to a static CSS
  conic-gradient blur on compact/touch viewports.
  `src/components/motion/logic-tree-canvas.tsx` — procedural branching
  schematic per case study, deterministically seeded from the project slug
  (unrelated to the hero visual, still used on case study pages).
- Case study template: `src/components/sections/case-study-template.tsx` —
  pinned-scroll-style layout: narrative (Problem/Approach/Outcome) in
  normal document flow on the left, "Radiograph" (Logic Tree + real media)
  `position: sticky` on the right, fading in/out as the reader scrolls past.
- Motion primitives: `src/components/motion/`
  - `pinned-section.tsx` — render-prop scroll-pin wrapper driving the Hero's
    HUD unfurl sequence; falls back to unpinned flow for reduced-motion/compact
  - `tilt-card.tsx` — 3D pointer-tilt + cursor-tracking glow (wraps Selected Works cards)
  - `magnetic.tsx` — spring-driven pointer-offset pull (CTAs, footer social icons)
  - `marquee.tsx` — **plain CSS** `@keyframes`, not Framer Motion — WAAPI
    animations don't respect `animation-play-state: paused`, so hover-pause
    required CSS instead
  - `cursor-spotlight.tsx` — pointer-following radial glow (hero background)
  - `kinetic-text.tsx` — word-by-word mount-time stagger reveal
  - `scroll-reveal-text.tsx` — word-by-word **scroll-scrubbed** opacity
    reveal, distinct from `reveal.tsx`'s one-shot viewport trigger (About
    paragraph)
  - `image-sequence-viewer.tsx` — drag-to-scrub 360°-illusion viewer built
    from a plain image sequence (no WebGL/3D model files needed) — falls
    back to a static `poster` image, then a gradient "Visual coming soon"
    placeholder if neither is set
  - `model-3d-viewer.tsx` — real `.glb` drag-to-orbit viewer (used by the Toyota case study)
  - `reveal.tsx` — fade-up on scroll into view (`whileInView`)
- Glassmorphism: `.hud-glass` utility class in `globals.css` (`color-mix` +
  `backdrop-filter: blur(16px) saturate(160%)`, 1px cyan hairline border).
  Applied to: navbar (once scrolled), HUD status bar, radiograph panels,
  footer social buttons, Selected Works category badges.
- Content model: `src/content/projects.ts` — `Project` type has optional
  `frames?: string[]` (ordered image-sequence URLs), `poster?: string`,
  `model3d?: string`, and `mode?: "practice" | "rd"`. **AT&T and
  Invited/Club Golf still have placeholder challenge/approach/outcome text
  and no frames/poster/model set; Toyota has real content, a `.glb` model,
  and a gallery** — see Pending below.

## Uncommitted work

The entire redesign (everything described above, across several iterations)
is sitting **uncommitted** on `main` as of this entry — `git status` shows a
large diff plus new untracked files (`energy-ring-canvas.tsx`,
`logic-tree-canvas.tsx`, `case-study-template.tsx`, `case-study-hero.tsx`,
`model-3d-viewer.tsx`, `prng.ts`, `src/app/work/page.tsx`, `public/images/`,
`public/models/`). This is real risk: nothing here is backed up beyond the
local working tree. **Do not push straight to `main`** without checking with
the user first — a push auto-deploys to production via the Cloud Build
trigger described below, and this hasn't been visually QA'd against a real
dev server yet. Recommend committing locally (or to a feature branch) as a
safety net even before that QA pass.

**Dead files** — superseded, left in place rather than deleted in case
content gets reused, but should not be imported from anywhere going forward:
`src/components/motion/neural-core-canvas.tsx` (old brain/node-menu WebGL,
replaced by `energy-ring-canvas.tsx`), `src/components/sections/selected-works.tsx`
(replaced by `src/app/work/page.tsx`), `src/lib/site-mode-context.tsx` (no
consumers left), `src/components/sections/narrative.tsx`,
`src/components/sections/value-props.tsx` (both unused since the "remove
everything below the hero" pivot, before the current hero rewrite).

## Deployment & CI/CD

As of today, pushes to `main` **auto-deploy** via Cloud Build:

1. GitHub repo connected to Cloud Build via a 2nd-gen connection
   (`cesar-lopez-portfolio-conn`, region `us-central1`), repo resource
   `cesar-lopez-portfolio-repo`.
2. Trigger `deploy-cesar-lopez-portfolio-main` fires on push matching
   branch `^main$`, runs `cloudbuild.yaml` (repo root):
   builds the `Dockerfile` image → pushes to Artifact Registry
   (`us-central1-docker.pkg.dev/cesar-lopez-portfolio/cloud-run-source-deploy`)
   → `gcloud run deploy` to the `cesar-lopez-portfolio` Cloud Run service.
3. Build runs as a **dedicated service account**, not the legacy Cloud
   Build default — 2nd-gen triggers reject the legacy
   `PROJECT_NUMBER@cloudbuild.gserviceaccount.com` for `build.service_account`.
   Created `portfolio-deploy@cesar-lopez-portfolio.iam.gserviceaccount.com`
   with: `roles/run.admin`, `roles/iam.serviceAccountUser`,
   `roles/artifactregistry.writer`, `roles/logging.logWriter`,
   `roles/cloudbuild.builds.builder`.
4. One extra one-time IAM grant was required for the GitHub connection
   itself: the Cloud Build service agent
   (`service-284662609384@gcp-sa-cloudbuild.iam.gserviceaccount.com`) needed
   `roles/secretmanager.admin` to store the GitHub OAuth token.

**To deploy manually if ever needed** (bypassing CI):
```bash
gcloud run deploy cesar-lopez-portfolio --source . --region=us-central1
```

**To check the CI/CD pipeline:**
```bash
gcloud builds triggers list --region=us-central1
gcloud builds list --region=us-central1 --limit=5
```

## Known constraints / lessons learned this project

- Windows/PowerShell environment. No `chromium-cli` and no `playwright`
  installed as a project or scratchpad dependency — verification screenshots
  are run ad hoc via `npx --yes -p playwright node <script>.mjs`.
- A "blank section" scare during redesign QA turned out to be a false
  alarm twice: once from full-page-screenshot downscaling making pale
  gradient placeholders blend into a white background, and once from a
  screenshot taken too early (500ms) right after a Turbopack hot-reload —
  give the dev server 1–1.5s after `networkidle` before screenshotting,
  especially right after a batch of file edits.
- `--md-primary` and friends are **hex** color values; `--shadow-color` is
  the one exception stored as bare HSL components
  (`228deg 12% 20%`) to support `hsl(var(--shadow-color)/alpha)` for
  elevation shadows. Glow/glass effects elsewhere need
  `color-mix(in srgb, var(--md-primary) 16%, transparent)`, not
  `hsl(var(--md-primary)/alpha)` — that pattern only works for the shadow variable.
- Declined to install a GitHub repo (`nextlevelbuilder/ui-ux-pro-max-skill`)
  the user asked about early on — inflated star/fork/issue ratio consistent
  with purchased stars, auto-deploying installer script. Went with
  21st.dev-inspired manual implementation + Framer Motion instead.

## Pending / open items

1. **Commit and QA the current redesign.** See "Uncommitted work" above —
   this is the top-priority item. Get it committed locally, run it through
   a real dev server (`npm run dev`) for a visual pass — check the energy
   ring renders (not a black canvas — see the Bloom warning above), check
   `/work` filters and links to case studies correctly, check the compact
   fallback on a narrow viewport — then decide with the user whether/when
   to push to `main`.
2. **Real project content.** User has PDFs (one per project) plus images,
   image sequences, and videos to share — planned to go in one at a time.
   Once received: replace placeholder `challenge` / `approach` / `outcome`
   text in `src/content/projects.ts`, and set `frames`/`poster` per project
   to light up `ImageSequenceViewer` (currently shows "Visual coming soon").
   Toyota already has real content + a `.glb` model; AT&T and Invited/Club
   Golf still need theirs. Video isn't supported by `ImageSequenceViewer`
   yet — would need a playback mode added if video assets arrive.
3. **No R&D ventures logged yet.** `R&D_MODE` in the new HUD toggle
   currently shows an empty state by design (see Design system reference
   above). Add entries with `mode: "rd"` in `projects.ts` once there's real
   product-venture content to show.
4. **Footer contact links are placeholders** — `mailto:hello@example.com`
   and a generic `https://www.linkedin.com` in `src/components/layout/footer.tsx`.
   Swap for real email + LinkedIn profile URL.
5. **GoDaddy API key** — was used for DNS record setup during domain
   migration. Should be revoked at developer.godaddy.com/keys now that DNS
   work is confirmed complete (reminded once already, not yet done as of
   this log).
6. **README.md is stale** — still describes the old Material Design 3
   system and the old manual `gcloud builds submit` deploy flow instead of
   the Deep Space/Console system and the actual CI/CD pipeline documented
   above. Worth a quick rewrite alongside the redesign commit.

## Start here tomorrow

- If picking up where this session left off: the homepage was rebuilt again
  as a centered cinematic hero (badge/headline/subtext/two CTAs over a
  glowing particle ring), replacing the earlier console/node-menu concept
  after direct negative user feedback on it. New `/work` index page added
  for project browsing. Code-complete but **not yet run against a live dev
  server for visual QA this session** — the user's local `npm run dev` had
  stopped responding when verification was attempted. Restart it, click
  through the homepage and `/work`, confirm the ring isn't a black canvas,
  then commit.
- If picking up content work: ask the user for the next PDF and which
  project it maps to.
- If picking up infra work: confirm the CI/CD trigger has fired cleanly on
  a real (non-manual) push at least once, then close out items 4–6 above.

---

## 2026-08-11 — Redesign retired, static site is now the permanent portfolio

The Next.js redesign documented above (and the "Products Hub" dashboard
feature added on top of it in late July) has been retired. The static site
under `CesarPortfolioWeb/` — originally spun up as a stopgap while this
redesign was paused — grew into a complete, real portfolio over the course
of that work (flagship case studies with live demos, an interactive 2D/3D
asset showcase, brand manuals, an interactive resume, password-gated areas)
and is now the permanent site. It has been live in production the whole
time; this change just makes the repo match that reality.

Both the Next.js app and the Products Hub dashboard are preserved exactly as
they were, untouched, on the `archive/nextjs-redesign` branch — nothing was
deleted outright. `main` no longer builds or deploys either.
