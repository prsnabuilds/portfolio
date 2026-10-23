import TopBar from "./components/TopBar.jsx";
import Hero from "./sections/Hero.jsx";
import Works from "./sections/Works.jsx";
import Services from "./sections/Services.jsx";
import Process from "./sections/Process.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <hr className="divider" />
        <Works />
        <hr className="divider" />
        <Services />
        <hr className="divider" />
        <Process />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
