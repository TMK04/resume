import BulletList from "../../components/BulletList";
import { Section } from "../../components/Section";

import { CodecademyCertification, SkillCertification } from "./Certification";

export default function CertificationsSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Certifications" }}>
      <BulletList
        items={[
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="9eb0741e5ebef1f9f58a53bfac67d3a7">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "HTML" }}
          />,

          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="b3dec49423da50603c25618aee635027">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "CSS" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="a549293c6e8d62a61ef1bec410b58162">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "Kotlin" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="458aef4eef5f5130685423fc15e6493d">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "React Native" }}
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
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="a8ab218d5950c29861635cc0bf12fd13">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "Git" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="b97fd4d87a816c761a674af1b5391ef1">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "Python" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="042a4e5884e3eb6ea1f2a12be6abb851">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "SQL" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="512386fdc7f6c934f98b01e6afa8285a">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "JavaScript" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="512386fdc7f6c934f98b01e6afa8285a">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "JavaScript" }}
          />,
          <SkillCertification
            certificationFn={(children) => (
              <CodecademyCertification href="56fb1e71303e37b643bb1905f31c8a09">
                {children}
              </CodecademyCertification>
            )}
            fsa_props={{ skill: "TypeScript" }}
          />
        ]}
      />
    </Section>
  );
}
