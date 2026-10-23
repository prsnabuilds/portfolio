import { useEffect, useState } from "react";
import { hero } from "../content.js";

const SECTION_IDS = hero.nav.map((n) => n.href.replace("#", ""));

export default function PillNav() {
  const [active, setActive] = useState("works");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="pillnav" aria-label="Primary">
      {hero.nav.map((item) => {
        const id = item.href.replace("#", "");
        return (
          <a
            key={id}
            href={item.href}
            className={`pillnav__item${active === id ? " is-active" : ""}`}
            aria-current={active === id ? "true" : undefined}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
