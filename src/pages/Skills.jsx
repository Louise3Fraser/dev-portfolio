import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Skills() {
  return (
    <div style={{ height: "600px"}}>
        <div style={{ height: "50px" }} />
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }}> Testing</Typography>
          <Typography variant="h5" >
            Test2
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }}> Testing</Typography>
          <Typography variant="h5" >
            Test2
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
