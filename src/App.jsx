import React from "react";
import AppRouter from "./AppRouter"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app-container">

    <BrowserRouter basename="/dev-portfolio">
      <AppRouter />
    </BrowserRouter></div>
  );
}

export default App;
