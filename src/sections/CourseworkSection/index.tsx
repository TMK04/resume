import { Section, Subsection } from "../../components/Section";

export default function CourseworkSection() {
  return (
    <Section h2_props={{ children: "Coursework" }}>
      <Subsection h3_props={{ children: <>Undergraduate</> }}>
        <div>Data Science & Machine Learning</div>
        <div>Robotics Process Automation</div>
        <div>Cloud Technologies (AWS)</div>
        <div>Fullstack Website Development</div>
        <div>Security Essentials</div>
        <div>Mobile App Development</div>
        <div>UI & UX</div>
        <div>Network Technology</div>
        <div>Communication</div>
      </Subsection>
    </Section>
  );
}
