import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import { NormalInline } from "../../components/Normal";
import { Section, Subsection } from "../../components/Section";
import Tooltip from "../../components/Tooltip";

import Skill from "./Skill";

import "./index.css";

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
      <Subsection h3_props={{ children: "Competencies" }}>
        <Skill className="d-block" skill="Data Science & Machine Learning" />
        <Skill className="d-block" skill="Robotics Process Automation" />
        <Skill className="d-block" skill="Cloud Technologies" />
      </Subsection>
      <Subsection h3_props={{ children: "Languages & Tools" }}>
        <H5 id="skills-lnt-5000">Over 5000 lines:</H5>
        <BulletList
          items={[
            <Skill skill="TypeScript" />,
            <Skill skill="JavaScript" />,
            <Skill skill="React" />,
            <Skill skill="HTML" />,
            <Skill skill="CSS" />,
            <i>
              <Skill skill="Git" />
            </i>
          ]}
        />
        <H5 id="skills-lnt-1000">Over 1000 lines:</H5>
        <BulletList
          items={[
            <Skill skill="Python" />,
            <Skill skill="Markdown" />,
            <Skill skill="React Native" />,
            <Skill skill="Web Components" />,
            <Skill skill="UiPath" />,
            <Skill skill="SQL" />,
            <Skill skill="Java" />,
            <Skill skill="XML" />,
            <i>
              <Skill skill="Adobe XD" />
            </i>
          ]}
        />
        <H5 id="skills-lnt-familiar">Familiar:</H5>
        <BulletList
          items={[<Skill skill="Solidity" />, <Skill skill="GraphQL" />, <Skill skill="Kotlin" />]}
        />
        <H5>
          WPM: <NormalInline>91</NormalInline>
        </H5>
      </Subsection>
      <Subsection h3_props={{ children: "Soft Skills" }}>
        <H5>
          <Skill className="fw-bold" skill="Adaptibility" />:
          <NormalInline> Open-minded & Calm under pressure</NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="Never-ending Curiosity" />:
          <NormalInline>
            {" Willing to "}learn{", Loves asking questions, & Enjoys doing research"}
          </NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="Systematic" />:
          <NormalInline>
            {" Utilizes "}
            <em>frameworks</em>
            {" to plan, execute, & explain work"}
          </NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="High Achiever" />:
          <NormalInline>
            {" Goes the extra mile to deliver "}
            <em>exceptional</em>
            {" results"}
          </NormalInline>
        </H5>
        <H5>
          <Skill className="fw-bold" skill="Team Player" />:
          <NormalInline>{" Upholds team spirit & values collective innovation"}</NormalInline>
        </H5>
      </Subsection>
    </Section>
  );
}
