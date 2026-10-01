# Security Policy

## Scope

This repository is a **fully static website**. There is no backend, no API, no database,
no authentication, and no server-side code in production. The threat model is therefore
narrow: supply-chain integrity, build integrity, safe deployment, and honest content.

## Secure engineering practices in this repo

- **Minimal dependencies**: only `react` + `react-dom` at runtime. Everything else is
  build/test tooling.
- **Dependabot** (`.github/dependabot.yml`): weekly npm + Docker updates.
- **`npm audit --audit-level=moderate`** runs in CI and fails the build on findings.
- **No secrets**: `.env` is gitignored; only `.env.example` (public placeholders) is
  committed. All `VITE_*` variables ship in the client bundle — treat them as public.
- **Secret scanning**: enable GitHub's secret scanning / push protection on the repo.
  Never commit API keys, tokens, or private keys.
- **Docker**: multi-stage build — dev dependencies and source never reach the final
  nginx image. The image serves files only; no app code executes server-side.
- **HTTPS**: terminate TLS at your host / reverse proxy and redirect HTTP → HTTPS.
  All deployment guides assume an HTTPS canonical URL.

## Security headers

`nginx.conf` sets:

| Header                    | Value                                      | Why                                                 |
| ------------------------- | ------------------------------------------ | --------------------------------------------------- |
| `X-Content-Type-Options`  | `nosniff`                                  | Block MIME sniffing                                 |
| `Referrer-Policy`         | `strict-origin-when-cross-origin`          | Limit referrer leakage                              |
| `Permissions-Policy`      | `camera=(), microphone=(), geolocation=()` | Disable unneeded APIs                               |
| `X-Frame-Options`         | `DENY`                                     | Block clickjacking (defense-in-depth alongside CSP) |
| `Content-Security-Policy` | see below                                  | Restrict resource loading                           |

### Content Security Policy

```text
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self' data:;
connect-src 'self';
object-src 'none';
base-uri 'self';
frame-ancestors 'none';
form-action 'self'
```

Documented exceptions:

1. **`style-src 'unsafe-inline'`** — React and the browser apply some styles inline;
   the app's own CSS lives in external files. This is the standard pragmatic allowance
   for Vite/React static builds.
2. **No `unsafe-eval`** — nothing in the app requires it.
3. **Inline `application/ld+json`** — `index.html` contains one JSON-LD metadata block
   (not executable script). A strict `script-src 'self'` policy will cause browsers to
   ignore it. If you keep the block, add its `sha256-…` hash to `script-src` in
   `nginx.conf`; if you prefer zero exceptions, delete the block — the site works
   identically without it.
4. **No third-party scripts** — no analytics, fonts, or widgets by default. Adding any
   requires a conscious CSP update.

## Reporting a vulnerability

If you find a security issue in this repository (e.g. a vulnerable dependency or an
unsafe configuration), please open a GitHub issue or contact the maintainer at
`[YOUR EMAIL]`. For the live site, see `/.well-known/security.txt` once deployed.

## Content honesty

Placeholders (`[YOUR NAME]`, `[Certification Name]`, …) must be replaced with real,
verifiable information — never invent employment, certifications, CVEs, clients, or awards.
