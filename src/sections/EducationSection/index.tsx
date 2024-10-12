import { H4, H5 } from "../../components/H";
import { Section, Subsection } from "../../components/Section";
import Time from "../../components/Time";

export default function EducationSection() {
  return (
    <Section h2_props={{ children: "Education" }}>
      <Subsection h3_props={{ children: "NUS" }}>
        <H4>Undergraduate in Business Analytics</H4>
        <Time>expected Start 2026</Time>
        School of Computing
      </Subsection>
      <Subsection h3_props={{ children: "Temasek Polytechnic" }}>
        <H4>Diploma in Applied Artficial Intelligence</H4>
        <Time>Grad. April 2024</Time>
        School of Informatics & IT
        <H5 className="text-accent">GPA: 3.85 / 4.0</H5>
      </Subsection>
      <Subsection h3_props={{ children: "Dunman Secondary School" }}>
        <H4>GCE 'O' Level Certificate</H4>
        <Time>Grad. April 2020</Time>
        <H5 className="text-accent">L1R5: 12</H5>
      </Subsection>
    </Section>
  );
}
