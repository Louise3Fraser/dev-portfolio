import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "../pages/About";
// import Skills from "../pages/Skills";
// import Portfolio from "../pages/Portfolio";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "white",
        },
        colorSecondary: {
          backgroundColor: "white",
        },
      },
    },
  },
  typography: {
    button: {
      fontFamily: "Comic Lemon",
    },
  },
});

export default function Navbar() {
  const ref = useRef(null);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Box>
              <Button
                onClick={ref.current?.scrollIntoView({behavior: 'smooth'})}
                sx={{ color: "#9fb6d0" }}
              >
                About
              </Button>
              <Button
                onClick={() => navigate("/skills")}
                sx={{ color: "#a3ceba" }}
              >
                Skills
              </Button>
              <Button
                onClick={() => navigate("/portfolio")}
                sx={{ color: "#e95052" }}
              >
                Portfolio
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{height: '20rem'}}/>
      <About ref={ref}/>
    </ThemeProvider>
  );
}
