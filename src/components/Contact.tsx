import { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { profile, siteUrl } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  async function copyEmail() {
    const email = profile.email;
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(email);
      } else {
        const area = document.createElement('textarea');
        area.value = email;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
      }
    } catch {
      /* clipboard unavailable — the mailto link remains the primary path */
    }
    setCopied(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div id="contact-title">
          <SectionHeading
            kicker="contact"
            title="Get in touch"
            description="No backend contact form by design — use direct, vendor-independent links. This keeps the site fully static."
          />
        </div>
        <div className="contact-grid">
          <div>
            <p className="muted">
              For opportunities, collaboration, or questions about my lab work and writeups, reach
              out via email or connect on professional networks. If you use PGP, publish your key
              and reference it here.
            </p>
            <ul className="contact-list">
              <li className="contact-row">
                <a href={`mailto:${profile.email}`}>
                  <span aria-hidden="true">✉</span>
                  <span>
                    Email<small>{profile.email}</small>
                  </span>
                </a>
                <button type="button" className="btn btn-secondary copy-btn" onClick={copyEmail}>
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </li>
              <li>
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">⌨</span>
                  <span>
                    GitHub<small>{profile.github}</small>
                  </span>
                </a>
              </li>
              <li>
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">⛨</span>
                  <span>
                    LinkedIn<small>{profile.linkedin}</small>
                  </span>
                </a>
              </li>
            </ul>
            <span className="sr-only" aria-live="polite">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </div>
          <div className="card" aria-label="Security contact details">
            <h3>Responsible disclosure</h3>
            <p>
              For security issues related to this site itself, see the published security policy.
            </p>
            <div className="card-meta">
              <span className="tag tag-accent">security.txt</span>
              <span className="tag">PGP optional</span>
            </div>
            <div className="project-links">
              <a href="/.well-known/security.txt">security.txt →</a>
              <a href={`${siteUrl}/.well-known/security.txt`} target="_blank" rel="noreferrer">
                Canonical →
              </a>
            </div>
            <dl className="detail-list">
              <div>
                <dt>PGP key</dt>
                <dd>[Optional: link to your public PGP key or keyserver entry]</dd>
              </div>
              <div>
                <dt>Response window</dt>
                <dd>[Optional: e.g. “I aim to respond within 3 business days.”]</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
