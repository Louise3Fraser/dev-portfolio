import React, { useRef, useEffect, useState } from "react";
import "../pages-css/Art.css";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../components/organization/Navigation";
import Footer from "../components/organization/Footer";
import iceland from "../media/example-work/iceland.jpg";
import invusion1 from "../media/example-work/invusion-1.png";
import invusion2 from "../media/example-work/invusion-2.png";
import lambda from "../media/example-work/lambda.png";
import shape from "../media/example-work/shape.png";
import vitality from "../media/example-work/vitality.png";
import marshmallow from "../media/example-work/marshmallow.png";
import asce from "../media/example-work/asce.png";
import design from "../media/example-work/design.png";
import ace from "../media/example-work/ace.png";
import vitalityPoster from "../media/example-work/vitality-poster.png";
import sail from "../media/example-work/sail.png";
import stickers from "../media/example-work/stickers.png";
import portrait from "../media/example-work/portrait.png";
import vandy from "../media/example-work/vandy.png";
import portrait2 from "../media/example-work/portrait2.png";
import cafe from "../media/example-work/cafe.png";
import anchorLogo from "../media/example-work/anchor-logo.png";

export default function Art() {
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
    <div className="art-wrapper">
      <Navigation />
      <div
        style={{ marginTop: "100px", marginLeft: "10vw", marginRight: "10vw" }}
      >
        <p className="header-bold">Selected Art</p>

        <p
          style={{
            maxWidth: screenSize ? "50%" : "100%",
            paddingBottom: "20px",
            paddingTop: "10px",

          }}
          className="body-main"
        >
          A lot of my artwork comes from my graphic design job at 'Dores Design!
          (formerly called "Ace Design").
        </p>
        <p
          style={{
            maxWidth: screenSize ? "50%" : "100%",
            paddingBottom: "40px",
          }}
          className="body-main"
        >
          I enjoy experimenting with bright colors and interesting shapes.
          <i
            class="em em-lower_left_paintbrush"
            aria-role="presentation"
            aria-label=""
          ></i>
        </p>
        <div className="masonry-grid">
          <div className="masonry-column">
            <img
              alt="img"
              src={iceland}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={sail}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={shape}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={stickers}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={anchorLogo}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="masonry-column">
            <img
              alt="img"
              src={marshmallow}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={lambda}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={invusion1}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={invusion2}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />{" "}
            <img
              alt="img"
              src={asce}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={cafe}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="masonry-column">
            <img
              alt="img"
              src={vitality}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={ace}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={design}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={portrait}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={vitalityPoster}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={portrait2}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              alt="img"
              src={vandy}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
