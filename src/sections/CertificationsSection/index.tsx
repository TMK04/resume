import BulletList from "../../components/BulletList";
import { Section } from "../../components/Section";
import { SkillsApplicationLink } from "../SkillsSection/Skill";

import { CodecademyCertification, CodecademySkillsCertification } from "./Certification";

export default function CertificationsSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Certifications" }}>
      <BulletList
        items={[
          <CodecademyCertification href="f4276e8c08a3ba174ef0147deb0c3013">
            Unit Testing
          </CodecademyCertification>,
          <CodecademySkillsCertification
            link_props={{ href: "9eb0741e5ebef1f9f58a53bfac67d3a7" }}
            sa_props={{ skill: "HTML" }}
          />,
          <SkillsApplicationLink
            link_props={{
              href: "https://learn.aisingapore.org/certificate-verification/81539CA35C-7EED902249-12D361128"
            }}
            sa_props={{ skill: "Data Science & Machine Learning" }}
          >
            Literacy in AI
          </SkillsApplicationLink>,
          <CodecademySkillsCertification
            link_props={{ href: "b3dec49423da50603c25618aee635027" }}
            sa_props={{ skill: "CSS" }}
          />,
          <CodecademySkillsCertification
            link_props={{ href: "a549293c6e8d62a61ef1bec410b58162" }}
            sa_props={{ skill: "Kotlin" }}
          />,
          <CodecademySkillsCertification
            link_props={{ href: "458aef4eef5f5130685423fc15e6493d" }}
            sa_props={{ skill: "React Native" }}
          />,
          <CodecademyCertification href="0595479d03627a8cb816b069000e4d06">
            Bootstrap
          </CodecademyCertification>,
          <CodecademyCertification href="0a6884fad1dbf4afe5df084d2ec1e7c3">
            Color Design
          </CodecademyCertification>,
          <CodecademyCertification href="db927a84bf4bba96bb285ee6a85466fc">
            Vue.js
          </CodecademyCertification>,
          <CodecademyCertification href="85396dd6e2e850ab34e904243aa464c6">
            Express.js
          </CodecademyCertification>,
          <CodecademySkillsCertification
            link_props={{ href: "a8ab218d5950c29861635cc0bf12fd13" }}
            sa_props={{ skill: "Git" }}
          />,
          <CodecademySkillsCertification
            link_props={{ href: "b97fd4d87a816c761a674af1b5391ef1" }}
            sa_props={{ skill: "Python" }}
          />,
          <CodecademySkillsCertification
            link_props={{ href: "042a4e5884e3eb6ea1f2a12be6abb851" }}
            sa_props={{ skill: "SQL" }}
          />,
          <CodecademySkillsCertification
            link_props={{ href: "512386fdc7f6c934f98b01e6afa8285a" }}
            sa_props={{ skill: "JavaScript" }}
          />,
          <CodecademySkillsCertification
            link_props={{ href: "56fb1e71303e37b643bb1905f31c8a09" }}
            sa_props={{ skill: "TypeScript" }}
          />
        ]}
      />
    </Section>
  );
}
