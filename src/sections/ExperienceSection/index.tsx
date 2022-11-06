import Link from "../../components/Link";
import { Section } from "../../components/Section";
import Tooltip from "../../components/Tooltip";
import { FrameworkLink, SkillLink } from "../SkillsSection/Skill";

import Experience from "./Experience";

export default function ExperienceSection() {
  return (
    <Section
      h2_props={{
        children: (
          <>
            Experience
            <Tooltip title="Click on a Skill to scroll to its reference!" />
          </>
        ),
        className: "align-items-center d-flex gap-2"
      }}
    >
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="http://polyfintech100hackathon.sg">
              PolyFinTech 100 API Hackathon
            </Link>
          )
        }}
        skills={[
          <FrameworkLink framework="React" frameworkable="TypeScript" />,
          <FrameworkLink framework="React Native" frameworkable="TypeScript" />,
          <SkillLink skill="CSS" />,
          <SkillLink skill="Solidity" />,
          <SkillLink skill="Adobe XD" />
        ]}
        time_props={{ children: "April 2022 - November 2022" }}
        actions={[
          <>
            Created & deployed a <b>Web3-powered</b> ecosystem featuring:
            <ol>
              <li>An E-commerce Website</li>
              <li>Walk-for-rewards App</li>
              <li>Various Smart Contracts</li>
            </ol>
          </>,
          <>
            Partnered with{" "}
            <Link
              className="fw-bold"
              href="https://www.klaytn.foundation"
              style={{ color: "#33201A" }}
            >
              Klaytn
            </Link>{" "}
            & deployed on their Blockchain
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
        skills={[
          <FrameworkLink framework="React" frameworkable="TypeScript" />,
          <SkillLink skill="CSS" />
        ]}
        time_props={{ children: "April 2022 - August 2022" }}
        actions={[
          <>
            {"Set up Elastic Beanstalk, Lambda, S3, & other services on "}
            <SkillLink format={() => "AWS Cloud"} skill="Cloud Technologies" />
          </>,
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
        skills={[<FrameworkLink framework="UiPath" frameworkable="Robotics Process Automation" />]}
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
        skills={[
          <SkillLink format={(Python: string) => `${Python} Notebooks`} skill="Python" />,
          <SkillLink skill="Markdown" />,
          <SkillLink skill="HTML" />
        ]}
        time_props={{ children: "May 2022 - August 2022" }}
        actions={[
          <>
            {"Experimented with more than 6 "}
            <SkillLink skill="Data Science & Machine Learning" />
            {" models to predict annual salaries in the field of Data Science"}
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
          ),
          description: "Restaurant Review Website"
        }}
        skills={[
          <FrameworkLink framework="Web Components" frameworkable="TypeScript" />,
          <SkillLink skill="CSS" />,
          <SkillLink skill="MySQL" />
        ]}
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
            {" to make website viewable on mobile"}
          </>
        ]}
      />
    </Section>
  );
}
