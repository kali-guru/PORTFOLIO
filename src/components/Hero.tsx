import Terminal from './Terminal';
import { profile, terminalLines } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div>
          <p className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-statement">{profile.tagline}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <span>{profile.location}</span>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Contact</a>
          </div>
        </div>
        <Terminal lines={terminalLines} />
      </div>
    </section>
  );
}
