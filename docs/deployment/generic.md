# Deployment — any generic static server / Nginx

The build output is plain files. Serve `dist/` with anything that serves static files.

## Preview the production build

```bash
npm ci
npm run build
npm run preview   # serves dist/ locally
```

## Docker (self-host)

```bash
docker compose up --build
# open http://localhost:8080
```

The image is a multi-stage build: Node builds `dist/`, then nginx serves it.
No application code runs server-side.

## Plain Nginx

```bash
npm ci
VITE_SITE_URL=https://your-domain.com npm run build
sudo cp -r dist/* /var/www/portfolio/
```

Use the shipped `nginx.conf` as a reference for security headers, gzip,
immutable caching of `/assets/*`, and the `try_files $uri $uri/ /index.html` fallback.

## Python / Caddy / anything else

```bash
cd dist && python3 -m http.server 8080
# or: caddy file-server --root dist --listen :8080
```

Terminate TLS at your reverse proxy / CDN and redirect HTTP → HTTPS there.
