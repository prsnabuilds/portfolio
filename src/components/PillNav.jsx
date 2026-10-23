import { hero } from "../content.js";

export default function PillNav({ active }) {
  return (
    <nav className="pillnav" aria-label="Primary">
      {hero.nav.map((item) => {
        const id = item.href.replace("#", "");
        return (
          <a
            key={id}
            href={item.href}
            className={`pillnav__item${active === id ? " is-active" : ""}`}
            aria-current={active === id ? "page" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
