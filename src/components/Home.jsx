import React, { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Sidebar from "./Sidebar";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "transparent",
        },
        colorSecondary: {
          backgroundColor: "transparent",
        },
      },
    },
  },
  typography: {
    button: {
      fontFamily: "superclarendon, seriff",
      fontStyle: "normal",
      fontWeight: "500",
      textTransform: "none",
    },
  },
});

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);

  const executeScroll = (ref) => {
    ref.current && ref?.current.scrollIntoView({ behavior: "smooth" });
  };

  const drawerWidth = 450;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <ThemeProvider theme={theme}>
            <AppBar
              elevation={0}
              position="fixed"
              sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
              }}
            >
              <Toolbar sx={{ justifyContent: "right" }}>
                <Button
                  onClick={() => executeScroll(aboutRef)}
                  sx={{ color: "#1a1a1a" }}
                >
                  About
                </Button>
                <Button
                  onClick={() => executeScroll(skillsRef)}
                  sx={{ color: "#1a1a1a" }}
                >
                  Skills
                </Button>
                <Button
                  onClick={() => executeScroll(portfolioRef)}
                  sx={{ color: "#1a1a1a" }}
                >
                  Portfolio
                </Button>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={portfolioRef}>
            <Portfolio />
          </div>
        </Box>
      </Box>
    </div>
  );
}

{
  /* <Parallax pages={4} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <img src={fourth} alt="Back" style={{ width: "100%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <img src={third} alt="Middle1" style={{ width: "100%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <img src={second} alt="Middle2" style={{ width: "100%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={.4}>
          <img src={first} alt="Front" style={{ width: "100%" }} />
        </ParallaxLayer>
      </Parallax> */
}
