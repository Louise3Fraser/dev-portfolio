import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import carshare from "../../media/carshare/carshareSolo.png";
import Overview from "../../components/Overview";
import Callouts from "../../components/cards/Callouts";
import steps from "../../media/Steps.png";
export default function CarShare() {
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
          title={"CarShare"}
          subTitle={
            "Organizing the sharing of a car while optimizing gas usage and making payments fair"
          }
          img={carshare}
          type={"img"}
          //   projectType={"Personal Project"}
        />
      </div>
      <Overview
        overview={
          "CarShare is a full-stack React app developed by me. The functionality of the app, while still in progress, is designed to reduce car trips and gas usage by providing an efficient and organized way for people to share a car. The app utilizes calendar React.js, API, MySQL database, and both frontend and backend development."
        }
        goals={
          "The goals with CarShare were twofold.  1) Web development: The actual coding of the app. 2) UX/UI design and research"
        }
        problem={
          "Many students make frequent trips to similar destinations, such as campuses, social events, or part-time jobs, but without an efficient system for car-sharing, they end up driving alone, leading to higher fuel consumption and more vehicles on the road."
        }
        tasks={["React.js", "MySQL", "Figma", "Illustrator"]}
        dates={"Sep. 2022 - July 2023"}
        roles={["Software Engineer", "UX/UI Designer"]}
        project={"Personal Project"}
      />
      {/* <img
          alt="img"
          src={steps}
          className="fade-in-section"
          style={{
            margin: "0px",
            objectFit: "contain",
            maxWidth: "50vw",
            display:"flex",
            alignSelf: "center"
          }}
        /> */}
      <Callouts
        items={[
          "Compromising with busy conflicting schedules and sharing gas.",
          "Scheduling conflicts!",
          "The biggest problem is definitely tracking gas usage.",
        ]}
      />
      <Footer />
    </div>
  );
}
