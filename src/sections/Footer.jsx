import Face from "../components/Face.jsx";
import { site } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <a className="brand" href="#top">
            <Face size="sm" />
            <span className="brand__name">{site.name}</span>
          </a>
          <p className="footer__note">Designed and built with intent.</p>
          <a className="footer__mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
