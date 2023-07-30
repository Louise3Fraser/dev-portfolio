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
            width: 80,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            padding: 3,
            width: 80,
            backgroundColor: "#9cacad",
            boxSizing: "border-box",
            display: "flex",
            borderColor: "transparent",
            justifyContent: "flex-end",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="socials">
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
              window.open(
                "https://www.linkedin.com/in/louise-fraser-379b0b251/"
              )
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
