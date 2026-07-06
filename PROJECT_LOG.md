# Project Log — Cesar Lopez Portfolio

Living handoff doc. Read this first when picking the project back up.

## What this is

Next.js 16 (App Router, TypeScript) portfolio site for Cesar Lopez (Senior
Product Design Leader / Systems Architect). Design system is a custom
Material Design 3 token architecture — "Blueprint" indigo primary + warm
copper tertiary, not stock M3 Google colors.

- Live at: **https://iamcesarlopez.com** (and `www.` variant) — both domain
  mappings are `Ready` with SSL provisioned.
- Cloud Run fallback URL: https://cesar-lopez-portfolio-284662609384.us-central1.run.app
- GitHub: https://github.com/Nickandgabe/cesar-lopez-portfolio (branch `main`)
- GCP project: `cesar-lopez-portfolio`, region `us-central1`

## Stack

- Next.js 16 App Router + TypeScript, Tailwind CSS v4 (`@theme inline` token system)
- Framer Motion for all animation
- Fonts: **Roboto Serif** (display/headlines) + **Roboto Flex** (UI/body) —
  Google's own Material type family, loaded via `next/font/google`
- `clsx`-only `cn()` utility — **no tailwind-merge**, so conflicting
  Tailwind classes passed via `className` are not override-safe. When a
  component needs a real toggle (e.g. padding, glass vs. solid), add an
  explicit boolean/variant prop instead of relying on class-string order.

## Design system reference

- Tokens (color roles, elevation, shape, type scale): `src/app/globals.css`
- UI primitives: `src/components/ui/` (Button, Card, Chip, Fab)
- Motion primitives: `src/components/motion/`
  - `tilt-card.tsx` — 3D pointer-tilt + cursor-tracking glow (wraps Selected Works cards)
  - `magnetic.tsx` — spring-driven pointer-offset pull (CTAs, footer social icons)
  - `marquee.tsx` — **plain CSS** `@keyframes`, not Framer Motion — WAAPI
    animations don't respect `animation-play-state: paused`, so hover-pause
    required CSS instead
  - `cursor-spotlight.tsx` — pointer-following radial glow (hero background)
  - `kinetic-text.tsx` — word-by-word mount-time stagger reveal (hero H1)
  - `scroll-reveal-text.tsx` — word-by-word **scroll-scrubbed** opacity
    reveal, distinct from `reveal.tsx`'s one-shot viewport trigger (About
    paragraph)
  - `image-sequence-viewer.tsx` — drag-to-scrub 360°-illusion viewer built
    from a plain image sequence (no WebGL/3D model files needed) — falls
    back to a static `poster` image, then a gradient "Visual coming soon"
    placeholder if neither is set
  - `reveal.tsx` — fade-up on scroll into view (`whileInView`)
- Glassmorphism: `.glass` utility class in `globals.css` (`color-mix` +
  `backdrop-filter: blur + saturate`, theme-aware automatically). Applied to:
  navbar (once scrolled), hero chip, Selected Works category badges, footer
  social buttons.
- Content model: `src/content/projects.ts` — `Project` type has optional
  `frames?: string[]` (ordered image-sequence URLs) and `poster?: string`
  for future real imagery. **All three current projects (AT&T, Invited/Club
  Golf, Toyota) still have placeholder challenge/approach/outcome text and
  no frames/poster set** — see Pending below.

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

1. **Real project content.** User has PDFs (one per project) plus images,
   image sequences, and videos to share — planned to go in one at a time.
   Once received: replace placeholder `challenge` / `approach` / `outcome`
   text in `src/content/projects.ts`, and set `frames`/`poster` per project
   to light up `ImageSequenceViewer` (currently shows "Visual coming soon").
   Video isn't supported by `ImageSequenceViewer` yet — would need a
   playback mode added if video assets arrive.
2. **Footer contact links are placeholders** — `mailto:hello@example.com`
   and a generic `https://www.linkedin.com` in `src/components/layout/footer.tsx`.
   Swap for real email + LinkedIn profile URL.
3. **GoDaddy API key** — was used for DNS record setup during domain
   migration. Should be revoked at developer.godaddy.com/keys now that DNS
   work is confirmed complete (reminded once already, not yet done as of
   this log).
4. **README.md deploy section is stale** — still shows the old manual
   `gcloud builds submit` / generic `portfolio` service name flow instead
   of the actual CI/CD pipeline documented above. Worth a quick update.

## Start here tomorrow

- If picking up content work: ask the user for the next PDF and which
  project it maps to.
- If picking up infra work: confirm the CI/CD trigger has fired cleanly on
  a real (non-manual) push at least once, then close out items 2–4 above.
- If picking up design work: nothing currently queued — last thing shipped
  was Material typography + glassmorphism + expanded animation coverage
  (navbar scroll behavior, animated theme toggle, scroll-scrubbed narrative
  text, hover micro-interactions).
