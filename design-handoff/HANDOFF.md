# Design handoff — iamcesarlopez.com redesign

This folder holds the approved design for the new homepage:

- `index.html` — the full homepage as a static reference (desktop, 1440 px wide). It is the visual source of truth: layout, type, colors, spacing, copy and image placement.
- `media/` — every image the page uses: the hero concept image, Gemini renders for the cases, the portrait and the 3D work.
- `BRIEF_v2.md` — the written brief (positioning, rules, checklist). Where it and `index.html` disagree, `index.html` wins.

## Prompt to paste into Claude Code

```
Build my new portfolio homepage from the approved design in design-handoff/.

READ FIRST
- design-handoff/index.html is the visual source of truth. Match it closely: layout, typography (Geist + Geist Mono), colors, glass panels, spacing, image placement and copy. Do not redesign it.
- All images are in design-handoff/media/. Copy them into the new site's public/assets folder.

WHERE TO BUILD
- Do NOT modify CesarPortfolioWeb/, immersicom-demo-build/ or toyota-demo-build/.
- Commit my pending changes on main first ("WIP: earlier-work page, compressed media, Toyota transition videos").
- Create branch redesign-2026 and build in a new folder site-v2/.

STACK
- Astro + TypeScript + Tailwind CSS, static output. All copy, numbers and case data in src/content.ts.
- Components: Nav, Hero, Metrics, CaseScene, Leadership, RangeStrip, Closing.
- Deploy like the current site: site-v2/ gets its own Dockerfile + nginx.conf, deployed to a NEW Cloud Run service cesar-lopez-portfolio-v2 (preview). Never deploy over cesar-lopez-portfolio.

MAKE IT A REAL SITE (the reference is a fixed 1440 px comp)
- Fully responsive: rebuild with fluid widths, clamp() type and breakpoints at 640 / 768 / 1024 / 1280. On phones: hero text stacks over the image, case scenes become image-then-text, the 3D strip scrolls horizontally with snap.
- Hero background: today it is media/hero-concept.png. Build it so a looping video can replace it: <video autoplay muted loop playsinline poster="..."> with the image as poster. Respect prefers-reduced-motion (show the poster only).
- Motion: subtle fade + rise on scroll (IntersectionObserver), count-up on the hero numbers once. All off under prefers-reduced-motion.
- The 3D section: the Supra card should become a real drag-to-rotate 360° turntable using the existing frames in CesarPortfolioWeb/work/earlier-work/media/turntables/supra/ (copy them, do not move them).
- Accessibility: WCAG AA contrast (check light text on the hero mask), semantic landmarks, skip link, visible focus rings, alt text on every image, full keyboard navigation.
- Performance: convert PNGs to WebP/AVIF with responsive sizes, lazy-load everything below the hero, Lighthouse 95+.
- SEO: title "Cesar Lopez — AI Product Design Management", meta description from the hero copy, Open Graph image from the hero, canonical https://www.iamcesarlopez.com, sitemap, robots, Person structured data.

DESIGN RULES (non-negotiable)
- Buttons right-aligned in their row. No shadows on hover/active states. No gradient text.
- No invented facts: use only the copy and numbers in index.html. Placeholders in [brackets] stay visible.

DELIVERABLE
Run the build, fix every error, deploy the preview service, and give me the preview URL plus how to edit content.ts and how to swap the hero image for the new video.
```
