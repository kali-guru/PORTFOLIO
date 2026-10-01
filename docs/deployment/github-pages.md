# Deployment — GitHub Pages

Same `dist/` artifact as every other host. No GitHub-specific code in the app itself.

1. Copy `docs/deployment/github-pages.yml.example` (below) to
   `.github/workflows/github-pages.yml` — it is intentionally **not** enabled by default
   so the core repo stays host-neutral.
2. Set the repository variable `SITE_URL` to your Pages URL, e.g.
   `https://<user>.github.io/<repo>/`.
3. Push to `main`. The workflow builds and publishes `dist/` via the official
   `actions/deploy-pages` action.

```yaml
# Save as .github/workflows/github-pages.yml (example — not shipped enabled)
name: GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci --no-audit --no-fund
      - run: npm run build
        env:
          VITE_SITE_URL: ${{ vars.SITE_URL }}
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

Notes:

- A `public/.nojekyll` file is already shipped so Pages serves `.well-known/security.txt`
  and asset paths verbatim.
- If deploying to a project subpath (`/<repo>/`), also set Vite `base` accordingly —
  the default assumes domain/subdomain root.
