import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Skills() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Card
        sx={{
          width: "70%",
          backgroundColor: "transparent",
          border: "1px solid #1a1a1a",
        }}
      >
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography sx={{ fontSize: 14 }}> Testing</Typography>
            <Typography variant="h5">Test2</Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography sx={{ fontSize: 14 }}> Testing</Typography>
            <Typography variant="h5">Test2</Typography>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: "70%",
          backgroundColor: "transparent",
          border: "1px solid #1a1a1a",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }}> Testing</Typography>
          <Typography variant="h5">Test2</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
