import Link from "../../components/Link";
import { Section } from "../../components/Section";
import Tooltip from "../../components/Tooltip";
import {
  ForwardSkillsApplication,
  FrameworkLink,
  SkillsApplication,
  SkillsLink
} from "../SkillsSection/Skill";

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
            <Link className="text-accent" href="#naisc-2022" target="_self">
              National AI Student Challenge 2022
            </Link>
          )
        }}
        skills={[
          <SkillsLink skill="Natural Language Processing" />,
          <SkillsLink skill="Image Classification" />,
          <SkillsLink skill="Python" />,
          <FrameworkLink framework="React" frameworkable="TypeScript" />,
          <SkillsLink skill="Git" />
        ]}
        time_props={{ children: "January - March 2023" }}
        actions={[
          <>
            Trained a <SkillsLink format={() => "CNN"} skill="Image Classification" /> to identify
            food types
          </>,
          <>Developed a dashboard for users to track nutritional information</>,
          <>
            Created {"a "}
            <SkillsLink format={() => "chatbot"} skill="Natural Language Processing" /> {"with "}
            <SkillsLink format={() => "AWS Lex"} skill="Cloud Technologies" /> to suggest healthy
            foods based on user's intake
          </>
        ]}
      />
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="#lna-pf100-2022" target="_self">
              PolyFinTech 100 API Hackathon 2022
            </Link>
          )
        }}
        skills={[
          <FrameworkLink framework="React" frameworkable="TypeScript" />,
          <FrameworkLink framework="React Native" frameworkable="TypeScript" />,
          <SkillsLink skill="CSS" />,
          <SkillsLink skill="Solidity" />,
          <SkillsLink skill="Adobe XD" />,
          <SkillsLink skill="Git" />
        ]}
        time_props={{ children: "April - November 2022" }}
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
            {"Partnered with "}
            <Link
              className="fw-bold"
              href="https://www.klaytn.foundation"
              style={{ color: "#33201A" }}
            >
              Klaytn
            </Link>
            {" & deployed on their Blockchain"}
          </>,
          <>
            {"Worked in a "}
            <SkillsLink format={() => "team of 6"} skill="Team Player" /> using Git, Discord, &
            Remnote to organize code, communication, & knowledge respectively
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
          <SkillsLink skill="HTML" />,
          <SkillsLink skill="CSS" />,
          <SkillsLink skill="Adobe XD" />,
          <SkillsLink skill="Git" />
        ]}
        time_props={{ children: "April - August 2022" }}
        actions={[
          <>
            {"Set up Elastic Beanstalk, Lambda, S3, & other services on "}
            <SkillsLink format={() => "AWS"} skill="Cloud Technologies" />
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
        skills={[
          <FrameworkLink framework="UiPath" frameworkable="Robotics Process Automation" />,
          <SkillsLink skill="Git" />
        ]}
        time_props={{ children: "April - August 2022" }}
        actions={[
          <>
            Automated <em>Keyword Extraction</em> & <em>Outsourcing of References</em>
          </>,
          <>
            Shortened time taken to gather resources from <em>several minutes</em>
            {" to "}
            <ForwardSkillsApplication skill="High Achiever">30 seconds</ForwardSkillsApplication>
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
          <SkillsLink skill="Python Notebooks" />,
          <SkillsLink skill="HTML" />,
          <SkillsLink skill="Git" />
        ]}
        time_props={{ children: "May - August 2022" }}
        actions={[
          <>
            {"Experimented with "}
            <SkillsLink
              format={() =>
                "Regressions, Support Vector Machines, Regularization, & other ML techniques"
              }
              skill="Data Science & Machine Learning"
            />
            {" to predict annual salaries in the field of Data Science"}
          </>,
          <>
            Followed the <SkillsLink format={() => "CRISP-DM Framework"} skill="Systematic" />
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
          <SkillsLink skill="HTML" />,
          <SkillsLink skill="CSS" />,
          <SkillsLink skill="SQL" />,
          <SkillsLink skill="Adobe XD" />,
          <SkillsLink skill="Git" />
        ]}
        time_props={{ children: "October 2021 - February 2022" }}
        actions={[
          <>Incorporated Fulltext search with filters</>,
          <>
            {"Followed "}
            <Link
              className="text-black"
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
            >
              <SkillsApplication className="fw-bold" skill="Systematic">
                Responsive Design
              </SkillsApplication>
            </Link>
            {" to make website viewable on mobile"}
          </>
        ]}
      />
    </Section>
  );
}
