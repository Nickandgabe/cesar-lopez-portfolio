# Production image for www.iamcesarlopez.com (Cloud Run service: cesar-lopez-portfolio).
#
# The new site (site-v2/) is served at the root. The previous static site
# (CesarPortfolioWeb/) is copied underneath it, so its case pages (/work/…),
# résumé (/resume/) and assets keep working; the new home page replaces the old one.
#
# Deploy from the repo root:
#   gcloud run deploy cesar-lopez-portfolio --source . --region=us-central1 --project=cesar-lopez-portfolio
# The preview (site-v2/ only) still deploys from site-v2/ to cesar-lopez-portfolio-v2.

# 1) Build the new site
FROM node:22-alpine AS build
WORKDIR /app
COPY site-v2/package.json site-v2/package-lock.json ./
RUN npm ci
COPY site-v2/ ./
RUN npm run build

# 2) Serve: legacy site first, new site on top
FROM nginx:alpine
COPY nginx.prod.conf /etc/nginx/conf.d/default.conf
COPY CesarPortfolioWeb/.htpasswd /etc/nginx/.htpasswd
COPY CesarPortfolioWeb/.htpasswd-toyota /etc/nginx/.htpasswd-toyota
COPY CesarPortfolioWeb/ /usr/share/nginx/html/
RUN rm -f /usr/share/nginx/html/nginx.conf /usr/share/nginx/html/Dockerfile \
          /usr/share/nginx/html/.htpasswd /usr/share/nginx/html/.htpasswd-toyota \
          /usr/share/nginx/html/index.html
COPY --from=build /app/dist/ /usr/share/nginx/html/
EXPOSE 8080
