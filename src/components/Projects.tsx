import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

const ALL = 'All';
const categories: string[] = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState<string>(ALL);
  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <div id="projects-title">
          <SectionHeading
            kicker="projects"
            title="Selected work"
            description="Placeholder lab projects — replace with your own authorized work. Each entry shows the problem, approach, and security concepts."
          />
        </div>
        <div className="filters" role="group" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-btn${filter === category ? ' active' : ''}`}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <p className="filter-count" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
        </p>
        <div className="card-grid">
          {visible.map((project) => (
            <article className="card" key={project.id} aria-labelledby={`project-${project.id}`}>
              <span className="tag tag-accent">{project.category}</span>
              <h3 id={`project-${project.id}`}>{project.name}</h3>
              <p>{project.description}</p>
              <dl className="detail-list">
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{project.approach}</dd>
                </div>
              </dl>
              <div className="card-meta" aria-label="Technologies">
                {project.technologies.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-meta" aria-label="Security concepts">
                {project.securityConcepts.map((c) => (
                  <span className="tag tag-accent" key={c}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub →
                </a>
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    Demo →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
