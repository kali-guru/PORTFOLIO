# Prasan Gurung — Static portfolio

A responsive, build-free HTML/CSS/JavaScript portfolio for prashantgrg.com.np.
No npm, backend, API keys, remote fonts, or framework required.

## Preview

Open `dist/index.html` in your browser. For an HTTP preview, run from this folder:

```sh
python3 -m http.server 8000 --directory dist
```

Then open http://localhost:8000. The copy-email button appears only when the
browser supports the clipboard API in a secure context. Everything else works
without JavaScript, including project links and certificate downloads.

## GitHub Pages

1. Create a repository, such as `kali-guru.github.io` (for your profile site)
   or `portfolio` (for a project site).
2. Upload the **contents of `dist`** into the repository root, including
   `assets`, `index.html`, `.nojekyll`, `CNAME`, `robots.txt`, and `sitemap.xml`.
   Do not upload only `index.html`.
3. Under repository **Settings → Pages**, select **Deploy from a branch**,
   your branch (usually `main`), and **/(root)**. Save.
4. To try the default github.io address first, remove `CNAME`. When ready to
   use your domain, configure `prashantgrg.com.np` under Pages → Custom domain,
   follow GitHub's domain verification and DNS instructions, and enable HTTPS
   after its certificate is ready. A CNAME file alone does not configure DNS.

Official guidance:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Cloudflare Pages

For Git integration, connect Cloudflare Pages to this repository and select the
`prasan-static-portfolio` branch. Use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `dist` |
| Root directory | `static-portfolio` |

Alternatively, use Pages Direct Upload and upload the contents of `dist`.
Add `prashantgrg.com.np` in the Pages project's **Custom domains** section and
follow its DNS prompts. GitHub's `CNAME` file is not used to connect a Pages
domain. Keep your existing Zoho MX and email-related TXT records when changing
website DNS; the website's email link does not require mail-server changes.

Official guidance:
- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

Use one hosting provider for the domain at a time. The site has not been published, and no DNS records were changed.

## Edit your content

- `dist/index.html`: name, biography, education, projects, credentials, contact.
- `dist/assets/style.css`: colors, layout, typography, and responsive rules.
- `dist/assets/script.js`: email-copy button and copyright year.
- `dist/assets/certificates/`: five original certificate PDFs and certificate image.
- `dist/CNAME`: custom domain for GitHub Pages.
- `dist/robots.txt` and `dist/sitemap.xml`: search engine discovery.

If you change your domain, update the canonical URL and Open Graph URL in
`index.html`, plus `CNAME`, `robots.txt`, and `sitemap.xml`.
If you change your email, update both `index.html` and `assets/script.js`.

## Content decisions

The display name **Prasan Gurung** follows your supplied certificates. The
website uses your requested domain and email spelling. The phone link assumes
Nepal's +977 country code. Education is presented as current study; no graduation
year or work experience was invented. Project descriptions were based on your
public GitHub repositories and their README files. No TryHackMe rank or live
statistics are claimed. LinkedIn and TryHackMe links are the URLs you supplied.

The certificates are publicly downloadable when you publish this site. Contact
uses ordinary email and phone links; it does not pretend to submit a contact form.

## Verification

Checked JavaScript syntax, local asset references, section links, and inclusion
of all five PDF certificates. Responsive layouts and reduced-motion styles are
included. A live browser rendering test was not available in this environment;
preview the site on desktop and mobile before publishing.
