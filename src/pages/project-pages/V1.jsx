import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import v1 from "../../media/versions/v1-big.png";
import Overview from "../../components/Overview";
import v1Vid from "../../media/versions/v1.mp4";
import v1Mockup from "../../media/versions/v1-mockup.png";
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
          title={"V1 Portfolio"}
          subTitle={"My first website"}
          img={v1Mockup}
          type={"img"}
          bool={"yes"}
        />
      </div>
      <Overview
        overview={
          "This is my first portfolio website I created that highlights my education, previous work experience, and personal projects. The design is 'bouncy', colorful, and fun."
        }
        goals={
          "To create a fun and vibrant portfolio that reflects my personality. To gain practice with web design/development, particularly through the use of React.js. "
        }
        tasks={["React.js", "JavaScript", "HTML/CSS", "Adobe Suite", "git"]}
        dates={"Nov. 2023"}
        roles={["Frontend Developer"]}
        project={"Personal Project"}
      />

      <h4
        className="job"
        style={{
          color: "#EA5F27",
          fontWeight: "600",
          fontSize: "14px",
          marginBottom: "40px",
        }}
      >
        DEMO
      </h4>
      <video
        src={v1Vid}
        className="card-src"
        autoPlay
        playsInline
        loop
        muted
        style={{
          margin: "0px",
          objectFit: "contain",
          maxWidth: "100%",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />

      <Footer />
    </div>
  );
}
