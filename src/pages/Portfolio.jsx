import React from "react";
import { CardContent, Card, Typography, ThemeProvider } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import "../pages-css/About.css";
import { motion } from "framer-motion";
import { theme } from "../Theme"

export default function Portfolio() {
  return (
    <ThemeProvider theme={theme}>
      <div className="about">
        <div className="experience">
          <ol type="none" className="experience-list">
            <motion.div
              className="animatable"
              initial={{ scale: 1, backgroundColor: "#24252b" }}
              whileHover={{
                scale: 1.001,
                backgroundColor: "#2d2e33",
                transition: { duration: 0.3 },
              }}
            >
              <li className="job">
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #030b15",
                  }}
                >
                  <CardContent>
                    <Typography
                      className="date"
                      fontSize={"15px"}
                      color="#edece8"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="title">
                        <Typography
                          variant="h2"
                          fontSize={"20px"}
                          color="#edece8"
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
                            style={{ color: "#edece8" }}
                          />
                        </motion.button>
                      </div>
                      <Typography
                        variant="h3"
                        fontSize={"15px"}
                        color="#999898"
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
                </Card>
              </li>
            </motion.div>

            <motion.div
              className="animatable"
              initial={{ scale: 1, backgroundColor: "#24252b" }}
              whileHover={{
                scale: 1.001,
                backgroundColor: "#2d2e33",
                transition: { duration: 0.3 },
              }}
            >
              <li className="job">
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #030b15",
                  }}
                >
                  <CardContent>
                    <Typography
                      className="date"
                      fontSize={"15px"}
                      color="#edece8"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="title">
                        <Typography
                          variant="h2"
                          fontSize={"20px"}
                          color="#edece8"
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
                            style={{ color: "#edece8" }}
                          />
                        </motion.button>
                      </div>
                      <Typography
                        variant="h3"
                        fontSize={"15px"}
                        color="#999898"
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
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </li>
            </motion.div>

            <motion.div
              className="animatable"
              initial={{ scale: 1, backgroundColor: "#24252b" }}
              whileHover={{
                scale: 1.001,
                backgroundColor: "#2d2e33",
                transition: { duration: 0.3 },
              }}
            >
              <li className="job">
                <Card
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid #030b15",
                  }}
                >
                  <CardContent>
                    <Typography
                      className="date"
                      fontSize={"15px"}
                      color="#edece8"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="title">
                        <Typography
                          variant="h2"
                          fontSize={"20px"}
                          color="#edece8"
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
                            style={{ color: "#edece8" }}
                          />
                        </motion.button>
                      </div>
                      <Typography
                        variant="h3"
                        fontSize={"15px"}
                        color="#999898"
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
                </Card>
              </li>
            </motion.div>
          </ol>
        </div>
        <div className="about-header">
          <Typography
            sx={{ paddingTop: 5 }}
            variant="h1"
            fontSize={"30px"}
            color="#edece8"
          >
            Nice to meet you.
          </Typography>
          <Typography
            variant="h3"
            sx={{ paddingTop: 5 }}
            fontSize={"15px"}
            color="#edece8"
          >
            One of my biggest regrets is not learning about software development
            sooner. In my free time, I enjoy going to the gym, drawing, coding,
            and watching movies.
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}
