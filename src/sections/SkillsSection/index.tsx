import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import { NormalInline } from "../../components/Normal";
import { Section, Subsection } from "../../components/Section";
import Tooltip from "../../components/Tooltip";

import Skill from "./Skill";

function SkillsSubsectionDivider() {
  return <hr className="my-0 border-light w-25" />;
}

export default function SkillsSection() {
  return (
    <Section
      h2_props={{
        children: (
          <>
            Skills
            <Tooltip title="Click on a Skill to see where it was applied!" />
          </>
        ),
        className: "align-items-center d-flex gap-2"
      }}
    >
      <H5 className="text-decoration-underline">Languages</H5>
      <BulletList
        items={[
          <Skill skill="CSS" />,
          <Skill skill="TypeScript" />,
          <Skill skill="JavaScript" />,
          <Skill skill="HTML" />,
          <Skill skill="zsh" />,
          <Skill skill="bash" />,
          <Skill skill="Python" />,
          <Skill skill="IPynb" />,
          <Skill skill="Markdown" />,
          <Skill skill="Java" />,
          <Skill skill="XML" />,
          <Skill skill="Kotlin" />,
          <Skill skill="Solidity" />,
          <Skill skill="GraphQL" />,
          <Skill skill="Go" />,
          <Skill skill="UiPath" />
        ]}
      />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Data Science & AI" />
      <BulletList
        items={[
          <Skill skill="PyTorch" />,
          <Skill skill="wandb" />,
          <Skill skill="LangChain" />,
          <Skill skill="Hugging Face" />,
          <Skill skill="TensorFlow" />
        ]}
      />
      <SkillsSubsectionDivider />
      <BulletList
        items={[
          <Skill skill="Computer Vision" />,
          <Skill skill="Image Classification" />,
          <Skill skill="Object Detection" />,
          <Skill skill="Re-identification" />,
          <Skill skill="Natural Language Processing" />,
          <Skill skill="Chatbot" />,
          <Skill skill="Text Summarization" />,
          <Skill skill="Text Classification" />,
          <Skill skill="Automatic Speech Recognition" />
        ]}
      />
      <SkillsSubsectionDivider />
      <BulletList items={[<Skill skill="CRISP-DM" />, <Skill skill="RAG" />]} />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Frontend" />
      <BulletList
        items={[
          <Skill skill="React" />,
          <Skill skill="Svelte" />,
          <Skill skill="Vue" />,
          <Skill skill="Web Components" />,
          <Skill skill="React Native" />,
          <Skill skill="Jinja" />,
          <Skill skill="Tailwind" />,
          <Skill skill="styled-components" />,
          <Skill skill="Bootstrap" />,
          <Skill skill="Vite" />,
          <Skill skill="Next" />,
          <Skill skill="Webpack" />,
          <Skill skill="Babel" />
        ]}
      />
      <SkillsSubsectionDivider />
      <BulletList items={[<Skill skill="Responsive Design" />]} />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Backend" />
      <BulletList
        items={[
          <Skill skill="Express" />,
          <Skill skill="Fastify" />,
          <Skill skill="FastAPI" />,
          <Skill skill="Flask" />
        ]}
      />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Database" />
      <BulletList
        items={[
          <Skill skill="LanceDB" />,
          <Skill skill="Redis" />,
          <Skill skill="MongoDB" />,
          <Skill skill="DynamoDB" />,
          <Skill skill="Firestore" />,
          <Skill skill="Neo4j" />,
          <Skill skill="Postgres" />,
          <Skill skill="MySQL" />,
          <Skill skill="SQLite" />
        ]}
      />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Deployment" />
      <BulletList
        items={[
          <Skill skill="AWS" />,
          <Skill skill="Google Cloud" />,
          <Skill skill="Docker" />,
          <Skill skill="SSH" />,
          <Skill skill="GitHub Actions" />,
          <Skill skill="Prettier" />,
          <Skill skill="ESLint" />
        ]}
      />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Design" />
      <BulletList
        items={[
          <Skill skill="Figma" />,
          <Skill skill="Penpot" />,
          <Skill skill="Adobe XD" />,
          <Skill skill="Adobe Illustrator" />
        ]}
      />
      <Skill className="fw-bold raleway text-decoration-underline" skill="Management" />
      <BulletList
        items={[
          <Skill skill="Git" />,
          <Skill skill="Jira" />,
          <Skill skill="Confluence" />,
          <Skill skill="RemNote" />,
          <Skill skill="Discord" />,
          <Skill skill="Slack" />
        ]}
      />
      <Subsection h3_props={{ children: "Qualities" }}>
        <H5>
          <Skill className="fw-bold" skill="Handyman" />:
          <NormalInline>{" Ensures the team has good services & resources"}</NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="Never-ending Curiosity" />:
          <NormalInline>{" Enjoys research & asking questions"}</NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="Systematic" />:
          <NormalInline>
            {" Work is accelerated & explained through Frameworks & Formulae"}
          </NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="Adaptable" />:
          <NormalInline>{" Open-minded & Calm when facing changes"}</NormalInline>
        </H5>
      </Subsection>
    </Section>
  );
}
