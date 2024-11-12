import React from "react";
import arrow from "../../media/arrow.png";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Question({ content }) {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: screenSizeSm ? "1fr 1.75fr" : "1fr",
        gap: "20px",
        alignItems: "start",
        marginBottom: "100px",
      }}
    >
      <div></div>
      <div>{content} </div>
    </div>
  );
}
