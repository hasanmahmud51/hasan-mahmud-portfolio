import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ProjectModal from "./components/ProjectModal";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientCursor from "./components/common/AmbientCursor";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openProject = useCallback((p) => setSelected(p), []);
  const closeProject = useCallback(() => setSelected(null), []);

  return (
    <div className="gd-root" style={{ minHeight: "100vh", cursor: isDesktop ? "none" : "auto" }}>
      <div className="golden-background">
  <div className="golden-glow"></div>
  <div className="golden-arc"></div>
</div>
      <AmbientCursor active={isDesktop} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio onOpen={openProject} />
        <Services />
        <Experience />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={closeProject} />
    </div>
  );
}
