import React, { useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Navigation from "../../components/organization/Navigation";
import Footer from "../../components/organization/Footer";
import ProjectHeading from "../../components/ProjectHeading";
import Overview from "../../components/Overview";
import Description from "../../components/organization/Description";
import motiCoverEmpty from "../../media/moti/motiCoverEmpty.png";
import motiAll from "../../media/moti/mockup-final.png";
import table from "../../media/moti/Table.png";
import brand from "../../media/moti/brand.png";
import low from "../../media/moti/low.png";
import map from "../../media/moti/map.png";
import flow from "../../media/moti/flow.png";
import wireframe from "../../media/moti/wireframe.png";

export default function Moti() {
  const themeQuery = useTheme();
  const screenSizeLg = useMediaQuery(themeQuery.breakpoints.up("lg"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <Navigation />
      <div className="main">
        <ProjectHeading
          title={"Moti"}
          subTitle={"UX/UI Case Study"}
          img={motiCoverEmpty}
          type={"img"}
        />
      </div>
      <Overview
        overview={`Moti is a meditation app designed to cultivate 
            mindfulness and motivation through guided meditations and progress tracking.`}
        goals={[`The primary goal of Moti is to create an engaging and simple 
            app that encourages individuals to develop mindfulness 
            habits. By providing motivation tools, such as daily reminders and emotion/streak tracking,
            Moti aims to make daily meditation a reachable goal. `]}
        problem={`Many individuals struggle to maintain consistency with daily meditation. 
            Factors such as busy schedules, lacking motivation, and not seeing results 
            right away can hinder a person’s ability to develop their own mindfulness routine. `}
        tasks={[
          "Low/high fidelity mockups",
          "Affinity mapping",
          "Conducting interviews",
          "Competetive analysis",
          "Site mapping",
          "Graphic design",
        ]}
        dates={"Aug. 2024"}
        roles={["UX/UI Designer"]}
        project={"Personal Project"}
      />
      <div className="project-main">
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          RESEARCH
        </h4>
        <Description
          title={"Interviews"}
          desc={[
            `To gain insights into the needs and preferences of potential users, interviews
            were conducted with friends, family, and peers. Here are some highlights from these discussions:`,
          ]}
          images={[]}
        />
        <div
          style={{
            display: "flex",
            flexDirection: screenSizeLg ? "row" : "column",
            gap: screenSizeLg ? "20px" : "0px",
          }}
        >
          <div style={{ flex: "1" }}>
            <p className="body-main quote">
              "I've never meditated before. I would be interested but feel like
              I'm currently too busy."
            </p>
            <p className="body-main quote">
              "I've 'informally' meditated with breathing and just being
              mindful."
            </p>
          </div>
          <div style={{ flex: "1" }}>
            <p className="body-main quote">
              "It's hard for me to stay consistent with meditation. I either
              forget or eventually lose motivation."
            </p>
            <p className="body-main quote">
              "I think meditation would be helpful but I just haven't done it
              yet."
            </p>
          </div>
        </div>
        <p className="body-main">
          I interviewed 10 people in total. Here are some examples of some of my
          interviewees:
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "" }}>Greer:</span> 21yo college
            student, pre-med track
          </li>
          <li>
            <span style={{ textDecoration: "" }}>Beckett:</span> 16yo high
            school student, athlete
          </li>
          <li>
            <span style={{ textDecoration: "" }}>Mary:</span> 21yo college
            student, cs track
          </li>
          <li>
            <span style={{ textDecoration: "" }}>Grace:</span> 26yo nurse in
            training
          </li>
          <li>
            <span style={{ textDecoration: "" }}>Stephen:</span> 43yo doctor
          </li>
        </ul>
        <Description
          title={"Affinity Mapping"}
          desc={[
            `Using interviews from five of the people, I created an Affinity Map in Figma
             in order to organize our discussions into the most common categories and subsequentially 
             highlight the most important issues to address.`,
          ]}
          images={[map]}
        />
        <p className="job">Key Findings</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Lack of Confidence:
            </span>{" "}
            There is a general lack of knowledge and/or confidence surrounding
            meditating correctly. Some people believed they were using making
            mistakes, that they "weren't doing it right." This provides support
            for a clear and beginner-friendly app.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Uncertainty:</span>{" "}
            Some people were uncertain about meditation as a whole, whether that
            be from lack of knowledge, doubt, or just unfamiliarity with the
            subject.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Variety:</span> Those
            who had used apps before expressed how they valued having lots of
            meditation options/topics.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Aesthetic appeal:
            </span>{" "}
            People emphasized that the app should be pleasant to look at. More
            specifically, they wanted apps that were light and colorful.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Stuck in emotions:
            </span>{" "}
            As for reasons for starting, the interviews highlighted that people
            would be willing to try meditation because they feel stuck
            emotionally or mentally. Some people want to manage and understand
            their emotions better. Others have more specific targets, such as
            depression or anxiety.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Habit forming:</span>{" "}
            Being able to see progress is the most motivating factor in forming
            a habit.
          </li>
        </ul>
        <Description
          title={"Competetive Analysis"}
          desc={[
            `Next, I looked to analyze the current top meditation apps. 
            In observing these apps, several key competetors were identified:`,
          ]}
          images={[]}
        />
      </div>
      <img
        alt="img"
        src={table}
        className="nav-image"
        style={{ maxWidth: "100%" }}
      />
      <div className="project-main">
        <p className="job" style={{ paddingTop: "40px" }}>
          Key Findings
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>Guided meditations were available in all the apps.</li>
          <li>
            Basic free tier for most apps, and users need to upgrade and pay to
            get premium content. Often, the freemium content is very limited.
          </li>
          <li>
            Wide range of content is a major strength BUT has the potential to
            be confusing to some users.
          </li>
          <li>
            All these top apps have various voice options. Some even feature
            celebrity narrators.
          </li>
        </ul>
        <hr style={{ width: "12vw" }} />
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          DEFINE
        </h4>
        <Description
          title={"Target Audience"}
          desc={[
            `Moti targets individuals with busy lives (professionals, students, parents 
                alike) who value flexibility and ease of use.`,
          ]}
          images={[]}
        />
        <Description
          title={"User Persona"}
          desc={[
            `After synthesizing my initial research, I was ready to develop a primary persona that 
            represents my target user. The goals, frustrations, and motivations of Sarah
            were derived from the competetive analysis and interviews:`,
            `Sarah Borne leads a busy lifestyle and has struggled with anxiety and depression
            throughout her life. Despite knowing the benefits of meditation, she is 
            unable to find time for herself. She has tried using meditation apps in the past but it has 
            'never stuck.'`,
          ]}
          images={[]}
        />{" "}
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>Age:</span> 26
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Location:</span>{" "}
            Boston, MA
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Occupation:</span>{" "}
            office clerk
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Goals:</span> start
            meditating, reduce anxiety, manage time more efficiently
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Frustrations:</span>{" "}
            not enough time in the day, feels controlled by her emotions
          </li>
        </ul>
        <hr style={{ width: "12vw" }} />
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          DESIGN
        </h4>
        <Description
          title={"Putting it all together"}
          desc={[
            `Based on the research findings, I began designing the app. Listed below is a collection
            of the most important findings gathered from the research and how they would be included 
            in the app.`,
          ]}
          images={[]}
        />
        <p className="job">To include:</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Emotion and streak tracking:
            </span>{" "}
            In order to address lack of motivation and/or habit forming, I
            decided to include a streak/emotion calendar system. Steak tracking
            is common in a lot of health apps–not just meditation apps–and a{" "}
            <span
              className="small-link"
              onClick={() =>
                window.open(
                  "https://academic.oup.com/jcr/article/49/6/1095/6623414?login=true"
                )
              }
            >
              proven
            </span>{" "}
            way to motivate individuals to stay consistent. Pairing this with
            emotion tracking gives individuals the ability to see their progress
            in an organized way.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Notification system:
            </span>{" "}
            Another way to help with habit-forming is a notification system. It
            will include basic once-a-day reminders that are sent as friendly
            messages (e.g., "Don't forget to meditate today!)" All examined
            competitors had this feature.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Guided meditations:
            </span>{" "}
            A guided meditation is a structured type of meditation in which
            there is a voiceover guiding the user throughout the session. All
            examined competitors include this type of meditation, and people
            from interviews agreed that this should be included.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Light and colorful:
            </span>{" "}
            People emphasized that the app should be pleasant to look at. More
            specifically, they wanted apps that were light and colorful.
          </li>

          <li>
            <span style={{ textDecoration: "underline" }}>
              Rotating quotes:
            </span>{" "}
            A concern raised was lack of certainty surrounding the benefits/uses
            of meditation. In addition to the educational guided meditations,
            rotating quotes will be placed at various points throughout the app
            that give basic information about meditation.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Voice options:</span>{" "}
            Lastly, voice variations stood out as a feature to include. All
            competitors included this, and some individuals admitted that they
            would feel more comfortable with a more masculine or feminine voice.
          </li>
        </ul>
        <Description
          title={"Site Map"}
          desc={[
            `The site map outlines the structure of Moti, highlighting key sections 
            such as the home and explore pages, meditation categories, and profile features.`,
          ]}
          images={[flow]}
        />
        <Description
          title={"Low-Fidelity Prototype"}
          desc={[
            `The low-fidelity prototype was designed to test 
            basic layouts and user flow before
             adding more detail. This stage involved gathering initial feedback.`,
          ]}
          images={[low]}
        />
        <Description
          title={"Digital Wireframes"}
          desc={[
            `I next created the digital wireframes, keeping in mind a simple user interface that
            would allow for simple navigation and exploration.`,
          ]}
          images={[]}
        />
      </div>
      <img
        alt="img"
        src={wireframe}
        className="nav-image"
        style={{ maxWidth: "100%", marginBottom: "20px" }}
      />
      <div className="project-main">
        <Description
          title={"Branding"}
          desc={[
            `For the design, I chose a calming yet colorful color palette to 
            reflect the app’s purpose—promoting mindfulness and mental clarity. 
            The logo and overall aesthetic are designed to evoke a 
            sense of peace and positivity.`,
            `Notably, a lot of the apps I examined had darker
            color palettes. For example, Headspace and Calm had bluish blacks and dark purples.
            This is likely to `,
          ]}
          images={[brand]}
        />

        <Description
          title={"High-Fidelity Prototype"}
          desc={[
            `The high-fidelity prototype brought all the elements together, 
          creating a polished, user-friendly design that was heavily rooted in the previous research. `,
          ]}
          images={[]}
        />
      </div>
      <img
        alt="img"
        src={motiAll}
        className="nav-image"
        style={{ maxWidth: "100%" }}
      />
      <div className="project-main">
        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>Landing Page:</span>{" "}
            The landing page displays the moti logo and motto, "consistency is
            key." Clicking on this page takes the user to the "sign up page",
            given that the user has not yet created an account.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Login/Sign Up:</span>{" "}
            Basic login/register page. Suggested use of the Google sign in
            feature.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Home:</span> The home
            page is the intitial navigated page after logging in. It displays a
            welcome message depending on the time of the day (either "Good
            morning, Good afternoon, or Good evening.") It then displays two
            basic stats: streaks and daily average meditation time. A unique
            feature of the home page is the calendar display. The user can
            either look at the streak calendar or the emotion calendar.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Explore:</span> The
            next page of the app is the explore page. Here, the user can access
            the rotating daily meditation as well as various meditation
            categories and their favorited audios. Clicking on an audio will
            take the user to the description screen, and clicking on any of the
            categories will take the user to the relevant category page.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Search:</span> A
            simple search page for searching audios. Popular searches are
            displayed.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Categories:</span> The
            category page displays all relevant category audios. Clicking on an
            audio will take the user to the description page.
          </li>
        </ul>
        <hr style={{ width: "12vw" }} />
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          TEST
        </h4>
        <Description
          title={"Usability Testing"}
          desc={[
            `Usability testing was conducted at three points throughout development: 
            1) after low-fidelity prototype, 2) after digital 
            wireframes, 3) after high-fidelity prototype. `,
            `Here are some key insights gathered from the tests:`,
          ]}
          images={[]}
        />

        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Favorited audios:
            </span>{" "}
            Users wanted to be able to view their favorited audios on the
            explore page.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Search tool:</span>{" "}
            Users thought it would be valuable to see suggested search options.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Description page:
            </span>{" "}
            Users wanted an information page for each audio.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Stats:</span> Users
            wanted to be able to view more stats on the profile page.
          </li>
        </ul>
        <Description
          title={"Future Considerations"}
          desc={[
            `Several features and improvements were identified,
             based on usability testing feedback and overall observations:`,
          ]}
          images={[]}
        />

        <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Community integration:
            </span>{" "}
            One potential feature would be a community section where users can
            share their meditation progress and participate in challenges. This
            could potentially help foster a sense of belonging and motivation.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              Light/dark display:
            </span>{" "}
            During the day, the light display is activated, but in the evening a
            darker color scheme is activated.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>
              More robust streak system:
            </span>{" "}
            In addition to the streak system, the app could include other
            incentives for maintaining streaks, such as achievement badges,
            "levels" (similar to the{" "}
            <span
              className="small-link"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/us/app/oak-meditation-breathing/id1210209691"
                )
              }
            >
              Oak
            </span>{" "}
            app level system), and progress reports.
          </li>
        </ul>

        <hr style={{ width: "12vw" }} />
        <h4
          className="job"
          style={{
            color: "#EA5F27",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          TAKEAWAYS
        </h4>
        <Description
          title={"Process is not linear"}
          desc={[
            `Although this case study is organized and presented sequentially, the actual 
            process was not. There were many instances where I had to revisit and refine earlier
            steps, most of the time as a result of the usability tests and feedback. This iterative
            approach allowed me to continuously improve the design and user experience without
            feeling restricted by the bounds of an unrealistic linear process.`,
          ]}
          images={[]}
        />
        <Description
          title={"Importance of adaptability"}
          desc={[
            `Throughout the project, I learned the importance of staying adaptable. Adjusting my designs
            was a given, but I also was required to adjust my way of thinking. Being flexible and open to 
            new ideas proved essential in this project.`,
          ]}
          images={[]}
        />
        <Description
          title={"Interviewing"}
          desc={[
            `Finally, this project also helped me improve my interview skills.  Conducting interviews included
            prior preparation of questions, and during the interview I was required to actively listen and observe. 
            I learned to dig deeper into people's responses and also ask follow up questions that usually revealed
            the best insights. These interviews helped
            shape key design choices and taught me the importance of empathy in the UX design process.`,
          ]}
          images={[]}
        />
      </div>
      <Footer />
    </div>
  );
}
