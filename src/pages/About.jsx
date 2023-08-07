import React from "react";
import { Typography, ThemeProvider, Card, CardContent } from "@mui/material";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import { motion } from "framer-motion";
import "../pages-css/Title.css";
import { theme } from "../Theme";

const hc1 = ["Javascript", "React", "APIs", "AWS"];
export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <div className="about-divide">
        <div className="main-about">
          <Typography fontSize={"12px"} color="#ee7857">
            I was born and raised in Indianapolis, Indiana. One of my biggest
            regrets is not learning about software development sooner. In my
            free time, I enjoy going to the gym, drawing, coding, and watching
            movies.
          </Typography>
          <div className="name-rotate">
            <Typography variant="h1" fontSize={"40px"} color="#ee7857">
              About
            </Typography>
          </div>
        </div>
        <div className="experience">
          <ol type="none" className="experience-list">
            <div className="list-row">
              <li className="job">
                <Card
                  sx={{
                    borderRadius: "0px",
                    maxHeight: "400vh",
                    maxWidth: "450vh",
                    backgroundColor: "#ead0be",
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"12px"}
                      color="#f7f3ef"
                      variant="h1"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="link">
                        <Typography
                          variant="h1"
                          fontSize={"20px"}
                          color="#ee7857"
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
                            style={{ color: "#f7f3ef" }}
                          />
                        </motion.button>
                      </div>
                      <Typography fontSize={"14px"} color="#ee7857">
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                      </Typography>
                      <div className="skills">
                        {hc1.map((skill) => {
                          return (
                            <motion.div
                              key={skill}
                              className="animatable"
                              whileHover={{
                                scale: 1.07,
                              }}
                            >
                              <div className="skill">
                                <Typography
                                  variant="h1"
                                  color="#f7f3ef"
                                  fontSize={"12px"}
                                >
                                  {skill}
                                </Typography>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>

              <li className="job">
                <Card
                  sx={{
                    borderRadius: "0px",
                    maxHeight: "400vh",
                    maxWidth: "450vh",
                    backgroundColor: "#ead0be",
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"12px"}
                      color="#f7f3ef"
                      variant="h1"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="link">
                        <Typography
                          variant="h1"
                          fontSize={"20px"}
                          color="#ee7857"
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
                            style={{ color: "#f7f3ef" }}
                          />
                        </motion.button>
                      </div>
                      <Typography fontSize={"14px"} color="#ee7857">
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                      </Typography>
                      <div className="skills">
                        {hc1.map((skill) => {
                          return (
                            <motion.div
                              key={skill}
                              className="animatable"
                              whileHover={{
                                scale: 1.07,
                              }}
                            >
                              <div className="skill">
                                <Typography
                                  variant="h1"
                                  color="#f7f3ef"
                                  fontSize={"12px"}
                                >
                                  {skill}
                                </Typography>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            </div>

            <div className="list-row">
              <li className="job">
                <Card
                  sx={{
                    borderRadius: "0px",
                    maxHeight: "400vh",
                    maxWidth: "450vh",
                    backgroundColor: "#ead0be",
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"12px"}
                      color="#f7f3ef"
                      variant="h1"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="link">
                        <Typography
                          variant="h1"
                          fontSize={"20px"}
                          color="#ee7857"
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
                            style={{ color: "#f7f3ef" }}
                          />
                        </motion.button>
                      </div>
                      <Typography fontSize={"14px"} color="#ee7857">
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                      </Typography>
                      <div className="skills">
                        {hc1.map((skill) => {
                          return (
                            <motion.div
                              key={skill}
                              className="animatable"
                              whileHover={{
                                scale: 1.07,
                              }}
                            >
                              <div className="skill">
                                <Typography
                                  variant="h1"
                                  color="#f7f3ef"
                                  fontSize={"12px"}
                                >
                                  {skill}
                                </Typography>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>

              <li className="job">
                <Card
                  sx={{
                    borderRadius: "0px",
                    maxHeight: "400vh",
                    maxWidth: "450vh",
                    backgroundColor: "#ead0be",
                  }}
                >
                  <CardContent sx={{ padding: "20px" }}>
                    <Typography
                      className="date"
                      fontSize={"12px"}
                      color="#f7f3ef"
                      variant="h1"
                    >
                      Summer 2023
                    </Typography>
                    <div className="job-info">
                      <div className="link">
                        <Typography
                          variant="h1"
                          fontSize={"20px"}
                          color="#ee7857"
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
                            style={{ color: "#f7f3ef" }}
                          />
                        </motion.button>
                      </div>
                      <Typography fontSize={"14px"} color="#ee7857">
                        Deliver high-quality, robust production code for a
                        diverse array of projects for clients including Harvard
                        Business School, Everytown for Gun Safety, Pratt
                        Institute, Koala Health, Vanderbilt University, The 19th
                        News, and more. Provide leadership within engineering
                        department through close collaboration, knowledge
                        shares, and mentorship.
                      </Typography>
                      
                    </div>
                  </CardContent>
                </Card>
              </li>
            </div>
          </ol>
        </div>
      </div>
    </ThemeProvider>
  );
}
