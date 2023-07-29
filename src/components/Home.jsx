import React, { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Sidebar from "./Sidebar";
import { theme } from "../Theme";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const titleRef = useRef(null);
  const executeScroll = (ref) => {
    ref.current && ref?.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            height: "60px",
          }}
        >
          <Toolbar sx={{ justifyContent: "right", gap: "15px" }}>
            <IconButton onClick={() => executeScroll(titleRef)}>
              <KeyboardArrowUpIcon />
            </IconButton>
            <Button
              onClick={() => executeScroll(aboutRef)}
              sx={{
                color: "#030b15",
                backgroundColor: "#b0c5fa",
                borderRadius: "20px",
              }}
            >
              About
            </Button>
            <Button
              onClick={() => executeScroll(skillsRef)}
              sx={{
                color: "#030b15",
                backgroundColor: "#f5bdad",
                borderRadius: "20px",
              }}
            >
              Skills
            </Button>
            <Button
              onClick={() => executeScroll(portfolioRef)}
              sx={{
                color: "#030b15",
                backgroundColor: "#ceb7fa",
                borderRadius: "20px",
              }}
            >
              Portfolio
            </Button>
          </Toolbar>
        </AppBar>
        <div className="main-layout">
          <Sidebar />
          <div className="main">
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={skillsRef}>
              <Skills />
            </div>
            <div ref={portfolioRef}>
              <Portfolio />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
