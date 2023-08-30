import React from "react";
import { Typography, ThemeProvider } from "@mui/material";
import { theme } from "../Theme";
import "../pages-css/Home.css";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="home-title">
        <h1 style={{ fontSize: "25px"}}>About</h1>
        <Typography
          align="left"
          variant="h3"
          fontSize={"16px"}
          color="#63605b"
          lineHeight={"25px"}
        >
          I am a current junior at Vanderbilt University double majoring in computer science and psychology. In my free
          time, I enjoy coding, drawing, playing videogames, going to the gym, and trying new cuisines.
        </Typography>
        <div className="socials">
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open("https://github.com/Louise3Fraser")}
          >
            <GitHubIcon style={{color: "black"}}/>
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
            <LinkedInIcon style={{color: "black"}}/>
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
            // onClick={() => window.open("https://www.hc1.com")}
          >
            <EmailIcon style={{color: "black"}} />
          </motion.button>
        </div>
      </div>
    </ThemeProvider>
  );
}
