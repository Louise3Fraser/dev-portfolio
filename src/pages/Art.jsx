import React, { useEffect } from "react";
import "../pages-css/Art.css";
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
import art1 from "../media/example-work/art-1.JPG";
import art2 from "../media/example-work/art-2.JPG";
import art3 from "../media/example-work/art-3.JPG";
import art4 from "../media/example-work/art-4.png";
import mushroom2 from "../media/example-work/mushrrom-2.png";
import lisa from "../media/example-work/lisa.png";

export default function Art() {
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="header-bold-large fade-in-section">Selected Art</p>

        <p
          style={{
            paddingBottom: "40px",
            paddingTop: "20px",
            maxWidth: "100%",
          }}
          className="body-main fade-in-section"
        >
          Here's a small collection of some art I've made throughout the years.
          A lot of my artwork comes from my graphic design job at 'Dores Design!
          (formerly called "Ace Design"). I enjoy experimenting with bright
          colors and interesting shapes.
        </p>

        <div className="masonry-grid">
          <div className="masonry-column">
            <img
              loading="eager"
              alt="img"
              src={iceland}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={sail}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />

            <img
              loading="eager"
              alt="img"
              src={art1}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={shape}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={mushroom2}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={stickers}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={art4}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={anchorLogo}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="masonry-column">
            <img
              loading="eager"
              alt="img"
              src={marshmallow}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={lambda}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={invusion1}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={art3}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={invusion2}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={lisa}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={asce}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={cafe}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
          </div>

          <div className="masonry-column">
            <img
              loading="eager"
              alt="img"
              src={design}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={portrait}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={vitality}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={art2}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={ace}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />

            <img
              loading="eager"
              alt="img"
              src={vitalityPoster}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
              alt="img"
              src={portrait2}
              className="nav-image fade-in-section"
              style={{ margin: "0px" }}
            />
            <img
              loading="eager"
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
