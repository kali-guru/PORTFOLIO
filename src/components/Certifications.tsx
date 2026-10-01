import SectionHeading from './SectionHeading';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section
      className="section section-alt"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <div className="container">
        <div id="certifications-title">
          <SectionHeading
            kicker="certifications"
            title="Certifications"
            description="List only credentials you actually hold, with verification links."
          />
        </div>
        <div className="card-grid-3">
          {certifications.map((cert) => (
            <article className="card" key={cert.id} aria-labelledby={`cert-${cert.id}`}>
              <span className="tag tag-accent">{cert.year}</span>
              <h3 id={`cert-${cert.id}`}>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <div className="project-links">
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                  Verify credential →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
