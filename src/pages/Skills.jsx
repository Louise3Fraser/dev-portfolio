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
    <div className="skills">
      <div style={{ height: 900 }} />
      {images.map((image) => {
        return (
          <Card
            key={image}
            elevation={0}
            style={{ backgroundColor: "transparent", width: "150px" }}
          >
            <CardContent>
              <img src={image} alt="cplus" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
