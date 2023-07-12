import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {
  Typography,
  Box,
  Drawer,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderColor: "#b23a2a",
          backgroundColor: "transparent"
        }
      }
    },
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
    colorPrimary: "#1a1a1a",
    h1: {
      fontFamily: "superclarendon, seriff",
      fontStyle: "normal",
      fontWeight: "500",
      textTransform: "none",
    },
    h2: {
      fontFamily: "source-code-pro, monospace",
      fontStyle: "normal",
      fontWeight: "200",
    },
    h3: {
      fontFamily: "Baloo 2",
    },
  },
});

export default function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        sx={{
          width: 450,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 450,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div style={{ height: "200px" }} />
        <Box
          sx={{
            justifyContent: "left",
            alignContent: "left",
            marginLeft: "50px",
          }}
        >
          <Typography variant="h2" fontSize={"20px"} color="#1a1a1a">
            Hello! My name is
          </Typography>
          <Typography variant="h1" fontSize={"50px"} color="#1a1a1a">
            louise.fraser
          </Typography>
          <div style={{ height: "10px" }} />
          <Typography variant="h3" fontSize={"15px"} color="#1a1a1a">
            I am a computer science and psychology major <br />
            at Vanderbilt University. In my free time, I love to <br />
            design, watch movies, read fantasy novels, go to <br />
            the gym, and play videogames.
          </Typography>
          <div style={{ height: "300px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              // style={{ width: "fit-content" }}
            >
              <GitHubIcon />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              // style={{ width: "fit-content" }}
            >
              <LinkedInIcon />
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 0.9 }}
              // style={{ width: "fit-content" }}
            >
              <EmailIcon />
            </motion.button>
          </Box>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
}
