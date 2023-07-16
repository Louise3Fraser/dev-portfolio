import React, { useRef } from "react";
import { AppBar, Box, Toolbar, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Title from "../pages/Title";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#edece8",
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

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={theme}>
            <AppBar
              elevation={0}
              position="fixed"
              sx={{
                height: "60px",
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
          <Title />
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
