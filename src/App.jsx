import React from "react";
import AppRouter from "./AppRouter"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/dev-portfolio">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
