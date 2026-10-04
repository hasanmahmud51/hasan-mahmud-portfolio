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
    const check = () =>
      setIsDesktop(
        window.matchMedia("(pointer: fine)").matches &&
          window.innerWidth >= 900
      );

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // Create a safe history entry for the portfolio page
  useEffect(() => {
    window.history.replaceState(
      { portfolioPage: true },
      "",
      window.location.href
    );

    window.history.pushState(
      { portfolioPage: true },
      "",
      window.location.href
    );
  }, []);

  const openProject = useCallback((project) => {
  setSelected(project);
  window.location.hash = `project-${project.id}`;
}, []);

const closeProject = useCallback(() => {
  if (window.location.hash.startsWith("#project-")) {
    window.history.back();
  } else {
    setSelected(null);
  }
}, []);

 useEffect(() => {
  const handleBack = () => {
    if (!window.location.hash.startsWith("#project-")) {
      setSelected(null);
    }
  };

  window.addEventListener("hashchange", handleBack);

  return () => {
    window.removeEventListener("hashchange", handleBack);
  };
}, []);

  return (
    <div
      className="gd-root"
      style={{
        minHeight: "100vh",
        cursor: isDesktop ? "none" : "auto",
      }}
    >
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

      <ProjectModal
        project={selected}
        onClose={closeProject}
      />
    </div>
  );
}