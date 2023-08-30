import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />} />
    </Routes>
  );
}

export default AppRouter;