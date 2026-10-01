# ---- Stage 1: build static assets ----
FROM node:26-alpine AS build
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-audit --no-fund

COPY . .
# VITE_SITE_URL and other VITE_* vars are baked in at build time (public values only).
ARG VITE_SITE_URL=https://example.com
ENV VITE_SITE_URL=${VITE_SITE_URL}
RUN npm run build

# ---- Stage 2: serve with nginx (no Node runtime, no dev dependencies) ----
# The image serves prebuilt files only. nginx workers run as the unprivileged
# `nginx` user; the master process starts as root only to bind the port.
# Port 8080 is unprivileged. For a fully rootless runtime, deploy the same
# `dist/` output to any static host instead (see docs/deployment/).
FROM nginx:1.27-alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

RUN chmod -R a+r /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ > /dev/null || exit 1
