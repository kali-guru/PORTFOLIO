import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section className="section section-alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <div id="skills-title">
          <SectionHeading
            kicker="skills"
            title="Capabilities"
            description="Grouped by discipline. Edit src/data/skills.ts to match your real experience."
          />
        </div>
        <div className="card-grid">
          {skillGroups.map((group) => (
            <article className="card" key={group.id} aria-labelledby={`skill-${group.id}`}>
              <h3 id={`skill-${group.id}`}>{group.title}</h3>
              <p>{group.description}</p>
              <div className="card-meta">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
