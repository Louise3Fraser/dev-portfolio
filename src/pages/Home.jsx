import React from "react";
import Footer from "../components/organization/Footer";
import Navigation from "../components/organization/Navigation";
import "../pages-css/Home.css";
import Projects from "../sections/Projects";
import star from "../media/star.png";
import Socials from "../components/Socials";
import Upcoming from "../sections/Upcoming";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="headers">

        <p  className="header-largest">Hi, I'm Louise Fraser. </p>
        <p  className="header-largest">Senior student at Vanderbilt, aspiring designer and coder. </p>

        {/* <Socials /> */}
      </div>
      <Projects />
      <Upcoming/>
      <Footer />
    </div>
  );
}

export default Home;
