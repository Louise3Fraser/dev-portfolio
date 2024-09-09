import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Title from "./components/Title";
import { motion } from "framer-motion";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import flower from "./images/logo_flower.png";

function App() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));
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

  const renderDot = (ref, section) => (
    <button
      onClick={() => executeScroll(ref)}
      style={{ paddingLeft: "0px", padding: "0px" }}
    >
      <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
        {currentSection === section ? (
          <FiberManualRecordIcon sx={{ color: "#5b1136" }} fontSize="small" />
        ) : (
          <FiberManualRecordOutlinedIcon
            sx={{ color: "#5b1136" }}
            fontSize="small"
          />
        )}
      </motion.div>
    </button>
  );

  window.addEventListener("scroll", function () {
    const menu = document.querySelector(".menu-items");
    if (window.scrollY > 50) {
      menu.classList.add("shadow");
    } else {
      menu.classList.remove("shadow");
    }
  });

  return (
    <div className="layout">
     
      {screenSize ? (
        <div className="nav-dots">
          {renderDot(homeRef, "about")}
          {renderDot(experienceRef, "experience")}
          {renderDot(projectsRef, "projects")}
        </div>
      ) : (
        <div />
      )}
      <div className="landing">
        <div className="navigation">
          <img
            alt="img"
            src={flower}
            className="nav-image"
            style={{
              margin: "0px",
              objectFit: "contain",
              borderRadius: "5px",
              width: "70px",
            }}
          />
          <div className="menu-items">
            {renderMenuButton("About", homeRef, "about")}
            {renderMenuButton("Experience", experienceRef, "experience")}
            {renderMenuButton("Projects", projectsRef, "projects")}
          </div>
        </div>
        <Title mode={(homeRef, experienceRef, projectsRef)} />
      </div>
      <div className="main">
        <div id="about" ref={homeRef} className="about">
          <About />
        </div>
        <div id="experience" ref={experienceRef} className="experience">
          <Experience />
        </div>
        <div id="projects" ref={projectsRef} className="projects">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
