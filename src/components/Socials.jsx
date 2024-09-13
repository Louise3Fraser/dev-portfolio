import React, { useState } from "react";
import "../pages-css/MainSections.css";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Tooltip from "@mui/material/Tooltip";

export default function Socials() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="socials">
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://github.com/Louise3Fraser")}
      >
        <GitHubIcon
          className="fade-in fade-in-4"
          style={{ color: "black", cursor: "pointer" }}
        />
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
        <LinkedInIcon
          className="fade-in fade-in-5"
          style={{ color: "black", cursor: "pointer" }}
        />
      </motion.button>
      {copied ? (
        <Tooltip title="Email Copied!" placement="top">
          <motion.button
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AssignmentTurnedInIcon
              style={{ color: "black", cursor: "pointer" }}
            />
          </motion.button>
        </Tooltip>
      ) : (
        <motion.button
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            navigator.clipboard.writeText("louise.b.fraser@vanderbilt.edu");
            setCopied(true);
          }}
        >
          <EmailIcon
            className="fade-in fade-in-6"
            style={{ color: "black", cursor: "pointer" }}
          />
        </motion.button>
      )}
    </div>
  );
}
