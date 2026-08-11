# Static site, no build step

`CesarPortfolioWeb/` is plain HTML/CSS/JS served by nginx — no framework, no
bundler, no `npm install`. Edit files directly; there's nothing to build.
Deploys are manual (`gcloud run deploy` from inside `CesarPortfolioWeb/`),
not triggered by pushes to `main`.

See `README.md` for structure and `PROJECT_LOG.md` for history.
