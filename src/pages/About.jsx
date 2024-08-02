import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../Theme";
import "../pages-css/About.css";

export default function About() {
  return (
      <div className="about">
        <h4>Louise Faser</h4>
        <div className="about-content">
          <p className="body-main">
            I am a current senior at Vanderbilt University double majoring in
            <b> computer science </b> and <b> psychology</b>.
          </p>
          <p className="body-main">
            Coding and design are two things I love to challenge myself with. I
            am particularly interested in exploring <b> frontend</b> or{" "}
            <b>full-stack</b> development. I have a solid foundation in
            JavaScript, React.js, and Python.
          </p>
          <p className="body-main">
            I have two years of internship experience where I worked as a
            software engineer intern under the mentorship of experienced
            professionals. During this time, I developed and deployed an app and
            created applets, gaining expertise in React, JavaScript, Typescript,
            Python, and AWS.
          </p>
          <p className="body-main">
            In my free time, I enjoy drawing, watching movies/tv, reading
            fantasy novels, playing videogames, going to the gym, and trying new
            cuisines.
          </p>
        </div>
      </div>
  );
}
