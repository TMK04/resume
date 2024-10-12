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
            <>
              <Link className="text-accent">Kaia Foundation</Link>
              {", Junior Software Developer"}
            </>
          )
        }}
        skills={[
          <FrameworkLink framework="Vite" frameworkable="TypeScript" />,
          <SkillsLink skill="styled-components" />,
          <FrameworkLink framework="Next" frameworkable="TypeScript" />,
          <SkillsLink skill="Responsive Design" />,
          <FrameworkLink framework="Vue" frameworkable="TypeScript" />,
          <SkillsLink skill="Solidity" />,
          <SkillsLink skill="Postgres" />,
          <SkillsLink skill="Docker" />,
          <SkillsLink skill="SSH" />,
          <SkillsLink skill="Chatbot" />,
          <SkillsLink skill="Text Classification" />,
          <SkillsLink skill="PyTorch" />,
          <SkillsLink skill="IPynb" />,
          <SkillsLink skill="Hugging Face" />,
          <SkillsLink skill="LangChain" />,
          <SkillsLink skill="LanceDB" />,
          <SkillsLink skill="Jira" />,
          <SkillsLink skill="Confluence" />,
          <SkillsLink skill="Slack" />
        ]}
        time_props={{ children: "April - August 2024" }}
        actions={[
          <>
            {"Helped integrate a "}
            <SkillsLink skill="Chatbot" />
            {" into Telegram for users to interact with "}
            <SkillsLink format={() => "Smart Contracts"} skill="Solidity" />
          </>,
          "Tested a hardware wallet across different releases, browsers, & operating systems",
          <>
            {"Worked on "}
            <Link href="https://portal.kaia.io">Kaia Portal</Link>
            <ul>
              <li>
                {"Took charge of "}
                <SkillsLink skill="Responsive Design" />
                {" & advanced CSS"}
              </li>
              <li>Wrote unit & E2E tests</li>
            </ul>
          </>,
          <>
            {"Planned & executed tasks from "}
            <SkillsLink skill="Jira" />
            {", "}
            <SkillsLink skill="Confluence" />
            {", & "}
            <SkillsLink skill="Slack" />
          </>,
          <>
            {"Used "}
            <SkillsLink skill="Docker" />
            {" & "}
            <SkillsLink skill="SSH" />
            {" to ensure replicable builds & tests"}
          </>,
          <>
            {"Exchanged "}
            <ForwardSkillsApplication skill="Handyman">
              best practices, tools, & tips
            </ForwardSkillsApplication>
            {" with colleagues"}
          </>
        ]}
      />
      <Experience
        h3_props={{ children: "Video Analytics for Major Project Pitching" }}
        skills={[
          <SkillsLink skill="Object Detection" />,
          <SkillsLink skill="Image Classification" />,
          <SkillsLink skill="Automatic Speech Recognition" />,
          <SkillsLink skill="Chatbot" />,
          <SkillsLink skill="Text Summarization" />,
          <SkillsLink skill="Text Classification" />,
          <SkillsLink skill="Speech Emotion Recognition" />,
          <SkillsLink skill="PyTorch" />,
          <SkillsLink skill="Hugging Face" />,
          <SkillsLink skill="LangChain" />,
          <SkillsLink skill="IPynb" />,
          <SkillsLink skill="wandb" />,
          <SkillsLink skill="CRISP-DM" />,
          <SkillsLink skill="FastAPI" />,
          <FrameworkLink framework="Svelte" frameworkable="TypeScript" />,
          <SkillsLink skill="Tailwind" />,
          <SkillsLink skill="Docker" />,
          <SkillsLink skill="SSH" />
        ]}
        time_props={{ children: "June 2023 - March 2024" }}
        actions={[
          "Broke a vague problem statement into 8 models & 2 servers",
          <>
            Labelled &gt;2000 images & audio clips from past-year Major Project Pitches
            <ul>
              <li>Trained models every 200 records to ease labelling</li>
            </ul>
          </>,
          <>
            {"Fine-tuned hyperparameters using "}
            <SkillsLink skill="wandb" />
          </>,
          <>Achieved a variance of 1.3 marks/10 compared to human judge</>,
          <>
            {"Deployed onto school's server with "}
            <SkillsLink skill="Docker" /> & <SkillsLink skill="SSH" />
          </>
        ]}
      />
      <Experience
        h3_props={{
          children: (
            <>
              <Link className="text-accent">Krust Universe</Link>
              {", Intern"}
            </>
          )
        }}
        skills={[
          <FrameworkLink framework="Next" frameworkable="TypeScript" />,
          <SkillsLink skill="styled-components" />,
          <SkillsLink skill="Solidity" />,
          <SkillsLink skill="Postgres" />,
          <SkillsLink skill="Chatbot" />,
          <SkillsLink skill="Text Classification" />,
          <SkillsLink skill="PyTorch" />,
          <SkillsLink skill="IPynb" />,
          <SkillsLink skill="Hugging Face" />,
          <SkillsLink skill="Redis" />,
          <SkillsLink skill="Go" />,
          <SkillsLink skill="Confluence" />,
          <SkillsLink skill="Slack" />
        ]}
        time_props={{ children: "September 2023 - February 2024" }}
        actions={[
          <>
            {"Developed a Web3 game"}
            <ul>
              <li>
                {"Indexed "}
                <SkillsLink format={() => "Smart Contract"} skill="Solidity" />
                {" data into "}
                <SkillsLink skill="Postgres" />
                {" for fast querying"}
              </li>
            </ul>
          </>,
          <>
            {"Developed a "}
            <SkillsLink skill="Chatbot" />
            {" to onboard users onto a Web3 wallet"}
          </>,
          <>
            {"Explained work using "}
            <SkillsLink skill="Confluence" />
          </>
        ]}
      />
      <Experience
        h3_props={{ children: "IoT Network Intrusion Detection" }}
        skills={[
          <SkillsLink skill="PyTorch" />,
          <SkillsLink skill="IPynb" />,
          <SkillsLink skill="wandb" />
        ]}
        time_props={{ children: "May - June 2023" }}
        actions={[
          <>
            {"Fine-tuned hyperparameters using "}
            <SkillsLink skill="wandb" />
          </>,
          <>
            {"Wrote a "}
            <Link href="https://api.wandb.ai/links/tmk04-team/uqbuj722">report</Link>
            {
              " explaining model training & evaluation, as well as Attack & Defense strategies based on "
            }
            <Link href="https://atlas.mitre.org">MITRE ATLAS</Link>
          </>
        ]}
      />
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
          <SkillsLink skill="Chatbot" />,
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
            <SkillsLink skill="Chatbot" />
            {" with "}
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
            {"Set up "}
            <SkillsLink format={() => "Elastic Beanstalk"} skill="AWS" />
            {", "}
            <SkillsLink format={() => "Lambda"} skill="AWS" />
            {", "}
            <SkillsLink format={() => "S3"} skill="AWS" />
            {", & other services"}
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
    </Section>
  );
}
