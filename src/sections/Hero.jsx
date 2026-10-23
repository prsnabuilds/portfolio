import Face from "../components/Face.jsx";
import PillNav from "../components/PillNav.jsx";
import { hero, projects } from "../content.js";

export default function Hero() {
  const featured = projects[0];

  return (
    <section className="hero">
      <Face size="lg" />

      <div className="hero__intro" id="top">
        <h1 className="hero__title">
          {hero.titleWake}
          <em>{hero.titleName}</em>
        </h1>
        <p className="hero__sub">{hero.sub}</p>
      </div>

      <PillNav />

      <article className="feature">
        <a className="feature__media" href={featured.link}>
          <img src={featured.image} alt={featured.alt} />
        </a>
        <div className="feature__text">
          <h2 className="feature__title">{featured.title}</h2>
          <p className="feature__desc">{featured.desc}</p>
        </div>
      </article>
    </section>
  );
}
