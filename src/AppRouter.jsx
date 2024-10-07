import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Art from "./pages/Art";
import Home from "./pages/Home";
import CarShare from "./pages/project-pages/CarShare";
import Moti from "./pages/project-pages/Moti";
import Mushroom from "./pages/project-pages/Mushroom";
import Sarratt from "./pages/project-pages/Sarratt";
import V1 from "./pages/project-pages/V1";
import V2 from "./pages/project-pages/V2";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/art" element={<Art />} />
      <Route path="/about" element={<About />} />
      <Route path="/carshare" element={<CarShare />} />
      <Route path="/moti" element={<Moti/>} />
      <Route path="/mushroom-mayhem" element={<Mushroom />} />
      <Route path="/sarratt-art-studios" element={<Sarratt />} />
      <Route path="/v1-portfolio" element={<V1 />} />
      <Route path="/v2-portfolio" element={<V2 />} />
    </Routes>
  );
}

export default AppRouter;
