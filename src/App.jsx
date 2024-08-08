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
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Title from "./components/Title";
import { motion } from "framer-motion";

function App() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("sm"));

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

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

    const sections = [homeRef, experienceRef, projectsRef];
    sections.forEach(
      (section) => section.current && observer.observe(section.current)
    );

    return () =>
      sections.forEach(
        (section) => section.current && observer.unobserve(section.current)
      );
  }, []);
  const executeScroll = (ref) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  const renderMenuButton = (label, ref, section) => (
    <button
      onClick={() => executeScroll(ref)}
      sx={{
        ":hover": { bgcolor: "transparent", color: "transparent" },
        paddingLeft: "0px",
        padding: "0px",
      }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        <h4>{label}</h4>
      </motion.div>
    </button>
  );

  return (
    <div className="layout">
      <div class="container">
        <div class="blobs">
          <div class="blob a">a</div>
          <div class="blob b">b</div>
          <div class="blob c">c</div>
        </div>
      </div>
      <div className="navigation">
        {renderMenuButton("About", homeRef, "home")}
        {renderMenuButton("Experience", experienceRef, "experience")}
        {renderMenuButton("Projects", projectsRef, "projects")}
      </div>
      <div className="line"/>
      <Title />
      <div className="main">
        <div ref={homeRef} id="home" className="home">
          <About />
        </div>
        <div ref={experienceRef} id="experience" className="about">
          <Experience />
        </div>
        {/* <div ref={projectsRef} id="projects" className="projects">
          <Projects />
        </div> */}
      </div>
    </div>
  );
}

export default App;
