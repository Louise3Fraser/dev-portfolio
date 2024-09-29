import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import mushroom from "../../media/mushroom/mushroom.png";
import "../../pages-css/Animations.css";
import "../../pages-css/Projects.css";
import allAssets from "../../media/mushroom/all-assets.png";
import ProjectHeading from "../../components/ProjectHeading";
import Footer from "../../components/organization/Footer";
import Overview from "../../components/Overview";
import Colors from "../../media/mushroom/colors.png";
import vid from "../../media/mushroom/mushroom.mp4";

export default function Mushroom() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    // const bodyMainElements = document.querySelectorAll(".body-main");
    // const jobElements = document.querySelectorAll(".job");
    // const headerElements = document.querySelectorAll(".header-bold");

    // bodyMainElements.forEach((element) => {
    //   element.classList.add("fade-in-section");
    // });
    // headerElements.forEach((element) => {
    //     element.classList.add("fade-in-section");
    //   });
  

    // jobElements.forEach((element) => {
    //     element.classList.add("fade-in-section");
    //   });

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
          title={"Mushroom Mayhem"}
          subTitle={"A Unity platform game"}
          tasks={["Unity", "C#", "Design", "Illustrator, Procreate"]}
          dates={"Sep. 2022 - July 2023"}
          img={mushroom}
          type={"img"}
          url={"https://github.com/lisaliuu/Mushroom-Mayhem"}
          team={"Lisa Liu"}
        />

        <Overview
          overview={
            "Mushroom Mayhem is a platform game created on Unity Game Engine. The player controls a tiny mushroom character and must navigate obstacles–spikes and enemies alike–to complete various levels amongst a cozy forest."
          }
          goals={
            "The goal with Mushroom Mayhem was to learn more about Unity and game development in general. In addition to writing code, the project allowed for creativity in the form of asset/sprite creation and level design."
          }
        />

        <div className="narrow">
          <h4 className="header-bold">Design</h4>
          <p style={{ marginTop: "-20px" }} className="body-main">
            We knew we wanted the game to be fun, brightly colored, and
            "bouncy", akin to a cartoon mushroom. We were inspired by various
            childhood games we grew up playing, such as the "Red Ball" series. A
            classic platform game has platforms, various enemies/obstacles, and
            interesting scenery. To achieve this aspect of scenery, we
            implemented a the parallax effect on the background.
          </p>
          <p style={{ marginTop: "-20px" }} className="body-main">
            The art of the game was hand drawn/created using Adobe Illustrator
            and Procreate.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: screenSize ? "row" : "column",
              gap: "70px",
            }}
          >
            <div style={{ flex: "1" }}>
              <p className="job">Game Adjectives</p>
              <p className="body-main">• Fun</p>
              <p className="body-main">• Colorful</p>
              <p className="body-main">• Playful</p>
              <p className="body-main">• Bouncy</p>
              <p className="body-main">• Contrasted</p>
            </div>
            <div style={{ flex: "1" }}>
              <p className="job">Colors</p>
              <img
                alt="img"
                src={Colors}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="full-width-section">
          <img
            alt="img"
            src={allAssets}
            style={{
              maxWidth: screenSize ? "50%" : "70%",
            }}
          />
        </div>
        <div className="narrow">
          <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
            <div style={{ flex: "1" }}>
              <p className="job">Scenery</p>
              <p className="body-main">
                The levels are set in a lush green forest. Many layered
                backgrounds to create parallax effect.
              </p>
            </div>
            <div style={{ flex: "1" }}>
              <p className="job">Sprites</p>
              <p className="body-main">• Mushroom: controlled by player</p>
              <p className="body-main">
                • Enemies: mushrooms, spikes, water, lava, etc.
              </p>
              <p className="body-main">• Platforms</p>
              <p className="body-main">
                • Checkpoint flags: signaling save points throughout a level
              </p>
            </div>
          </div>
          <h4 className="header-bold">Code + Results</h4>
          <video
            src={vid}
            className="card-src"
            autoPlay
            playsInline
            loop
            muted
            style={{
              margin: "0px",
              objectFit: "contain",
              maxWidth: "100%",
            }}
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
            <div style={{ flex: "1" }}>
              <p className="job">Parallax</p>
              <p className="body-main">
                • Effect used on foliage backgrounds to create the illusion of
                depth and perspective.
              </p>
            </div>
            <div style={{ flex: "1" }}>
              <p className="job">Levels</p>
              <p className="body-main">• 5 assorted levels</p>
              <p className="body-main">
                • Each approximately 40s long (from start to finish)
              </p>
            </div>
          </div>
          <h4 className="header-bold">Takeaways</h4>
          <div className="descriptions">
            <h4 className="job" style={{ flex: "1 0 34%" }}>
              Organization
            </h4>
            <p className="body-main">
              Part of working with Unity required learning to be very organized
              with our art and code (clear and consistent naming, folder
              organization, etc.){" "}
            </p>
          </div>
          <div className="descriptions">
            <h4 className="job" style={{ flex: "1 0 34%" }}>
              Teamwork
            </h4>
            <p className="body-main">
              Communication was key throughout this project. Lisa and I created
              set meet times in order to ensure our consistent progress with the
              game. We collaborated on Github and in person, held discussions,
              created pull requests, etc.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
