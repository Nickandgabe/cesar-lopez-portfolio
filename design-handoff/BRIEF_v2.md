# Portfolio Brief v2 — Cesar Lopez (for Claude Code)

**Site:** www.iamcesarlopez.com · **Language of the site:** English · **Updated:** Nov 10, 2026

**What changed from v1**
- Builds in a new folder on a new branch. The live site (`CesarPortfolioWeb/`) and the demo builds stay untouched.
- Astro is the first choice of stack, matching the current static site.
- Nexus replaces SwapZone as Case 3. Together and SwapZone move to "Other ventures."
- The title reads "AI Experience Design Leader," not "Director."
- The metric wording is tightened: "57% fewer steps," and program results are framed as program results.
- The design system adds right-aligned buttons, no shadows on active states, and no gradient text.
- New confidentiality rules for AT&T and for the Nexus patent.

How to use it: paste everything in Section 1 as the first prompt to Claude Code, from the root of the `Cesar Lopez Portfolio` repo. Sections 2–6 are the detail and the acceptance checklist.

---

## 1. Master prompt — copy and paste this to Claude Code

```
Build my new portfolio website. Read this entire prompt before writing any code, then build the complete site in one pass. Do not ask me questions — use the placeholders marked [TODO] where noted.

WHERE TO BUILD — READ FIRST
- You are in the root of my portfolio repo. The live site is CesarPortfolioWeb/ (static HTML on Cloud Run) plus immersicom-demo-build/ and toyota-demo-build/. DO NOT modify, move, or delete any of those.
- Create a new git branch: redesign-2026. Build the new site in a new folder: site-v2/.
- Commit my pending changes on main FIRST, before branching, in a commit named "WIP: earlier-work page, compressed media, Toyota transition videos". Do not discard anything.

WHO I AM
Cesar Augusto Lopez Rodriguez. Lead Sr UX Designer at AT&T since January 2026, leading a team of 5 designers. 18 years across product design, product management, UX and front-end (since 2008). Certified AI Product Manager (SAFe). Bilingual: Spanish first language, fluent English. LinkedIn: linkedin.com/in/ceslop.

POSITIONING — THIS IS THE WHOLE POINT
I do not sell UI. I sell AI design leadership that moves business numbers.
Headline: "I lead AI experience design that turns complex enterprise systems into measurable business results."
Sub-headline: "Lead Sr UX Designer at AT&T. 18 years across product design, product management, UX and front-end. Leading a team of 5 designers. Certified AI Product Manager (SAFe)."
Build a single-page portfolio plus 3 case study pages that proves that headline in under 10 seconds of scrolling.

DESIGN DIRECTION — NON-NEGOTIABLE
Elegant, modern, clean, sophisticated, imposing. White, quiet, expensive, sure of itself.
- Background #FFFFFF / #FAFAF8. Text #111111 primary, #555555 secondary. Hairlines #E8E8E3. No dark theme.
- One accent only, as CSS variable --accent: deep blue (#0B3DFF family). Use it sparingly for numbers, links, focus rings and hover states. [TODO: Cesar may switch to deep emerald.]
- Type: premium sans-serif (Inter, Instrument Sans or General Sans via fontsource, self-hosted, font-display: swap). Display 72–96px desktop, H1 56, H2 36, body 18, caption 13px uppercase tracked. Line-height 1.05 display, 1.6 body. Hero type scales with clamp().
- Layout: 12-column grid, max width 1200–1280px, section padding 120px desktop / 72px mobile. Sections separated by hairline rules, not cards.
- Buttons: right-aligned within their row. No shadows on any state, including hover and active. No gradient text, no gradients anywhere.
- Forbidden: card grids with drop shadows, glassmorphism, dark hero, stock photos, stock illustrations, emoji, icon packs as decoration, carousels, pop-ups, chat widgets.
- Motion: 300–500ms ease-out fade + slight rise on scroll (IntersectionObserver), metric count-up once when visible, underline sweep on links. All disabled under prefers-reduced-motion.
- Imagery: [TODO: headshot and case visuals]. Until then, typographic placeholders with the case title and its metric. Never fake product screenshots. Never recreate AT&T screens.

STRUCTURE — IN THIS EXACT ORDER
1. Header (sticky, minimal): "Cesar Lopez" left; Work, Leadership, About, Contact right; one button "Download Résumé" [TODO link].
2. Hero: eyebrow "Cesar Augusto Lopez Rodriguez — Atlanta / Orlando", headline, sub-headline, buttons "See the results" (scrolls to metrics) and "Get in touch". No hero image.
3. Metrics band, before any project. Four numbers:
   - 50+ — service flows redesigned, from 7 steps to 3 (57% fewer steps)
   - 8x — faster time to market, AT&T Customer Connect program
   - 75% — API reuse across the program
   - ~2M — work hours saved per year, for 9,000 agents serving 180M customers
4. Selected Work — exactly 3 cases, full-width rows, one impact line each, each linking to its case page:
   - Customer Connect — AT&T: "8x faster to market for 9,000 agents serving 180M customers."
   - AI Product Journey & Pulse — AT&T: "An AI-agent operating model presented to VPs and AVPs — and the tools to run it."
   - Nexus — Founder: "A fintech platform I founded, designed and built around verified human identity: passkeys, on-device biometrics and risk-matched verification."
5. Other ventures — one quiet line each, no case pages:
   - Together — a multi-audience platform for homeschool families and ABA clinics.
   - SwapZone — a PWA for trading FIFA World Cup 2026 sticker collections.
6. Leadership — numbered chapters 01–04:
   - 01 — AT&T, Lead Sr UX Designer (Jan 2026 – present): leading a team of 5 designers on AI-driven and agentic experiences, enterprise design systems and AI governance.
   - 02 — AT&T, Sr UX Designer (May 2024 – Jan 2026) and AT&T Business, UX Architect (Jan 2023 – Apr 2024): 50+ service flows for retail and call center, the Customer Connect program, AI Product Journey.
   - 03 — Brain Group (2013 – 2020): led a team of up to 10 designers and developers. Early-career proof (one line, not in the hero): earlier client work cut costs by an average of 12% on project budgets of $2,000–$25,000.
   - 04 — Founder: Nexus, Together, SwapZone — strategy, design and code, end to end.
7. What I Do — 3 columns:
   - AI Experience & Agentic Design — agent experiences, AI product strategy, and the operating model behind them.
   - Design Leadership & Operating Models — teams, rituals, OKRs (Pulse) and delivery systems that ship faster without losing quality.
   - Enterprise Design Systems & Governance — design systems, tokens, adoption and AI governance at AT&T scale.
8. Recognition & Credentials — plain list, no adjectives: Certified AI Product Manager (SAFe), AI Product Journey presented to VPs/AVPs at AT&T, [TODO: talks, awards, press].
9. Testimonials — [TODO: 2–3 quotes, name, title, company]. Build it, hide it behind a flag in content.ts until at least 2 real quotes exist.
10. About — the paragraph in content.ts (below) + skills organized by capability, not by tool.
11. Contact / Footer: headline "Let's build what wins." Email [TODO: public email], LinkedIn, portfolio URL, "Atlanta / Orlando–Tampa area. Open to remote and hybrid leadership roles." © 2026 Cesar Augusto Lopez Rodriguez.

ABOUT PARAGRAPH — USE VERBATIM
"I'm Cesar Augusto Lopez Rodriguez, an AI experience design leader with 18 years across product design, product management, UX and front-end. At AT&T I lead a team of 5 designers working on AI-driven and agentic experiences. I built AI Product Journey, an AI-agent operating model presented to VPs and AVPs, and I own Pulse, our OKR platform. Outside AT&T, I founded Nexus, Together and SwapZone, and I design and build them hands-on. I code in React, TypeScript, Node.js, PostgreSQL, Vue and Python, and I work with Gemini and OpenAI-compatible LLM APIs. Spanish is my first language; I work in fluent English."

CASE PAGES — SAME TEMPLATE FOR ALL 3
Title + impact line → Results band (large type, at the top) → The problem (2–3 lines, business first, user second) → My role & leadership → What I changed (3–5 decisions, each with why it mattered) → Visuals [TODO slots only] → One takeaway sentence. Scannable in 60 seconds.

Case 1 — Customer Connect (AT&T): Results: 50+ service flows (internet, wireless, billing, payments, account changes), 7 steps to 3, 8x faster time to market, 75% API reuse, ~2M work hours saved per year, 9,000 agents, 180M customers. Label program-level numbers as "Program results"; the 50+ flows and 7→3 are my own design work. [TODO: Cesar to confirm what AT&T allows to be published.]

Case 2 — AI Product Journey & Pulse (AT&T): an operating model, not a single screen. AI Product Journey: AI-agent operating model presented to VPs and AVPs. Pulse: OKR platform that started as my Cascade prototype and that I now own; narrowed after AVP feedback to Strategic Priorities → Objectives → Key Results with AI-assisted objective rewriting. Plexus may be mentioned in one line as a working demonstrator that turns a Jira epic into a build-ready package — not as a shipped product.

Case 3 — Nexus (Founder): a founder story about product judgment and building. Show the vision, the product and the design decisions: passkeys instead of passwords, on-device biometrics, anti-Sybil protection, and verification matched to the risk of each action. Built with one collaborator on GCP. Do NOT describe internal mechanisms, cryptography internals, financial model numbers, or partner/vendor names. No user or revenue metrics — Nexus is pre-launch; the results band uses [TODO] slots. [TODO: Cesar to confirm the patent application is filed before this page goes public.]

TECH REQUIREMENTS
- Stack: Astro + TypeScript + Tailwind CSS, static output. Next.js is not wanted: it was tried and retired in this repo.
- Deploy like the current site: site-v2/ gets its own Dockerfile + nginx.conf, deployed to a NEW Cloud Run service named cesar-lopez-portfolio-v2 for preview. Do not deploy over cesar-lopez-portfolio.
- All copy, metrics, cases, chapters and flags live in src/content.ts. No copy hard-coded in components.
- Components: Header, Hero, MetricsBand, CaseRow, OtherVentures, ChapterRow, ServiceColumn, RecognitionList, TestimonialBlock, AboutBlock, ContactFooter, CaseTemplate.
- Responsive breakpoints 640 / 768 / 1024 / 1280. Metrics: 4 → 2×2 → 1 column.
- Accessibility: WCAG AA, semantic landmarks, skip-to-content link, visible focus rings in --accent, alt text required, full keyboard navigation.
- Performance: Lighthouse 95+ on Performance, Accessibility, SEO. No animation libraries.
- SEO: title "Cesar Lopez — AI Experience Design Leader", meta description from the headline, Open Graph + Twitter card, canonical https://www.iamcesarlopez.com, sitemap.xml, robots.txt, Person structured data (name, job title, LinkedIn sameAs).
- Analytics: one placeholder for Plausible / GA4, disabled by default. .env.example only, no secrets.
- README in site-v2/ with install, dev, build, preview-deploy and production-cutover steps.

DELIVERABLE
A complete, runnable site in site-v2/ on branch redesign-2026. Run the build, fix every error, then show me how to run it locally, how to edit content.ts, and how to deploy the preview. Do not add sections, copy, metrics, testimonials, clients or awards that are not in this prompt.
```

---

## 2. Positioning
- The visitor is a hiring manager, VP or recruiter for a Director / Head of Design / VP role, and decides in seconds.
- Numbers before screens. A section with no number or external proof gets less space.
- Three cases only. Selection reads senior.
- Customer Connect proves scale, AI Product Journey & Pulse prove leadership and operating models, and Nexus proves that Cesar builds.
- Tone: confident and plain, with no hype adjectives. The metrics carry the weight.

## 3. Rules that protect Cesar
1. **AT&T confidentiality.** Before going public, confirm what can be published: program names (Customer Connect, AI Product Journey, Pulse, Plexus) and operating figures (9,000 agents, ~2M hours). Never show AT&T screens.
2. **Nexus patent.** Publish Case 3 only after the patent application is filed. Even then, show the vision and design, not the mechanism.
3. **No invented facts.** Every number in this brief comes from Cesar's record (Master Notes). Anything marked [TODO] stays a visible placeholder.
4. **Consistency.** Use 18 years everywhere: site, résumé and LinkedIn.

## 4. Inspiration — take the pattern, never the copy
| Site | What to take |
|---|---|
| [Matthew De Goes](https://www.mtdegoes.com/) | Four big metrics right after the hero, three cases with results, testimonials. The closest model overall. |
| [Prasanna Venkatesh](https://prazy.framer.website/) | A "decade of leadership" headline, stats row, role timeline, testimonials with name and title. |
| [Aarron Walter](https://www.aarronwalter.com/) | Career as a numbered list: role, organization, dates, link. |
| [Julie Zhuo](https://www.juliezhuo.com/) | Radical restraint. |
| [Tobias van Schneider](https://vanschneider.com/) | Name — one-line impact, per project. |
| [Dan Mall](https://danmall.com/portfolio) | One first-person impact sentence per project. |
| [Femke van Schoonhoven](https://www.femke.design/) | Opening with the problem you solve. Skip her sales-heavy calls to action. |
| [Fabricio Teixeira](https://fabricio.work/about/) | Recognition as a plain, dry list. |

## 5. Placeholders Cesar still owes
- [TODO] Professional headshot (plain background)
- [TODO] Case visuals Cesar has the right to publish
- [TODO] 2–3 testimonials (quote, name, title, company)
- [TODO] Public email + résumé PDF link
- [TODO] Talks, awards, press
- [TODO] Accent color (blue or emerald)
- [TODO] AT&T publication check · Nexus patent filed
- [TODO] Nexus results to show (pilots, merchants, partners), if any

## 6. Acceptance checklist
- [ ] `CesarPortfolioWeb/` and the demo builds are untouched; the work is on branch `redesign-2026` in `site-v2/`
- [ ] Pending changes were committed on main before branching
- [ ] The headline is visible without scrolling on mobile and desktop
- [ ] Four metrics appear before any project; the count-up respects reduced motion
- [ ] Exactly 3 cases with working case pages, each leading with its results band
- [ ] Other ventures shows Together and SwapZone, one line each
- [ ] Leadership shows 4 chapters and names the team of 5
- [ ] No invented metric, client, testimonial, award or screenshot
- [ ] Buttons are right-aligned, with no shadows and no gradients
- [ ] WCAG AA and full keyboard navigation
- [ ] Lighthouse 95+ on Performance, Accessibility and SEO
- [ ] All copy is editable from `content.ts`
- [ ] `npm run build` runs clean; the preview is deployed to `cesar-lopez-portfolio-v2`, not to production
- [ ] Testimonials stay hidden until real quotes exist
