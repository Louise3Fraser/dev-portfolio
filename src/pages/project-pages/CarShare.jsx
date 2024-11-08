import React, { useEffect } from "react";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import carshare from "../../media/carshare/carshareSolo.png";
import Overview from "../../components/Overview";
import Description from "../../components/organization/Description";

export default function CarShare() {
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
        overview={[
          "CarShare is a full-stack React app developed by me. The functionality of the app, while still in progress, is designed to reduce car trips and gas usage by providing an efficient and organized way for people to share a car. The app utilizes calendar React.js, API, MySQL database, and both frontend and backend development."
        ]}
        goals={[
          "The focus and subsequent goals with CarShare are twofold:",
          `1) Web development: The actual coding of the app. To become more accustomed with coding in
          general, particularly full-stack development.`,
          `2) Mockup: To create mockups for the visuals of the app. The
          cover screen you see above is not what the app actually looks like as of now, 
          but it is what it will look like eventually (see my Github for more information).`,
        ]}
        problem={
          "Many students make frequent trips to similar destinations, such as campuses, social events, or part-time jobs, but without an efficient system for car-sharing, they end up driving alone, leading to higher fuel consumption and more vehicles on the road."
        }
        tasks={["React.js", "MySQL", "Figma", "Illustrator"]}
        dates={"Sep. 2023 - present"}
        roles={["Software Engineer", "Designer"]}
        project={"Personal Project"}
        url={"https://github.com/Louise3Fraser/car-share"}
      />
      <div className="project-main">
        <h4
          className="job"
          style={{
            color: "#6264D3",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          CODE
        </h4>
        <Description title={"To be updated"} desc={[`...`]} images={[]} />
      </div>
      {/* <img loading="lazy"
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

      <Footer />
    </div>
  );
}
