import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Skills" element={<Skills/>}/>
      <Route exact path="/Portfolio" element={<Portfolio/>}/>
    </Routes>
  );
}

export default AppRouter;