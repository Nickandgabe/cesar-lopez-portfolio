FROM node:14-alpine AS builder
WORKDIR /app/client
COPY client/package.json client/package-lock.json ./
RUN npm install --legacy-peer-deps
COPY client/. .
RUN GENERATE_SOURCEMAP=false npx react-scripts build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY .htpasswd-toyota /etc/nginx/.htpasswd-toyota
COPY --from=builder /app/client/build /usr/share/nginx/html
EXPOSE 8080
