# Cybersecurity Portfolio — Vendor-Independent Static Site

A production-ready, fully static personal portfolio for a cybersecurity practitioner
(ethical hacking, penetration testing, vulnerability assessment, web security, defensive security).

## What this is

- 100% static: no backend, no database, no server-side runtime, no tracking.
- React + TypeScript + Vite, zero runtime dependencies beyond React.
- Content lives in typed data files (`src/data/`) — update your info without touching UI code.
- All personal details are clearly-marked `[PLACEHOLDERS]` — nothing is fabricated.

## Features

- Hero with terminal-style visual, About, Skills, Projects, Research/Writeups,
  Experience timeline, Certifications, Contact, Footer
- Dark / light / system theme with local persistence + `prefers-reduced-motion` support
- SEO: meta/OG/Twitter tags, canonical URL, `robots.txt`, `sitemap.xml`, JSON-LD, favicon
- `public/.well-known/security.txt` (+ `.nojekyll` for GitHub Pages)
- Accessible: skip link, semantic landmarks, focus states, keyboard-operable menu
- Security headers + CSP in `nginx.conf`, documented in `SECURITY.md`

## Project structure

```text
├── .github/workflows/   # ci.yml (lint/test/build/docker), deploy.yml (portable artifact)
├── docs/deployment/     # per-host guides (app itself has zero host-specific code)
├── public/              # favicon, robots.txt, sitemap.xml, .well-known/security.txt
├── src/
│   ├── components/      # Navbar, Hero, Terminal, sections, Footer, ThemeContext
│   ├── data/            # profile, skills, projects, articles, experience, certifications
│   └── styles/          # single global stylesheet (no CSS framework)
├── tests/               # Vitest + Testing Library
├── Dockerfile           # multi-stage: Node build → nginx static serve
├── docker-compose.yml
└── nginx.conf
```

## Development

```bash
npm install
npm run dev        # local dev server
```

`.env` ships with safe public defaults (`VITE_SITE_URL=https://example.com`, placeholder
links). Edit it directly, or override per-machine in `.env.local` (gitignored), or export
variables at build time — e.g. `VITE_SITE_URL=https://your-domain.com npm run build`.
`VITE_*` variables are baked into the client bundle — never put secrets in them.

## Production build

```bash
npm run build      # type-check + static build → dist/
npm run preview    # serve dist/ locally
```

## Quality gates

```bash
npm run lint
npm run format:check
npm run test:run
npm run audit
```

## Docker

```bash
docker compose up --build
# open http://localhost:8080
```

## CI

`ci.yml` runs on every push/PR: install → format check → ESLint → Vitest → production
build → `dist/` verification → `npm audit` → Docker build. Any failure blocks the run.

## Deployment (vendor-neutral)

The pipeline produces a portable `dist/` artifact:

```text
git → GitHub Actions (lint → test → build → docker) → dist/
  ├── Cloudflare Pages   (docs/deployment/cloudflare.md)
  ├── Vercel              (docs/deployment/vercel.md)
  ├── Netlify             (docs/deployment/netlify.md)
  ├── GitHub Pages        (docs/deployment/github-pages.md)
  ├── Nginx / Docker      (docs/deployment/generic.md)
  └── any static host
```

The application imports no provider SDKs and calls no provider APIs. Deployment config
lives in `docs/deployment/`, never in app code.

## Customizing

1. Edit `src/data/profile.ts` (name, role, links) and the other `src/data/*.ts` files.
2. Update `public/.well-known/security.txt`, `public/robots.txt`, `public/sitemap.xml`.
3. Set `VITE_SITE_URL` to your production domain and rebuild.

## License

MIT — see [LICENSE](LICENSE).
