import React from "react";
import Footer from "../components/organization/Footer";
import Navigation from "../components/organization/Navigation";
import "../pages-css/Home.css";
import Projects from "../sections/Projects";
import star from "../media/star.png";
import Socials from "../components/Socials";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="headers">
        <h4 className="header-largest emoji-text">Hey, I'm Louise Fraser</h4>
        <h4
          className="header-bold-small emoji-text"
          style={{ maxWidth: "500px" }}
        >
          Senior student at Vanderbilt University, aspiring designer and coder.
        </h4>
        <h4 className="job">Find me here:</h4>
        <Socials />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
