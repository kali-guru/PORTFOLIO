import SectionHeading from './SectionHeading';
import { articles } from '../data/articles';

export default function Research() {
  return (
    <section className="section section-alt" id="research" aria-labelledby="research-title">
      <div className="container">
        <div id="research-title">
          <SectionHeading
            kicker="research"
            title="Security research & writeups"
            description="Static index of writeups and notes. No CMS — edit src/data/articles.ts."
          />
        </div>
        <div className="post-list">
          {articles.map((article) => (
            <article
              className="post-card"
              key={article.slug}
              aria-labelledby={`post-${article.slug}`}
            >
              <div>
                <p className="post-date">
                  <time dateTime={article.date}>{article.date}</time>
                </p>
                <h3 id={`post-${article.slug}`}>
                  <a href={article.url} target="_blank" rel="noreferrer">
                    {article.title}
                  </a>
                </h3>
                <p>{article.description}</p>
                <div className="card-meta">
                  {article.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a className="btn btn-secondary" href={article.url} target="_blank" rel="noreferrer">
                Read →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
