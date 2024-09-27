import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../pages-css/Home.css";
import Projects from "../sections/Projects";

function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="headers">
        <h4 className="header-large">Hi, I'm Louise</h4>
        <h4 className="header-sub">
          Senior student at Vanderbilt, aspiring designer and coder
        </h4>
      </div>
      <Projects />
      <Footer/>
    </div>
  );
}

export default Home;
