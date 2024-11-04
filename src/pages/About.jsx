import React from "react";
import "../pages-css/About.css";
import AboutMain from "../sections/AboutMain";
import Navigation from "../components/organization/Navigation";
import Footer from "../components/organization/Footer";

export default function About() {
  return (
    <div className="about-wrapper">
      <Navigation />
      <div className="about">
        <div className="main-about">
          <AboutMain />
        </div>
      </div>
      <Footer />
    </div>
  );
}
