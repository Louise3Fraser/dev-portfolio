import React, { useEffect } from "react";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import sarratt from "../../media/sarratt/sarratt.png";
import Overview from "../../components/Overview";
import old from "../../media/sarratt/oldLogo.jpg";
import newLogo from "../../media/sarratt/newLogo.png";
import "../../pages-css/Projects.css";
import sketches from "../../media/sarratt/sketches.png";
import brushes from "../../media/sarratt/sarratt-brushes.png";
import Description from "../../components/organization/Description";

export default function Sarratt() {
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
          img={sarratt}
          type={"img"}
        />
      </div>
      <Overview
        roles={["Graphic Designer"]}
        overview={
          "Sarratt Art Studios is an on-campus Vanderbilt organization offering a variety of non-credit art classes, such as pottery, jewelry making, and painting. They requested a logo redesign through 'Dores Design and I was assigned as the designer for this project."
        }
        goals={`The clients goal was to acheive something "more timeless" than the previous logo that had been in place since the founding of the studio in the 1970s. The overall goal was to create a more modern, colorful, and fresh logo.`}
        problems={"sjfa"}
        tasks={["Illustrator", "Graphic Design"]}
        dates={"Sep. 2022 - July 2023"}
        project={"Job"}
      />

      <div className="project-main">
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          DESIGN
        </h4>
        <Description
          title={"Previous design"}
          desc={[
            "The previous design had been in use since the 1970s. While it served its purpose for many years, the design was rather outdated and lacked color. A new design would be able to better represent their mission of providing a welcoming and engaging space for artists of all levels.",
          ]}
          images={[old]}
        />
        <Description
          title={"Initial ideas"}
          desc={[
            "The initial sketches and ideas for the new logo focused on more graphical elements that would directly reference some of the art tools, specifically paint brushes and palettes, used in the studios. I experimented with various brushstroke patterns and abstract shapes to create a more artistic feel.",
            "I then transformed these sketches into some prelimanary logos in illustrator.",
          ]}
          images={[sketches, brushes]}
        />
        <hr style={{ width: "12vw" }} />
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          REVISIONS
        </h4>
        <Description
          title={"Wordmark Logo"}
          desc={[
            "As we moved forward with the design process, the client and I came to the conclusion that a wordmark logo would be a better fit for the organization.",
          ]}
          images={[]}
        />
        <Description
          title={"Final design"}
          desc={[
            "The final logo design is a modern wordmark that is inspired from stained glass art. The color palette and clean typography reflect the creative atmosphere that Sarratt Art Studios fosters.",
          ]}
          images={[newLogo]}
        />
        <hr style={{ width: "12vw" }} />

        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          TAKEAWAYS
        </h4>
        <Description
          title={"Communication"}
          desc={[
            "Constant communication with the client was a must during this project. Regular feedback via email allowed us to pivot and adjust the design appropriately.",
          ]}
          images={[]}
        />
        <Description
          title={"Switch in direction"}
          desc={[
            "Midway through the design process, we faced a shift in direction. The original concept focused on a graphic-based logo that featured the brushes, but the client realized that a wordmark logo would be easier to work with moving forward. Though this change posed some challenges, it ultimately allowed us to create a design that aligned better with the studio’s modern and more timeless vision.",
          ]}
          images={[]}
        />
      </div>
      <Footer />
    </div>
  );
}
