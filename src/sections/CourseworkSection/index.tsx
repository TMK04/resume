import { Section } from "../../components/Section";

import Courses from "./Courses";

export default function CourseworkSection() {
  return (
    <Section h2_props={{ children: "Coursework" }}>
      <Courses
        h3_props={{ children: "Undergraduate" }}
        courses={[
          "Data Science & Machine Learning",
          "Robotics Process Automation",
          "Cloud Technologies (AWS)",
          "Fullstack Website Development",
          "Security Essentials",
          "Mobile App Development",
          "UI & UX",
          "Network Technology",
          "Communication"
        ]}
      />
    </Section>
  );
}
