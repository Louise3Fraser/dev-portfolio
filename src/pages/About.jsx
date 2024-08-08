import React from "react";
import "../pages-css/About.css";
import ReactIMG from "../images/react.png";
import JavascriptIMG from "../images/javascript.png";
import PythonIMG from "../images/python.png";
import CIMG from "../images/c++.png";
import { useTheme, useMediaQuery } from "@mui/material";

const drawerWidth = 700;
export default function About() {
  const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));

  return (
    <div className="about">
      <h4 className="h4-sub">About</h4>
      <div className="line-fade-to-right" />
      <div
        className="about-divide"
        style={{ flexDirection: screenSizeSm ? "row" : "column" }}
      >
        <div className="about-content">
          <p className="body-main" style={{ marginTop: "0px" }}>
            I am a current senior at Vanderbilt University double majoring in
            <b> computer science </b> and <b> psychology</b>. Coding and design
            are two things I love to challenge myself with. I am particularly
            interested in exploring <b> frontend</b> or
            <b> full-stack</b> development. I have a solid foundation in
            JavaScript, React.js, and Python.
          </p>
          <p className="body-main">
            I have two years of internship experience where I worked as a
            software engineer intern under the mentorship of experienced
            professionals. During this time, I developed and deployed an app and
            created applets, gaining expertise in React, JavaScript, Typescript,
            Python, and AWS.
          </p>
        </div>
        <div
          className="about-skills"
          style={{ flexDirection: screenSizeSm ? "column" : "row" }}
        >
          
          <p className="body-main" style={{ marginTop: "0px" }}>
            In my free time, I enjoy drawing, watching movies/tv, reading
            fantasy novels, playing videogames, going to the gym, and trying new
            cuisines.
          </p>
          
          {/* <img alt="project-img" src={ReactIMG} style={{ maxWidth: "40px" }} />
          <img
            alt="project-img"
            src={JavascriptIMG}
            style={{ maxWidth: "40px" }}
          />
          <img alt="project-img" src={PythonIMG} style={{ maxWidth: "40px" }} />
          <img alt="project-img" src={CIMG} style={{ maxWidth: "40px" }} /> */}
        </div>
      </div>
    </div>
  );
}
