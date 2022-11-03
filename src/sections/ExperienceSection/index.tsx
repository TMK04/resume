import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import Link from "../../components/Link";
import { Section, Subsection } from "../../components/Section";
import Time from "../../components/Time";

export default function ExperienceSection() {
  return (
    <Section h2_props={{ children: "Experience" }}>
      <Subsection
        h3_props={{
          children: (
            <Link className="text-accent" href="http://polyfintech100hackathon.sg">
              PolyFinTech 100 API Hackathon
            </Link>
          )
        }}
      >
        <H5>
          <BulletList
            items={[<>React (TS)</>, <>React Native (TS)</>, <>CSS</>, <>Solidity</>, <>Git</>]}
          />
        </H5>
        <Time>April 2022 - November 2022</Time>
        <ul>
          <li>
            Created & deployed a <b>Web3-powered</b> ecosystem featuring an E-commerce Website & a
            Walk-for-rewards App
          </li>
          <li>
            Worked in a <b>team of 6</b> using Git, Discord, & Remnote to organize code,
            communication, & knowledge respectively
          </li>
        </ul>
      </Subsection>
      <Subsection
        h3_props={{
          children: "Papa Yu's",
          description: "Recipes Website"
        }}
      >
        <H5>
          <BulletList items={[<>React (TS)</>, <>CSS</>, <>Git</>]} />
        </H5>
        <Time>April 2022 - August 2022</Time>
        <ul>
          <li>Set up Elastic Beanstalk, Lambda, S3, & other services on AWS Cloud</li>
          <li>Incorporated both Fulltext & Tag-based search</li>
        </ul>
      </Subsection>
      <Subsection
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/sourcerer">
              Sourcerer
            </Link>
          ),
          description: "Research Automation Tool"
        }}
      >
        <H5>
          <BulletList items={[<>UiPath</>, <>Git</>]} />
        </H5>
        <Time>April 2022 - August 2022</Time>
        <ul>
          <li>
            Automated <em>Keyword Extraction</em> & <em>Outsourcing of References</em>
          </li>
          <li>
            Shortened research time from <em>several minutes</em>
            {" to "}
            <strong>30 seconds</strong>
          </li>
        </ul>
      </Subsection>
      <Subsection
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/mldp-project">
              Data Science Job Salaries Predictor
            </Link>
          )
        }}
      >
        <H5>
          <BulletList items={[<>Python Notebooks</>, <>HTML</>, <>Git</>]} />
        </H5>
        <Time>May 2022 - August 2022</Time>
        <ul>
          <li>
            Experimented with more than 6 Machine Learning models to predict annual salaries in the
            field of Data Science
          </li>
          <li>
            Followed the <strong>CRISP-DM Framework</strong>
          </li>
        </ul>
      </Subsection>
      <Subsection
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/hauterev">
              Hauterev
            </Link>
          )
        }}
      >
        <H5>
          <BulletList items={[<>Web Components (TS)</>, <>CSS</>, <>MySQL</>, <>Git</>]} />
        </H5>
        <Time>October 2021 - February 2022</Time>
        <ul>
          <li>Incorporated Fulltext search with filters</li>
        </ul>
      </Subsection>
    </Section>
  );
}
