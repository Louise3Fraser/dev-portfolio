import iceland from "../images/example-work/iceland.jpg";
import invusion1 from "../images/example-work/invusion-1.png";
import invusion2 from "../images/example-work/invusion-2.png";
import lambda from "../images/example-work/lambda.png";
import studio from "../images/example-work/studio.png";
import studioLogo from "../images/example-work/studio-logos.png";
import studioDark from "../images/example-work/studio-dark.png";
import pie from "../images/example-work/pie.png";
import shape from "../images/example-work/shape.png";
import vitality from "../images/example-work/vitality.png";

import marshmallow from "../images/example-work/marshmallow.png";
import { motion } from "framer-motion";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "../pages-css/Art.css";
const images = [iceland, invusion1, shape, vitality, invusion2, marshmallow, lambda, studio, studioDark,studioLogo, pie];

export default function Art() {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className="art">
      <h4 className="h4-sub">Graphic Design</h4>
      <div className="line-fade-to-right" />
      <div className="rows" style={{flexDirection: screenSizeSm ? "row" : "column",}} >
        <div className="col">
          {images.slice(0, 5).map((img) => {
            return (
              <motion.div
                key={img}
                className="animatable"
                whileHover={{
                  scale: 1.01,
                }}
              >
                <img
                  alt="project-img"
                  src={img}
                  style={{
                    margin: "0px",
                    maxWidth: "100%",
                    paddingBottom: "25px",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
       
        <div className="col">
          {images.slice(5, 11).map((img) => {
            return (
              <motion.div
                key={img}
                className="animatable"
                whileHover={{
                  scale: 1.01,
                }}
              >
                <img
                  alt="project-img"
                  src={img}
                  style={{
                    margin: "0px",
                    maxWidth: "100%",
                    paddingBottom: "25px",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
