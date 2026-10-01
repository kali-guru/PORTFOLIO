import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

const PRINCIPLES = [
  {
    icon: '◈',
    title: 'Authorized testing only',
    text: 'Only test systems you own or have explicit written permission to assess.',
  },
  {
    icon: '⬣',
    title: 'Understand failure, build resilience',
    text: 'Offense informs defense: every finding should map to a concrete mitigation.',
  },
  {
    icon: '⬔',
    title: 'Evidence over claims',
    text: 'Document methodology, reproduce results, and write reports others can verify.',
  },
];

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div id="about-title">
          <SectionHeading
            kicker="about"
            title="Security background & approach"
            description="A practitioner focused on ethical hacking fundamentals and defensive thinking."
          />
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I&apos;m {profile.name}, working at the intersection of offensive and defensive
              security. My interests center on web application security, penetration testing
              methodology, vulnerability assessment, and Linux/network fundamentals.
            </p>
            <p>
              My approach is lab-driven: build intentionally vulnerable targets, test them with
              standard tooling, then study the defender&apos;s view — logs, detections, and
              hardening. I document what I learn as structured notes and writeups so the knowledge
              compounds.
            </p>
            <p>
              I don&apos;t claim credentials I haven&apos;t earned. Everything on this site marked
              with [brackets] is a placeholder for the site owner to replace with verifiable
              information.
            </p>
          </div>
          <ul className="principles" aria-label="Security principles">
            {PRINCIPLES.map((p) => (
              <li key={p.title}>
                <span className="principle-icon" aria-hidden="true">
                  {p.icon}
                </span>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
