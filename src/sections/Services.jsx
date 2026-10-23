import { services } from "../content.js";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <p className="section-head__kicker">/services</p>
          <h2 className="section-head__title">What I Do</h2>
        </div>

        <div className="services__list">
          {services.map((service) => (
            <div className="service" key={service.number}>
              <div className="service__left">
                <span className="service__number">{service.number}</span>
                <h3 className="service__title">{service.title}</h3>
              </div>
              <div className="service__right">
                <p className="service__desc">{service.desc}</p>
                <div className="service__tags">
                  {service.tags.map((tag) => (
                    <span className="tag tag--dotted" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
