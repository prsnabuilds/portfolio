import { about } from "../content.js";

export default function About() {
  return (
    <div className="block">
      <div className="about__media">
        <img src={about.image} alt={about.alt} loading="lazy" />
      </div>
      <div className="about__head">
        <p className="block__kicker">{about.kicker}</p>
        <h2 className="block__title">{about.title}</h2>
      </div>
      <p className="about__text">{about.text}</p>
    </div>
  );
}
