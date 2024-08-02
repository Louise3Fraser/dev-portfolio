import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import {
  ThemeProvider,
  Button,
  Drawer,
  useMediaQuery,
  useTheme,
  Box,
  AppBar,
} from "@mui/material";
import Experience from "./pages/Experience"
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

function App() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, experienceRef, portfolioRef];
    sections.forEach(
      (section) => section.current && observer.observe(section.current)
    );

    return () =>
      sections.forEach(
        (section) => section.current && observer.unobserve(section.current)
      );
  }, []);

  return (
    <div className="layout">
      <div className="navigation">
        <h4>about</h4>
        <h4>experience</h4>
        <h4>projects</h4>
      </div>

      <div className="main">
        <div ref={homeRef} id="home" className="home">
          <About />
        </div>
        <div ref={experienceRef} id="experience" className="about">
          <Experience />
        </div>
        <div ref={portfolioRef} id="portfolio" className="portfolio">
          <Portfolio />
        </div>
      </div>
      {/* {screenSize ? (
        <div className="main-full">
          <Sidebar
            homeRef={homeRef}
            experienceRef={experienceRef}
            portfolioRef={portfolioRef}
            currentSection={currentSection}
          />
          <MainFull
            homeRef={homeRef}
            experienceRef={experienceRef}
            portfolioRef={portfolioRef}
          />
        </div>
      ) : (
        <MainCompact
          homeRef={homeRef}
          experienceRef={experienceRef}
          portfolioRef={portfolioRef}
        />
      )} */}
    </div>
  );
}

export default App;
