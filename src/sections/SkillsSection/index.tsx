import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import { NormalInline } from "../../components/Normal";
import { Section, Subsection } from "../../components/Section";

import Skill from "./Skill";

export default function SkillsSection() {
  return (
    <Section h2_props={{ children: "Skills" }}>
      <Subsection h3_props={{ children: "Competencies" }}>
        <div>Data Science & Machine Learning</div>
        <div>Robotics Process Automation</div>
        <div>Cloud Technologies</div>
      </Subsection>
      <Subsection h3_props={{ children: "Languages & Tools" }}>
        <H5>Over 5000 lines:</H5>
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
        <H5>Over 1000 lines:</H5>
        <BulletList
          items={[
            <Skill skill="Python" />,
            <Skill skill="Markdown" />,
            <Skill skill="React Native" />,
            <Skill skill="Web Components" />,
            <Skill skill="UiPath" />,
            <Skill skill="MySQL" />,
            <Skill skill="Java" />,
            <Skill skill="XML" />,
            <i>
              <Skill skill="Adobe XD" />
            </i>
          ]}
        />
        <H5>Familiar:</H5>
        <BulletList
          items={[<Skill skill="Solidity" />, <Skill skill="GraphQL" />, <Skill skill="Kotlin" />]}
        />
        <H5>
          WPM: <NormalInline>91</NormalInline>
        </H5>
      </Subsection>
      <Subsection h3_props={{ children: "Soft Skills" }}>
        <H5>
          Adaptibility:
          <NormalInline>
            {" "}
            I am <strong>open-minded</strong> & <strong>calm under pressure</strong>.
          </NormalInline>
        </H5>
        <H5>
          Never-ending Curiosity:
          <NormalInline>
            {" I will "}
            <strong>question</strong>
            {". I will "}
            <strong>research</strong>
            {". I will "}
            <em>find out</em>.
          </NormalInline>
        </H5>
        <H5>
          High Achiever:
          <NormalInline>
            {" I go the extra mile to deliver "}
            <em>exceptional</em>
            {" results."}
          </NormalInline>
        </H5>
        <H5>
          Prosocial:
          <NormalInline>
            {" I enjoy "}
            <strong>working with others</strong>
            {" and bringing the the best out of everyone's ideas."}
          </NormalInline>
        </H5>
        <H5>
          Systematic:
          <NormalInline>
            {" I use "}
            <strong>frameworks</strong>
            {" to plan, execute, & explain my work."}
          </NormalInline>
        </H5>
      </Subsection>
    </Section>
  );
}
