import React, {useEffect} from "react";
import "../pages-css/About.css";
import ReactIMG from "../images/react.png";
import JavascriptIMG from "../images/javascript.png";
import PythonIMG from "../images/python.png";
import CIMG from "../images/c++.png";
import { useTheme, useMediaQuery } from "@mui/material";
import Header from "../components/Header";

const drawerWidth = 700;
export default function About() {
  const themeQuery = useTheme();
  const screenSizeSm = useMediaQuery(themeQuery.breakpoints.up("sm"));

  useEffect(() => {
    const highlights = document.querySelectorAll('.highlight');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
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
      <Header section={"About"}/>
      <div
        className="about-divide"
        style={{ flexDirection: screenSizeSm ? "row" : "column" }}
      >
        <div className="about-content">
          <p className="body-main" style={{ marginTop: "0px" }}>
            I am a current senior at Vanderbilt University double majoring in
            <span className="highlight"> computer science </span> and <span className="highlight"> psychology</span>. Coding and design
            are two things I love to challenge myself with. I am particularly
            interested in exploring <span className="highlight">frontend</span> or
            <span className="highlight"> full-stack</span> development. I have a solid foundation in
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
          {/* <iframe src="https://giphy.com/embed/7FyJRiFXdMggdT3Y8y" width="280" height="280"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
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
