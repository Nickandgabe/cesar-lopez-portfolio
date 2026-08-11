Cesar Lopez's portfolio — a static site (no build step, no framework) serving
real case studies, live interactive demos, and an interactive resume.

## Structure

- `CesarPortfolioWeb/` — the site itself (plain HTML/CSS/JS + nginx). This is
  what's live at [iamcesarlopez.com](https://iamcesarlopez.com).
- `immersicom-demo-build/` — standalone live demo linked from the Immersicom
  case study, its own Dockerfile/Cloud Run service.
- `toyota-demo-build/` — standalone live demo linked from the Toyota case
  study, its own Dockerfile/Cloud Run service.

## Deploy

```bash
cd CesarPortfolioWeb
gcloud run deploy cesar-lopez-portfolio --source . --region=us-central1
```

There is no CI/CD trigger on `main` — deploys are manual, run from inside
`CesarPortfolioWeb/`. See `PROJECT_LOG.md` for fuller history.

## Earlier Next.js redesign

An earlier React/Next.js redesign (and a separate "Products Hub" dashboard
feature built on top of it) lived at the repo root through mid-2026. Both
were retired in favor of the static site above and are preserved, untouched,
on the `archive/nextjs-redesign` branch if ever needed again.
