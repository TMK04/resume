import Link from "../../components/Link";
import { Section } from "../../components/Section";
import {
  ForwardSkillsApplication,
  FrameworkLink,
  SkillsApplicationLink,
  SkillsLink
} from "../SkillsSection/Skill";

import Experience from "./Experience";

export default function ExperienceSection() {
  return (
    <Section
      h2_props={{
        children: "Experience",
        className: "align-items-center d-flex gap-2"
      }}
    >
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="#brainhack-2023" target="_self">
              DSTA BrainHack 2023 (Today I Learned &#8212; AI Camp)
            </Link>
          )
        }}
        skills={[
          <SkillsLink skill="Object Detection" />,
          <SkillsLink skill="Re-identification" />,
          <SkillsLink skill="Automatic Speech Recognition" />,
          <SkillsLink skill="IPynb" />
        ]}
        time_props={{ children: "May 2023" }}
        actions={[
          <>
            {"Trained a "}
            <SkillsApplicationLink
              link_props={{ href: "https://github.com/ultralytics/ultralytics" }}
              sa_props={{ skill: "Object Detection" }}
            >
              YOLO model
            </SkillsApplicationLink>
            {" to detect plushies from an image"}
          </>,
          <>
            {"Constructed a "}
            <SkillsApplicationLink
              link_props={{ href: "https://en.wikipedia.org/wiki/Siamese_neural_network" }}
              sa_props={{ skill: "Re-identification" }}
            >
              Siamese Network
            </SkillsApplicationLink>
            {" with a "}
            <SkillsApplicationLink
              link_props={{
                href: "https://en.wikipedia.org/wiki/Transformer_(machine_learning_model)"
              }}
              sa_props={{ skill: "Data Science & AI" }}
            >
              Transformer Encoder
            </SkillsApplicationLink>
            {", then trained it with "}
            <SkillsApplicationLink
              link_props={{ href: "https://en.wikipedia.org/wiki/Triplet_loss" }}
              sa_props={{ skill: "Data Science & AI" }}
            >
              Triplet Loss
            </SkillsApplicationLink>
          </>,
          <>
            Passed detections from YOLO model into Siamese Network to identify "terrorist" plushies
          </>,
          <>
            Trained an <SkillsLink skill="Automatic Speech Recognition" /> model to transcribe{" "}
            <em>augmented</em> audio into text
          </>,
          <>
            {"Hosted daily meetups among team of 5 to check progress & recommend "}
            <SkillsLink format={() => "information (sources)"} skill="Handyman" />
          </>
        ]}
      />
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
          <SkillsLink skill="Responsive Design" />
        ]}
        time_props={{ children: "January - March 2023" }}
        actions={[
          <>
            {"Trained a "}
            <SkillsApplicationLink
              link_props={{ href: "https://en.wikipedia.org/wiki/Convolutional_neural_network" }}
              sa_props={{ skill: "Image Classification" }}
            >
              CNN
            </SkillsApplicationLink>
            {" to identify food types"}
          </>,
          <>
            {"Developed a "}
            <SkillsLink format={() => "dashboard"} skill="React" />
            {" for users to track nutritional information"}
          </>,
          <>
            {"Created a "}
            <SkillsLink format={() => "chatbot"} skill="Natural Language Processing" /> {"with "}
            <SkillsApplicationLink
              link_props={{ href: "https://aws.amazon.com/lex" }}
              sa_props={{ skill: "AWS" }}
            >
              AWS Lex
            </SkillsApplicationLink>
            {" to suggest healthy foods based on user's intake"}
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
          <SkillsLink skill="Adobe XD" />
        ]}
        time_props={{ children: "April - November 2022" }}
        actions={[
          <>
            Created & deployed a Web3-powered ecosystem featuring:
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
            {"Worked in a team of 6 using "}
            <SkillsLink skill="Git" />
            {", "}
            <SkillsLink skill="Discord" />
            {", & "}
            <SkillsLink skill="RemNote" />
            {" to organize "}
            <SkillsLink format={() => "code, communication, & knowledge"} skill="Handyman" />
            {" respectively"}
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
          <SkillsLink skill="MySQL" />,
          <SkillsLink skill="Adobe XD" />
        ]}
        time_props={{ children: "April - August 2022" }}
        actions={[
          <>
            {"Set up Elastic Beanstalk, Lambda, S3, & other services on "}
            <SkillsLink skill="AWS" />
          </>,
          <>
            {"Incorporated "}
            <SkillsLink format={() => "Fulltext"} skill="MySQL" />
            {" & Tag-based search"}
          </>
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
        skills={[<SkillsLink skill="UiPath" />]}
        time_props={{ children: "April - August 2022" }}
        actions={[
          <>
            {"Automated "}
            <SkillsLink format={() => "Keyword Extraction"} skill="Text Summarization" />
            {" & Outsourcing of References"}
          </>,
          <>
            {"Shortened time taken to gather resources from "}
            <em>several minutes</em>
            {" to "}
            <em>30 seconds</em>
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
          <SkillsLink skill="IPynb" />,
          <SkillsLink skill="Flask" />,
          <SkillsLink skill="Jinja" />,
          <SkillsLink skill="CRISP-DM" />
        ]}
        time_props={{ children: "May - August 2022" }}
        actions={[
          <>
            {"Experimented with "}
            <SkillsLink format={() => "Regressions"} skill="Data Science & AI" />
            {", "}
            <SkillsLink format={() => "Support Vector Machines"} skill="Data Science & AI" />
            {", "}
            <SkillsLink format={() => "Regularization"} skill="Data Science & AI" />
            {", & "}
            <SkillsLink format={() => "other ML techniques"} skill="Data Science & AI" />
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
          <SkillsLink skill="Responsive Design" />,
          <SkillsLink skill="MySQL" />,
          <SkillsLink skill="Adobe XD" />
        ]}
        time_props={{ children: "October 2021 - February 2022" }}
        actions={[
          <>
            {"Incorporated "}
            <SkillsLink skill="MySQL" format={() => "Fulltext search"} />
            {" with filters"}
          </>
        ]}
      />
    </Section>
  );
}
