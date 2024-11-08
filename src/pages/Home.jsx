import React from "react";
import Footer from "../components/organization/Footer";
import Navigation from "../components/organization/Navigation";
import "../pages-css/Home.css";
import Projects from "../sections/Projects";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="headers">
        <p className="header-largest">
          Hi there, I'm Louise Fraser.
          <i
            style={{ height: "40px" }}
            class="em em-sparkles"
            aria-role="presentation"
            aria-label="SPARKLES"
          ></i>
        </p>
        <p className="header-largest">
          Upcoming graduate at Vanderbilt University,
        </p>
        <p className="header-largest">aspiring product designer.{" "}
        </p>
      </div>
      <Projects />
      {/* <Upcoming/> */}
      <Footer />
    </div>
  );
}

export default Home;
