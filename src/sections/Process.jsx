import { process } from "../content.js";

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-head">
          <p className="section-head__kicker">/process</p>
          <h2 className="section-head__title">How I Work</h2>
        </div>

        <div className="process__grid">
          {process.map((step) => (
            <div className="step" key={step.title}>
              <img className="step__icon" src={step.icon} alt="" aria-hidden="true" />
              <h3 className="step__title">{step.title}</h3>
              <p className="step__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
