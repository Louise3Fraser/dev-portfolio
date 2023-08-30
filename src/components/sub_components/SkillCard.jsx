import React, { useState } from "react";
import { Card, CardContent, Typography, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../pages-css/Skills.css";
import { IconButton } from "@mui/material";

export default function SkillCard({image, description}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="skill-cards">
      <Card elevation={0} style={{backgroundColor: "transparent", width: "200px" }}>
        <div className="card">
        <CardContent>
          <img src={image} alt="cplus" />
        </CardContent>
        <IconButton onClick={() => setExpanded(!expanded)}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        </div>
        <Collapse sx={{backgroundColor: "#c4c8ee"}} in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
