import React, { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  ThemeProvider,
  Typography,
} from "@mui/material";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";
import { theme } from "../Theme";

export default function Main() {
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
            backgroundColor: "#9cacad",
            height: "60px",
          }}
        >
          <Toolbar sx={{ justifyContent: "right", gap: "15px" }}>
            <Button
              onClick={() => executeScroll(aboutRef)}
              sx={{
                color: "#f7f3ef",
                borderRadius: "20px",
              }}
            >
              <Typography fontSize={"15px"} variant="h1">
                About
              </Typography>
            </Button>
            <Button
              onClick={() => executeScroll(skillsRef)}
              sx={{
                color: "#f7f3ef",
                borderRadius: "20px",
              }}
            >
              <Typography fontSize={"15px"} variant="h1">
                Skills
              </Typography>
            </Button>
            <Button
              onClick={() => executeScroll(portfolioRef)}
              sx={{
                color: "#f7f3ef",
                borderRadius: "20px",
              }}
            >
              <Typography fontSize={"15px"} variant="h1">
                Portfolio
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <Sidebar />
        <Home />
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
      </ThemeProvider>
    </div>
  );
}
