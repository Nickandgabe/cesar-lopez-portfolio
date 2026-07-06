This is a Next.js portfolio built with TypeScript, Tailwind CSS v4, and Material Design 3 token architecture (custom brand palette, not stock M3 colors).

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- Design tokens (color roles, type scale, elevation, shape): `src/app/globals.css`
- UI primitives (Button, Card, Chip, FAB): `src/components/ui`
- Case study content (edit here to swap in real project data): `src/content/projects.ts`
- Case study page template: `src/app/work/[slug]/page.tsx`

## Deploy to Google Cloud Run

Pushes to `main` auto-deploy via a Cloud Build trigger (see `cloudbuild.yaml`
and `PROJECT_LOG.md` for the full CI/CD setup). To deploy manually instead:

```bash
gcloud run deploy cesar-lopez-portfolio --source . --region=us-central1
```

The `Dockerfile` uses the Next.js `standalone` output (enabled in `next.config.ts`) so the container image only ships the production server and its resolved dependencies.

See `PROJECT_LOG.md` for full project context, design system notes, and open items.
