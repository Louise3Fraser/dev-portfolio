import React, {useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout"
import "./App.css";
import Design from "./images/portfolio_background.png"

function App() {
  return (
    <div className="App">
      {/* <div className="top-image-container">
        <img className="logo" src={Design} alt="design" />
      </div> */}
      <Layout />
    </div>
  );
}

export default App;
