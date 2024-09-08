import React, { useEffect } from "react";
import "../pages-css/About.css";
import "../pages-css/Animations.css"
import { useTheme, useMediaQuery } from "@mui/material";
import Header from "../components/Header";

export default function About() {
  const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));
  
  useEffect(() => {
    const highlights = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    highlights.forEach((highlight) => {
      observer.observe(highlight);
    });

    return () => {
      highlights.forEach((highlight) => {
        observer.unobserve(highlight);
      });
    };
  }, []);

  return (
    <div className="about">
      <Header section={"About"} />
      <div
        className="about-divide fade-in-section"
        style={{ flexDirection: screenSizeSm ? "column" : "column", gap: screenSizeSm ? "0px" : "0px" }}
      >
        <div className="about-content">
          <p className="body-main" style={{ marginTop: "0px" }}>
            I am a current senior at Vanderbilt University double majoring in
            computer science and psychology. Coding and design are two things I
            love to challenge myself with. I am particularly interested in
            exploring or full-stack development. I have a solid foundation in
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
        </div>
      </div>
    </div>
  );
}
