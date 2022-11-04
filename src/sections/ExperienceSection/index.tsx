import Link from "../../components/Link";
import { Section } from "../../components/Section";

import Experience from "./Experience";

export default function ExperienceSection() {
  return (
    <Section h2_props={{ children: "Experience" }}>
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="http://polyfintech100hackathon.sg">
              PolyFinTech 100 API Hackathon
            </Link>
          )
        }}
        skills={["React (TS)", "React Native (TS)", "CSS", "Solidity"]}
        time_props={{ children: "April 2022 - November 2022" }}
        actions={[
          <>
            Created & deployed a <b>Web3-powered</b> ecosystem featuring an E-commerce Website & a
            Walk-for-rewards App
          </>,
          <>
            Worked in a <b>team of 6</b> using Git, Discord, & Remnote to organize code,
            communication, & knowledge respectively
          </>
        ]}
      />
      <Experience
        h3_props={{
          children: "Papa Yu's",
          description: "Recipes Website"
        }}
        skills={["React (TS)", "CSS"]}
        time_props={{ children: "April 2022 - August 2022" }}
        actions={[
          <>Set up Elastic Beanstalk, Lambda, S3, & other services on AWS Cloud</>,
          <>Incorporated both Fulltext & Tag-based search</>
        ]}
      />
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/sourcerer">
              Sourcerer
            </Link>
          ),
          description: "Research Automation Tool"
        }}
        skills={["UiPath"]}
        time_props={{ children: "April 2022 - August 2022" }}
        actions={[
          <>
            Automated <em>Keyword Extraction</em> & <em>Outsourcing of References</em>
          </>,
          <>
            Shortened time taken to gather resources from <em>several minutes</em>
            {" to "}
            <strong>30 seconds</strong>
          </>
        ]}
      />
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/mldp-project">
              Data Science Job Salaries Predictor
            </Link>
          )
        }}
        skills={["Python Notebooks", "HTML"]}
        time_props={{ children: "May 2022 - August 2022" }}
        actions={[
          <>
            Experimented with more than 6 Machine Learning models to predict annual salaries in the
            field of Data Science
          </>,
          <>
            Followed the <strong>CRISP-DM Framework</strong>
          </>
        ]}
      />
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/hauterev">
              Hauterev
            </Link>
          )
        }}
        skills={["Web Components (TS)", "CSS", "MySQL"]}
        time_props={{ children: "October 2021 - February 2022" }}
        actions={[
          <>Incorporated Fulltext search with filters</>,
          <>
            {"Followed "}
            <Link
              className="fw-bold text-black"
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
            >
              Responsive Design
            </Link>
          </>
        ]}
      />
    </Section>
  );
}
