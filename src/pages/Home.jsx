import React from "react";
import Footer from "../components/organization/Footer";
import Navigation from "../components/organization/Navigation";
import "../pages-css/Home.css";
import Projects from "../sections/Projects";
import l from "../media/l.png";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="headers">
        <div style={{ maxWidth: "700px" }}>
          {/* <img
            alt="img"
            src={l}
            style={{
              margin: "0px",
              objectFit: "contain",
              maxWidth: "100px",
            }}
          /> */}
          <h4 className="header-large">
            Hi, I'm Louise. I'm a senior student at Vanderbilt University,
            double majoring in computer science and psychology. I am an aspiring
            designer and coder.{" "}
          </h4>
          {/* <h4 className="header-sub">Get to know me: </h4> */}
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
