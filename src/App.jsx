import { useEffect, useState } from "react";
import Face from "./components/Face.jsx";
import PillNav from "./components/PillNav.jsx";
import Footer from "./sections/Footer.jsx";
import Works from "./sections/Works.jsx";
import Services from "./sections/Services.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import { hero } from "./content.js";

const TABS = ["works", "services", "about", "contact"];

const TAB_CONTENT = {
  works: Works,
  services: Services,
  about: About,
  contact: Contact,
};

function routeFromHash() {
  const id = window.location.hash.replace("#", "");
  return TABS.includes(id) ? id : "works";
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash());

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const Tab = TAB_CONTENT[route];

  return (
    <main className="page">
      <div className="hero">
        <Face size="lg" />

        <div className="hero__intro">
          <h1 className="hero__title">
            {hero.titleWake}
            <em>{hero.titleName}</em>
          </h1>
          <p className="hero__sub">{hero.sub}</p>
        </div>

        <PillNav active={route} />

        <div className="tab-content" key={route}>
          <Tab />
        </div>
      </div>

      <Footer />
    </main>
  );
}
