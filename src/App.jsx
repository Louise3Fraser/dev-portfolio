import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Title from "./components/Title";
import { motion } from "framer-motion";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import Art from "./sections/Art";
function App() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);
  const [mode, setMode] = useState(true);

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
          <FiberManualRecordIcon sx={{ color: "#222021" }} fontSize="small" />
        ) : (
          <FiberManualRecordOutlinedIcon
            sx={{ color: "#222021" }}
            fontSize="small"
          />
        )}
      </motion.div>
    </button>
  );

  return (
    <div className="layout">
      {/* {screenSize ? (
        <div className="mode">
          <button
            onClick={() => setMode(!mode)}
            style={{ paddingLeft: "0px", padding: "0px" }}
          >
            <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
              {mode ? (
                <LightModeIcon sx={{ color: "#222021" }} fontSize="large" />
              ) : (
                <DarkModeIcon sx={{ color: "#222021" }} fontSize="large" />
              )}
            </motion.div>
          </button>
        </div>
      ) : (
        <div className="mode-relative">
          <button
            onClick={() => setMode(!mode)}
            style={{ paddingLeft: "0px", padding: "0px" }}
          >
            <motion.div className="animatable" whileHover={{ scale: 1.1 }}>
              {mode ? (
                <LightModeIcon sx={{ color: "#222021" }} fontSize="large" />
              ) : (
                <DarkModeIcon sx={{ color: "#222021" }} fontSize="large" />
              )}
            </motion.div>
          </button>
        </div>
      )} */}
      {screenSize ? (
        <div className="nav-dots">
          {renderDot(homeRef, "home")}
          {renderDot(experienceRef, "experience")}
          {renderDot(projectsRef, "projects")}
        </div>
      ) : (
        <div />
      )}
      <div className="navigation">
        {renderMenuButton("About", homeRef, "home")}
        {renderMenuButton("Experience", experienceRef, "experience")}
        {renderMenuButton("Projects", projectsRef, "projects")}
      </div>
      <div className="line" />
      <Title mode={mode} />
      {/* <div className="lower-page">
        <div className="container-full">
          <div className="blobs">
            <div
              className="blob a small"
              style={{
                backgroundColor: "#e1e1e5",
              }}
            ></div>
            <div
              className="blob b"
              style={{
                backgroundColor: "#e1e1e5",
              }}
            ></div>
            <div
              className="blob c"
              style={{
                backgroundColor: "#e1e1e5",
              }}
            ></div>
          </div>
        </div> */}
        <div className="main">
          <div ref={homeRef} id="home" className="home">
            <About />
          </div>
          <div ref={experienceRef} id="experience" className="about">
            <Experience />
          </div>
          <div ref={projectsRef} id="projects" className="projects">
            <Projects />
          </div>
          {/* <Art /> */}
        </div>
        <p>-2024-</p>
      </div>
    // </div>
  );
}

export default App;
