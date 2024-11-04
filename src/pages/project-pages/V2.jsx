import React, { useEffect } from "react";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import Overview from "../../components/Overview";
import v2Vid from "../../media/versions/v2.mp4";
import v2Mockup from "../../media/versions/v2-mockup.png";

export default function V1() {
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
          img={v2Mockup}
          type={"img"}
          bool={"yes"}
        />
      </div>
      <Overview
        overview={[
          "This is my second portfolio website I created that highlights my education, previous work experience, and personal projects.",
        ]}
        goals={[
          "To create a more sleek and modern portfolio. To gain more practice with web design/development, particularly through the use of React.js.",
        ]}
        tasks={["React.js", "JavaScript", "HTML/CSS", "Adobe Suite", "git"]}
        dates={"Feb. 2024"}
        roles={["Frontend Developer"]}
        project={"Personal Project"}
        url={"https://github.com/Louise3Fraser/dev-portfolio/tree/v1"}
      />
      <div className="project-main">
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
      </div>
      <video
        src={v2Vid}
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
