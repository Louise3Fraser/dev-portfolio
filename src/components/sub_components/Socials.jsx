import React from "react";
import "../../pages-css/Home.css";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Socials() {
  return (
    <div className="socials">
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://github.com/Louise3Fraser")}
      >
        <GitHubIcon style={{ color: "black", cursor: "pointer" }} />
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
        <LinkedInIcon style={{ color: "black", cursor: "pointer" }} />
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        // onClick={() => window.open("https://www.hc1.com")}
      >
        <EmailIcon style={{ color: "black", cursor: "pointer" }} />
      </motion.button>
    </div>
  );
}
