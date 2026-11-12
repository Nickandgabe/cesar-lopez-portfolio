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
- **Career strip** (under the hero): `career` — title, subtitle, 4 stats, industries line. Don't repeat hero stats here.
- **Customer Connect metrics** (50+, 8×, 75%, ~2M + footnote): `metrics` on the Customer Connect item in `work.cases`. `value` counts up; `prefix`/`suffix` wrap it.
- **Case rows on the homepage:** `work.cases` (short version of each case).
- **Case pages** (`/work/<slug>/`): `caseStudies` — results band, problem, role, decisions, visual slots, takeaway.
  - `published: false` hides a page from the deployed site (it still shows in `npm run dev`, with a "Draft" badge). Nexus is held this way until the patent is filed.
  - While a case is unpublished, its homepage row shows `work.pendingLabel` instead of a link.
- **Leadership:** `leadership.chapters`.
- **All work** (filterable grid): `allWork.projects` — title, meta, summary, `cats` (from `categories`), optional `image` (`fit: 'contain'` for logos/screens), `href`, `badge`. Order = order under "All". Brands live in `allWork.brands` (one grouped card under All, individual under Brand). Toyota card uses the Supra turntable (`public/turntables/supra/`).
- **Contact:** `closing.primary` is still `[Email Cesar]` → set `label` and `href: 'mailto:…'`.
- **Résumé link:** `nav.resume.href`.

Text in `[brackets]` is a deliberate visible placeholder.

To swap an image: put the new file in `src/assets/`, change the import at the top of `content.ts`, and update its `alt`. Astro makes the WebP sizes at build time.

## Hero video

The hero plays `public/video/hero.webm` (with `hero.mp4` as fallback); `src/assets/hero-poster.jpg` is its first frame, shown while it loads and to visitors with reduced motion or data saver on. It pauses when scrolled off screen.

To replace it with a new video:

1. Re-encode the new clip without audio. A ping-pong loop (forward then backward) avoids a jump if the camera moves:
   ```bash
   ffmpeg -i in.mp4 -filter_complex "[0:v]split[a][b];[b]reverse,trim=start_frame=1,setpts=PTS-STARTPTS[r];[a][r]concat=n=2:v=1:a=0[v]" -map "[v]" -an -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p -movflags +faststart public/video/hero.mp4
   ffmpeg -i in.mp4 -filter_complex "<same>" -map "[v]" -an -c:v libvpx-vp9 -crf 38 -b:v 0 public/video/hero.webm
   ffmpeg -i in.mp4 -frames:v 1 -q:v 2 src/assets/hero-poster.jpg
   ```
2. Paths are set in `hero.video` in `src/content.ts`; set both to `''` to go back to a still image.
3. Check that the hero text still reads clearly over the brightest frames.

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
