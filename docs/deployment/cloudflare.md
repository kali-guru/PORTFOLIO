# Deployment — Cloudflare Pages

Same `dist/` artifact as every other host. No Cloudflare-specific code exists in this repo.

1. Build locally or in CI:
   ```bash
   npm ci
   VITE_SITE_URL=https://your-domain.com npm run build
   ```
2. In Cloudflare Pages: **Create application → Pages → Upload assets**, and upload `dist/`.
   - Build command (if connected to git): `npm run build`
   - Build output directory: `dist`
   - Environment variable: `VITE_SITE_URL=https://your-domain.com`
3. Or via Wrangler from your machine:
   ```bash
   npx wrangler pages deploy dist --project-name=your-portfolio
   ```

Notes:

- The `_headers`-style security headers in this repo are implemented in `nginx.conf` for
  self-hosting. If you want the same headers on Cloudflare, add an equivalent `_headers`
  file at deploy time — the app does not depend on it.
