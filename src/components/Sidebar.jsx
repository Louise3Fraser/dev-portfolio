import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { ThemeProvider, Typography, Drawer } from "@mui/material";
import { motion } from "framer-motion";
import "../pages-css/Sidebar.css";
import { theme } from "../Theme";


export default function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
        <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 500,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
      <div className="sidebar">
        <div className="title-main">
          <Typography variant="h2" fontSize={"20px"} color="#030b15">
            Hello! My name is
          </Typography>
          <Typography variant="h1" fontSize={"70px"} color="#030b15">
            Louise Fraser
          </Typography>
          <div style={{ height: "10px" }} />
          <Typography variant="h3" fontSize={"15px"} color="#030b15">
            I am a full time student at Vanderbilt University, studying <br />
            computer science and psychology.
          </Typography>
        </div>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open("https://github.com/Louise3Fraser")}
        >
          <GitHubIcon />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/louise-fraser-379b0b251/")
          }
        >
          <LinkedInIcon />
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          // onClick={() => window.open("https://www.hc1.com")}
        >
          <EmailIcon />
        </motion.button>
        
      </div>
      </Drawer>
    </ThemeProvider>
  );
}
