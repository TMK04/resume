import { H4, H5 } from "../../components/H";
import { Section, Subsection } from "../../components/Section";
import Time from "../../components/Time";

export default function EducationSection() {
  return (
    <Section h2_props={{ children: "Education" }}>
      <Subsection h3_props={{ children: "Temasek Polytechnic" }}>
        <H4>Diploma in Applied Artficial Intelligence</H4>
        <Time>Grad. April 2023 (expected)</Time>
        School of Informatics & Information Technology
        <H5 className="text-accent">Cum. GPA: 3.86 / 4.0</H5>
      </Subsection>
    </Section>
  );
}
