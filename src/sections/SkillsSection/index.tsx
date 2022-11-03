import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import { NormalInline } from "../../components/Normal";
import { Section, Subsection } from "../../components/Section";

export default function SkillsSection() {
  return (
    <Section h2_props={{ children: "Skills" }}>
      <Subsection h3_props={{ children: <>Programming</> }}>
        <H5>Over 5000 lines:</H5>
        <BulletList
          items={[
            <>TypeScript (TS)</>,
            <>JavaScript (JS)</>,
            <>React</>,
            <>HTML</>,
            <>CSS</>,
            <i>Git</i>
          ]}
        />
        <H5>Over 1000 lines:</H5>
        <BulletList
          items={[
            <>Python</>,
            <>Markdown</>,
            <>React Native</>,
            <>Web Components</>,
            <>UiPath</>,
            <>MySQL</>,
            <>Java</>,
            <>XML</>,
            <i>Adobe XD</i>
          ]}
        />
        <H5>Familiar:</H5>
        <BulletList items={[<>Solidity</>, <>GraphQL</>, <>Kotlin</>]} />
        <H5>WPM: 91</H5>
      </Subsection>
      <Subsection h3_props={{ children: <>Soft Skills</> }}>
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
