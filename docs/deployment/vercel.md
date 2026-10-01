# Deployment — Vercel

Same `dist/` artifact as every other host. No Vercel-specific code exists in this repo.

Option A — import the git repo:

1. Vercel dashboard → **Add New → Project → Import** this repository.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. Environment variable: `VITE_SITE_URL=https://your-domain.com`.

Option B — deploy the prebuilt output:

```bash
npm ci
VITE_SITE_URL=https://your-domain.com npm run build
npx vercel --prebuilt dist
```

No `vercel.json` is included on purpose — the defaults serve a Vite SPA correctly.
