import { projects } from "../content.js";

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="section-head">
          <p className="section-head__kicker">/projects</p>
          <h2 className="section-head__title">Work that shipped</h2>
        </div>

        <div className="works__list">
          {projects.map((project) => (
            <a className="project" href={project.link} key={project.title}>
              <div
                className={`project__media${project.image ? "" : " project__media--empty"}`}
              >
                {project.image && <img src={project.image} alt={project.alt} loading="lazy" />}
              </div>
              <div />
              <div className="project__body">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.desc}</p>
                <div className="project__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
