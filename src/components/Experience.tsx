import SectionHeading from './SectionHeading';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div id="experience-title">
          <SectionHeading
            kicker="experience"
            title="Experience & education"
            description="Placeholders only — replace with verifiable roles. Never invent employers or dates."
          />
        </div>
        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item" key={item.id}>
              <div className="timeline-top">
                <span className="timeline-org">{item.organization}</span>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-role">
                {item.role} · {item.location}
              </p>
              <p className="muted">{item.description}</p>
              <div className="card-meta">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
