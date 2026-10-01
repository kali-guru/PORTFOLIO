# Deployment — Netlify

Same `dist/` artifact as every other host. No Netlify-specific code exists in this repo.

Option A — connect the git repo:

1. Netlify dashboard → **Add new site → Import an existing project**.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Environment variable: `VITE_SITE_URL=https://your-domain.com`.

Option B — drag & drop:

```bash
npm ci
VITE_SITE_URL=https://your-domain.com npm run build
```

Then drag the `dist/` folder onto the Netlify **Deploys** page.

SPA fallback is a single `index.html`; Netlify handles it by default for the root path.
For deep-link support add a `_redirects` file with `/* /index.html 200` at deploy time —
kept out of the repo to avoid host-specific files in the core build.
