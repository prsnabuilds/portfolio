import Face from "../components/Face.jsx";
import { site } from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#works">
        <Face size="sm" />
        <span className="brand__name">{site.name}</span>
      </a>
      <a className="footer__mail" href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </footer>
  );
}
