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
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
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
      <div className="container">
        <div className="blobs">
          <div
            className="blob a"
            style={{
              backgroundColor: mode ? "#86a3e0" : "#ff8a80",
            }}
          ></div>
          <div
            className="blob b"
            style={{
              backgroundColor: mode ? "#717fd3" : "#ffd385",
            }}
          ></div>
          <div
            className="blob c"
            style={{
              backgroundColor: mode ? "#7f7fd3" : "#ff80ab",
            }}
          ></div>
        </div>
      </div>
      {screenSize ? (
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
      )}
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
      <Title />
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
      </div>
    </div>
  );
}

export default App;
