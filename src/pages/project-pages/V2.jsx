import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import v1 from "../../media/versions/v1-big.png";
import Overview from "../../components/Overview";
import v2Vid from "../../media/versions/v2.mp4";
import v2Mockup from "../../media/versions/v2-mockup.png";

export default function V1() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
    <div className="project">
      <Navigation />
      <div className="main">
        <ProjectHeading
          title={"V2 Portfolio"}
          subTitle={"My second website"}
          tasks={["React.js", "JavaScript", "HTML/CSS", "Adobe Suite", "git"]}
          dates={"Feb. 2024"}
          img={v2Vid}
          type={"vid"}
        />
      </div>
      <Overview
        overview={
          "This is my second portfolio website I created that highlights my education, previous work experience, and personal projects."
        }
        goals={
          "To create a more sleek and modern portfolio. To gain more practice with web design/development, particularly through the use of React.js. "
        }
      />
      <img
        alt="img"
        src={v2Mockup}
        className="fade-in-section"
        style={{
          margin: "0px",
          objectFit: "contain",
          maxWidth: "100%",
          marginBottom: "-320px"
        }}
      />
      <Footer />
    </div>
  );
}
