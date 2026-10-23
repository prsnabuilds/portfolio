import { contact, site } from "../content.js";

export default function Contact() {
  return (
    <div className="block contact">
      <p className="block__kicker">{contact.kicker}</p>
      <h2 className="contact__title">{contact.title}</h2>

      <div className="contact__tray">
        <a className="contact__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="cta" href={`mailto:${site.email}`}>
          {site.cta}
        </a>
      </div>
    </div>
  );
}
