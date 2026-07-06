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

```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/portfolio
gcloud run deploy portfolio \
  --image gcr.io/PROJECT_ID/portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

The `Dockerfile` uses the Next.js `standalone` output (enabled in `next.config.ts`) so the container image only ships the production server and its resolved dependencies.
