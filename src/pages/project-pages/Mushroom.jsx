import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/Navigation";
import mushroom from "../../media/mushroom.png";
import "../../pages-css/Animations.css";
import assets from "../../media/mushroom/assets.png";
import enemies from "../../media/mushroom/enemies.png";
import allAssets from "../../media/mushroom/all-assets.png";
import ProjectHeading from "../../components/ProjectHeading";

export default function Mushroom() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

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
      <Navigation />
      <div className="main">
        <ProjectHeading
          title={"Mushroom Mayhem"}
          subTitle={"A fun Unity platform game"}
          tasks={["Unity", "C#", "Design", "Illustrator, Procreate"]}
          dates={"Sep. 2022 - July 2023"}
          img={mushroom}
        />
        <div className="overview">
          <div className="descriptions">
            <h4 className="header-sub" style={{ flex: "1 0 34%" }}>
              Overview
            </h4>
            <p className="body-main">
              Mushroom Mayhem is a platform game created on Unity Game Engine.
              The player controls a tiny mushroom character and must navigate
              obstacles–spikes and enemies alike–to complete various levels amongst a cozy forest.
            </p>
          </div>
          <div className="descriptions">
            <h4 className="header-sub" style={{ flex: "1 0 34%" }}>
              Goals
            </h4>
            <p className="body-main">
              The goal with Mushroom Mayhem was to learn more about Unity and game development in general. In addition to writing code, the project allowed for creativity in the form of asset/sprite creation and level design. 
            </p>
          </div>
        </div>
        <h4 className="header-sub"><i class="em em-art" aria-role="presentation" aria-label="ARTIST PALETTE"></i>Assets</h4>

        <img
          alt="img"
          src={allAssets}
          className="fade-in-section"
          style={{
            margin: "0px",
            objectFit: "contain",
            maxWidth: "100%",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}
