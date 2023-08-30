import React from "react";
import { Card, CardContent, Typography, ThemeProvider } from "@mui/material";
import AWS from "../images/aws.png";
import cplus from "../images/c++.png";
import java from "../images/java.png";
import javascript from "../images/javascript.png";
import python from "../images/python.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import "../pages-css/Skills.css";
import { theme } from "../Theme";

const images = [java, javascript, cplus, react, python, typescript, AWS];

export default function Skills() {
  return (
    <ThemeProvider theme={theme}>
      <h1 style={{ fontSize: "25px" }}>Skills</h1>
      <div className="skills-section">
        

        {images.map((image) => {
          return (
            <div key={image}>
              <img src={image} style={{ maxWidth: "100px" }} />
            </div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}
