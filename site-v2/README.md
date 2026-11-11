# site-v2 — iamcesarlopez.com redesign

Astro + TypeScript + Tailwind CSS, static output, served by nginx on Cloud Run.
Built from the approved comp in `../design-handoff/index.html`.

## Run it

```bash
cd site-v2
npm install
npm run dev        # http://localhost:4321, live reload
npm run build      # type-check + build to dist/
npm run preview    # serve dist/ locally
```

## Edit the content

Every word, number and image choice lives in **`src/content.ts`**. Components only render it.

- **Hero:** `hero.headline`, `hero.body`, `hero.stats` (the count-up numbers).
- **Metrics band:** `metrics` — `value` is the counted number, `prefix`/`suffix` wrap it (`~`, `+`, `×`, `%`, `M`).
- **Cases:** `work.cases`. When a case page exists, set its `href` (e.g. `'/work/customer-connect'`); while it is `null` the page shows `work.pendingLabel` instead of a broken link.
- **Leadership:** `leadership.chapters`.
- **3D strip:** `range.items` and `range.turntable` (frames live in `public/turntables/supra/`).
- **Contact:** `closing.primary` is still `[Email Cesar]` → set `label` and `href: 'mailto:…'`.
- **Résumé link:** `nav.resume.href`.

Text in `[brackets]` is a deliberate visible placeholder.

To swap an image: put the new file in `src/assets/`, change the import at the top of `content.ts`, and update its `alt`. Astro makes the WebP sizes at build time.

## Swap the hero image for a video

1. Export a short, seamless loop (H.264 MP4, and optionally WebM). Aim for under ~4 MB, 1920×1080 or smaller, no audio track.
2. Put the files in `public/video/`, e.g. `public/video/hero.mp4` and `hero.webm`.
3. In `src/content.ts` set:
   ```ts
   video: { mp4: '/video/hero.mp4', webm: '/video/hero.webm' },
   ```
4. Optionally replace `src/assets/hero-concept.png` with the video's first frame, so the poster matches the first frame of the video.

The video is muted, looped and inline. It starts only when the visitor hasn't asked for reduced motion; otherwise they see the poster image. The image is still the first thing that paints, so load speed holds.

## Deploy

### Preview (safe — separate service)

```bash
cd site-v2
gcloud run deploy cesar-lopez-portfolio-v2 --source . --region=us-central1 --project=cesar-lopez-portfolio --allow-unauthenticated
```

The `*.run.app` URL sends `X-Robots-Tag: noindex`, so the preview stays out of Google.

**Never** deploy this folder as `cesar-lopez-portfolio`; that is the live site.

### Production cutover (when ready)

1. Clear the open items below.
2. Point `www.iamcesarlopez.com` at the `cesar-lopez-portfolio-v2` service (Cloud Run → Manage custom domains, or the load balancer if one is in front), **or** deploy this folder to the production service name once you're sure.
3. The old site's pages (`/work/…`, `/resume/`) are not part of site-v2. Decide whether to move them over or keep them on another subdomain before cutting over, otherwise those links will 404.

## Open items before going public

- AT&T publication check (program names, 9,000 agents, ~2M hours).
- Case pages for the three cases (links are hidden until `href` is set).
- Public email for the contact button and a public résumé link.
- Higher-resolution renders: the supplied images are ~1024 px wide, which is soft on large/retina screens, especially the full-bleed hero.
