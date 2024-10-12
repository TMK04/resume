import Link from "../../components/Link";
import { Section } from "../../components/Section";
import { FrameworkLink, SkillsApplicationLink, SkillsLink } from "../SkillsSection/Skill";

import Experience from "./Experience";

export default function ExperienceSection() {
  return (
    <Section
      h2_props={{
        children: "Key Experience",
        className: "align-items-center d-flex gap-2"
      }}
    >
      <Experience
        h3_props={{
          children: (
            <>
              <Link className="text-accent" href="https://www.kaia.io">
                Kaia Foundation
              </Link>
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
          <SkillsLink skill="AWS" />,
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
      >
        <ol className="mb-0">
          <li>
            {"Contributed to "}
            <SkillsLink format={() => "official documentation"} skill="Handyman" />
          </li>
          <li>Tested a hardware wallet across different releases, browsers, & operating systems</li>
          <li>
            {"Helped integrate a "}
            <SkillsLink skill="Chatbot" />
            {" into Telegram for users to interact with "}
            <SkillsLink format={() => "Smart Contracts"} skill="Solidity" />
          </li>
          <li>
            {"Worked on "}
            <Link href="https://portal.kaia.io">Kaia Portal</Link>
            <ul>
              <li>
                {"Implemented & adjusted designs from "}
                <SkillsLink skill="Figma" />
              </li>
              <li>
                {"Took charge of "}
                <SkillsLink skill="Responsive Design" />
                {" & advanced CSS"}
              </li>
              <li>Wrote unit & E2E tests</li>
            </ul>
          </li>
        </ol>
        <ul>
          <li>
            {"Planned & executed tasks from "}
            <SkillsLink skill="Jira" />
            {", "}
            <SkillsLink skill="Confluence" />
            {", & "}
            <SkillsLink skill="Slack" />
          </li>
          <li>
            {"Used "}
            <SkillsLink skill="Docker" />
            {" & "}
            <SkillsLink skill="SSH" />
            {" to ensure replicable builds & tests"}
          </li>
          <li>
            {"Exchanged "}
            <SkillsLink format={() => "best practices, tools, & tips"} skill="Handyman" />
            {" with colleagues"}
          </li>
        </ul>
      </Experience>
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
      >
        <ul>
          <li>
            {"Labelled >2000 images & audio clips from past-year Major Project Pitches"}
            <ul>
              <li>Trained models every 200 records to ease labelling</li>
            </ul>
          </li>
          <li>Prompted-engineered for feedback on areas of improvement</li>
          <li>
            {"Fine-tuned hyperparameters using "}
            <SkillsLink skill="wandb" />
          </li>
          <li>
            {"Grades a "}
            <em>5min</em>
            {" video within "}
            <em>1min</em>
            {", with "}
            <em>1.3 marks/10</em>
            {" of variance compared to human judge"}
          </li>
          <li>
            {"Deployed onto school's server with "}
            <SkillsLink skill="Docker" /> & <SkillsLink skill="SSH" />
          </li>
        </ul>
      </Experience>
      <Experience
        h3_props={{
          children: (
            <>
              <Link className="text-accent" href="https://krustuniverse.com">
                Krust Universe
              </Link>
              {", Intern"}
            </>
          )
        }}
        skills={[
          <FrameworkLink framework="Next" frameworkable="TypeScript" />,
          <SkillsLink skill="styled-components" />,
          <SkillsLink skill="Solidity" />,
          <SkillsLink skill="Postgres" />,
          <SkillsLink skill="AWS" />,
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
      >
        <ol className="mb-0">
          <li>
            {"Developed a Web3 game"}
            <ul>
              <li>
                {"Indexed "}
                <SkillsLink format={() => "Smart Contract"} skill="Solidity" />
                {" data into "}
                <SkillsLink skill="Postgres" />
                {" for fast querying"}
              </li>
              <li>
                {"Deployed onto "}
                <SkillsLink format={() => "AWS EC2"} skill="AWS" />
              </li>
            </ul>
          </li>
          <li>
            {"Developed a "}
            <SkillsLink skill="Chatbot" />
            {" to onboard users onto a Web3 wallet"}
            <ul>
              <li>
                {"Prompt-engineered with "}
                <SkillsLink skill="RAG" />
                {" for relevant & professional responses"}
              </li>
            </ul>
          </li>
        </ol>
        <ul>
          <li>
            {"Explained work using "}
            <SkillsLink skill="Confluence" />
          </li>
        </ul>
      </Experience>
      <Experience
        h3_props={{ children: "IoT Network Intrusion Detection" }}
        skills={[
          <SkillsLink skill="PyTorch" />,
          <SkillsLink skill="IPynb" />,
          <SkillsLink skill="wandb" />
        ]}
        time_props={{ children: "May - June 2023" }}
      >
        <ul>
          <li>
            {"Fine-tuned hyperparameters using "}
            <SkillsLink skill="wandb" />
          </li>
          <li>
            {"Covered Attack & Defense strategies based on "}
            <Link href="https://atlas.mitre.org">MITRE ATLAS</Link>
          </li>
          <li>
            {"Wrote a "}
            <Link href="https://api.wandb.ai/links/tmk04-team/uqbuj722">report</Link>
            {" detailing model training, evaluation, & strategies"}
          </li>
        </ul>
      </Experience>
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
      >
        <ul>
          <li>
            {"Trained a "}
            <SkillsApplicationLink
              link_props={{ href: "https://github.com/ultralytics/ultralytics" }}
              sa_props={{ skill: "Object Detection" }}
            >
              YOLO model
            </SkillsApplicationLink>
            {" to detect plushies from an image"}
          </li>
          <li>
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
          </li>
          <li>
            Passed detections from YOLO model into Siamese Network to identify "terrorist" plushies
          </li>
          <li>
            Trained an <SkillsLink skill="Automatic Speech Recognition" />
            {" model to transcribe "}
            <em>augmented</em> audio into text
          </li>
          <li>
            {"Hosted daily meetups to check progress & recommend "}
            <SkillsLink format={() => "information (sources)"} skill="Handyman" />
          </li>
        </ul>
      </Experience>
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
      >
        <ul>
          <li>
            {"Trained a "}
            <SkillsApplicationLink
              link_props={{ href: "https://en.wikipedia.org/wiki/Convolutional_neural_network" }}
              sa_props={{ skill: "Image Classification" }}
            >
              CNN
            </SkillsApplicationLink>
            {" to identify food types"}
          </li>
          <li>
            {"Developed a "}
            <SkillsLink format={() => "dashboard"} skill="React" />
            {" for users to track nutritional information"}
          </li>
          <li>
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
          </li>
        </ul>
      </Experience>
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
      >
        <ul>
          <li>
            {"Created & deployed a Web3-powered ecosystem featuring:"}
            <ol>
              <li>
                {"An E-commerce "}
                <SkillsLink format={() => "Website"} skill="React" />
              </li>
              <li>
                {"Walk-for-rewards "}
                <SkillsLink format={() => "App"} skill="React Native" />
              </li>
              <li>
                {"Various "}
                <SkillsLink format={() => "Smart Contracts"} skill="Solidity" />
              </li>
            </ol>
          </li>
          <li>
            {"Partnered with "}
            <Link className="fw-bold" href="https://www.klaytn.foundation">
              Klaytn
            </Link>
            {" & deployed on their Blockchain"}
          </li>
          <li>
            {"Worked in a team of 6 using "}
            <SkillsLink skill="Git" />
            {", "}
            <SkillsLink skill="Discord" />
            {", & "}
            <SkillsLink skill="RemNote" />
            {" to organize "}
            <SkillsLink format={() => "code, communication, & knowledge"} skill="Handyman" />
            {" respectively"}
          </li>
        </ul>
      </Experience>
      <Experience
        h3_props={{
          children: (
            <Link className="text-accent" href="https://github.com/TMK04/sourcerer">
              Sourcerer
            </Link>
          ),
          description: "Research Automation Tool"
        }}
        skills={[<SkillsLink skill="UiPath" />, <SkillsLink skill="Text Summarization" />]}
        time_props={{ children: "April - August 2022" }}
      >
        <ul>
          <li>
            {"Automated "}
            <SkillsLink format={() => "Keyword Extraction"} skill="Text Summarization" />
            {" & Outsourcing of References"}
          </li>
          <li>
            {"Shortened time taken to gather resources from "}
            <em>several minutes</em>
            {" to "}
            <em>30 seconds</em>
          </li>
        </ul>
      </Experience>
    </Section>
  );
}
