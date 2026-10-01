import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name} · Built as a fully static site — no tracking, no backend.
        </p>
        <nav aria-label="Footer">
          <a href="/.well-known/security.txt">security.txt</a>
          <a href="/robots.txt">robots.txt</a>
          <a href="/sitemap.xml">sitemap</a>
        </nav>
      </div>
    </footer>
  );
}
