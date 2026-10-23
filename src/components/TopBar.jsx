import Face from "./Face.jsx";
import { site } from "../content.js";

export default function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="#top">
        <Face size="sm" />
        <span className="brand__name">{site.name}</span>
      </a>
      <a className="cta" href="#contact">
        {site.cta}
      </a>
    </header>
  );
}
