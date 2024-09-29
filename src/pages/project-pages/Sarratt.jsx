import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import sarratt from "../../media/sarratt/sarratt.png";
import Overview from "../../components/Overview";
import old from "../../media/sarratt/oldLogo.jpg";
import newLogo from "../../media/sarratt/newLogo.png";
import "../../pages-css/Projects.css";
import Callouts from "../../components/cards/Callouts";

const issues = ["Outdated", "Lacks color"];
export default function Sarratt() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

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
          title={"Sarratt Art Studios"}
          subTitle={"Logo Redesign"}
          tasks={["Illustrator", "Graphic Design"]}
          dates={"Sep. 2022 - July 2023"}
          img={sarratt}
          type={"img"}
          projectType={"'Dores Design Job"}
        />
      </div>
      <Overview
        overview={
          "Sarratt Art Studios is a on campus Vanderbilt organization offering a variety of non-credit art classers, such as pottery, jewelry making, and painting.   "
        }
        goals={"Rebrand the Sarrat a more modern, colorful, and fresh"}
        problems={"sjfa"}
      />
      <Callouts items={["Something more timeless would be good!"]} />
      {/* <h4 className="header-large">Improvements</h4> */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="row">
          <h4 className="header-sub" style={{ flex: "1 0 34%" }}>
            Previous Design
          </h4>
          <img
            alt="img"
            src={old}
            className="fade-in-section"
            style={{
              margin: "0px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
          <div>
            <p className="job">Issues</p>
            {issues.map((issue) => {
              return <p className="body-main">{issue}</p>;
            })}
          </div>
        </div>
        <div>
          <p>Updated Design:</p>
          <img
            alt="img"
            src={newLogo}
            className="fade-in-section"
            style={{
              margin: "0px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
