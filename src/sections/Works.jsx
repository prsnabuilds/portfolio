import { projects } from "../content.js";

export default function Works() {
  return (
    <div className="block">
      <div className="works__list">
        {projects.map((project) => (
          <a className="project" href={project.link} key={project.title}>
            <div className={`project__media${project.image ? "" : " project__media--empty"}`}>
              {project.image && <img src={project.image} alt={project.alt} loading="lazy" />}
            </div>
            <div className="project__body">
              <h2 className="project__title">{project.title}</h2>
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
  );
}
