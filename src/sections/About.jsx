import { about } from "../content.js";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div />
          <div className="about__media">
            <img src={about.image} alt={about.alt} loading="lazy" />
          </div>
          <div />
          <div className="about__body">
            <div className="about__head">
              <p className="section-head__kicker">{about.kicker}</p>
              <h2 className="section-head__title">{about.title}</h2>
            </div>
            <p className="about__text">{about.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
