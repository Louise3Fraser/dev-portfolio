import React from "react";
import { CardContent, Card, Typography, ThemeProvider } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import "../pages-css/About.css";
import { motion } from "framer-motion";
import { theme } from "../Theme";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <div className="about-header">
        {/* <Typography
            variant="h3"
            sx={{ paddingTop: 5 }}
            fontSize={"15px"}
            color="#24252b"
          >
            One of my biggest regrets is not learning about software development
            sooner. In my free time, I enjoy going to the gym, drawing, coding,
            and watching movies.
          </Typography> */}
      </div>
      <div className="experience">
        <ol type="none" className="experience-list">
          <motion.div
            className="animatable"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.007,
              transition: { duration: 0.3 },
            }}
          >
            <li className="job">
              <Card
                sx={{
                  borderRadius: "5px",
                  height: "215px",
                  backgroundColor: "#f7f3ef"
                }}
              >
                <motion.div
                  className="animatable"
                  whileHover={{
                    transition: { duration: 0.3 },
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"15px"}
                      color="#030b15"
                      variant="h2"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="title">
                        <Typography
                          variant="h2"
                          fontSize={"20px"}
                          color="#030b15"
                        >
                          Software Engineer Intern - hc1
                        </Typography>
                        <motion.button
                          whileHover={{
                            scale: 1.2,
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open("https://www.hc1.com")}
                        >
                          <CallMissedOutgoingIcon
                            style={{ color: "#030b15" }}
                          />
                        </motion.button>
                      </div>
                      <Typography
                        variant="h3"
                        fontSize={"15px"}
                        color="#31393f"
                      >
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                      </Typography>
                      <ul className="skills-used">
                        <p>Javascript</p>
                        <p>React</p>
                        <p>APIs</p>
                        <p>AWS</p>
                      </ul>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </li>
          </motion.div>

          <motion.div
            className="animatable"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.007,
              transition: { duration: 0.3 },
            }}
          >
            <li className="job">
              <Card
                sx={{
                  borderRadius: "5px",
                  height: "215px",
                  backgroundColor: "#f7f3ef"
                }}
              >
                <motion.div
                  className="animatable"
                  whileHover={{
                    transition: { duration: 0.3 },
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"15px"}
                      color="#030b15"
                      variant="h2"
                    >
                      Summer 2022
                    </Typography>
                    <div className="job-info">
                      <div className="title">
                        <Typography
                          variant="h2"
                          fontSize={"20px"}
                          color="#030b15"
                        >
                          Computer Science Intern - LifeOmic
                        </Typography>
                        <motion.button
                          whileHover={{
                            scale: 1.2,
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open("https://www.hc1.com")}
                        >
                          <CallMissedOutgoingIcon
                            style={{ color: "#030b15" }}
                          />
                        </motion.button>
                      </div>
                      <Typography
                        variant="h3"
                        fontSize={"15px"}
                        color="#31393f"
                      >
                        Created an applet with APIs for searching physicians in
                        a designated geographic region and providing physician
                        information. Developed applets and translated code using
                        React, Javascript, Typescript, and Python. Tested code
                        with unit and Cypress testing
                      </Typography>
                      <ul className="skills-used">
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>React</p>
                        <p>Python</p>
                        <p>APIs</p>
                        <p>AWS</p>
                        <p>Cypress</p>
                      </ul>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </li>
          </motion.div>

          <motion.div
            className="animatable"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.007,
              transition: { duration: 0.3 },
            }}
          >
            <li className="job">
              <Card
                sx={{
                  borderRadius: "5px",
                  height: "215px",
                  backgroundColor: "#f7f3ef"
                }}
              >
                <motion.div
                  className="animatable"
                  whileHover={{
                    transition: { duration: 0.3 },
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"15px"}
                      color="#030b15"
                      variant="h2"
                    >
                      Summer 2022
                    </Typography>
                    <div className="job-info">
                      <div className="title">
                        <Typography
                          variant="h2"
                          fontSize={"20px"}
                          color="#030b15"
                        >
                          Computer Science Intern - LifeOmic
                        </Typography>
                        <motion.button
                          whileHover={{
                            scale: 1.2,
                          }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => window.open("https://www.hc1.com")}
                        >
                          <CallMissedOutgoingIcon
                            style={{ color: "#030b15" }}
                          />
                        </motion.button>
                      </div>
                      <Typography
                        variant="h3"
                        fontSize={"15px"}
                        color="#31393f"
                      >
                        Created an applet with APIs for searching physicians in
                        a designated geographic region and providing physician
                        information. Developed applets and translated code using
                        React, Javascript, Typescript, and Python. Tested code
                        with unit and Cypress testing
                      </Typography>
                      <ul className="skills-used">
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>React</p>
                        <p>Python</p>
                        <p>APIs</p>
                        <p>AWS</p>
                        <p>Cypress</p>
                      </ul>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </li>
          </motion.div>
        </ol>
      </div>
    </ThemeProvider>
  );
}
