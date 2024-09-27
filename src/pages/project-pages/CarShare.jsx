import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/Navigation";

export default function CarShare() {
  const themeQuery = useTheme();
  const screenSize = useMediaQuery(themeQuery.breakpoints.up("md"));

  return (
    <div className="project">
      <Navigation />
      <div className="main">
        <h4 className="header-large">CarShare</h4>
        <h4 className="header-sub">Full-stack Application</h4>
      </div>
    </div>
  );
}
