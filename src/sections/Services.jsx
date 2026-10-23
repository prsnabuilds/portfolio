import { services, process } from "../content.js";

export default function Services() {
  return (
    <div className="block">
      <div className="services__list">
        {services.map((service) => (
          <div className="service" key={service.number}>
            <span className="service__number">{service.number}</span>
            <h2 className="service__title">{service.title}</h2>
            <p className="service__desc">{service.desc}</p>
            <div className="service__tags">
              {service.tags.map((tag) => (
                <span className="tag tag--dotted" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="process">
        <p className="block__kicker">/process</p>
        <h2 className="block__title">How I Work</h2>

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
    </div>
  );
}
