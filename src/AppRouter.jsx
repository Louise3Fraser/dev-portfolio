import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import CarShare from "./pages/project-pages/CarShare";
import Mushroom from "./pages/project-pages/Mushroom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/carshare" element={<CarShare />} />
      <Route path="/mushroom-mayhem" element={<Mushroom />} />
    </Routes>
  );
}

export default AppRouter;
