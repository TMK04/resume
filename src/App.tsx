import { useEffect, useState } from "react";

import { H5 } from "./components/H";
import Link from "./components/Link";
import { Separator, SeparatorInline } from "./components/Separators";
import Split from "./components/Split";
import CertificationsSection from "./sections/CertificationsSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import LnASection from "./sections/LnASection";
import ReferencesSection from "./sections/ReferencesSection";
import SkillsSection from "./sections/SkillsSection";
import { SkillsApplicationLink } from "./sections/SkillsSection/Skill";

import "./App.css";

function App() {
  // Hacky initialization
  const [, setState] = useState(0);
  useEffect(() => {
    setTimeout(() => setState(1), 0);
  }, []);

  return (
    <div className="my-3">
      <header className="mx-5 text-center">
        <h1>
          Tran Minh <strong className="text-gradient text-dark-gradient">Khoa</strong>
        </h1>
        <address>
          <Link className="fw-bold raleway text-secondary" href="mailto:t.m.khoa.2308@gmail.com">
            t.m.khoa.2308@gmail.com
          </Link>
          <SeparatorInline className="fw-bold">|</SeparatorInline>
          <Link className="fw-bold raleway text-secondary" href="tel:(+65)80138550">
            (+65)80138550
          </Link>
          <div>
            <H5>
              {"Digital Resume: "}
              <SkillsApplicationLink
                link_props={{ href: "https://tmkhoa.netlify.app" }}
                sa_props={{ skill: "GitHub Actions" }}
              >
                tmkhoa.netlify.app
              </SkillsApplicationLink>
            </H5>
          </div>
        </address>
        <p className="mt-3 mx-auto raleway" id="objective">
          To master technologies, use them appropriately, & make them accessible to others.
        </p>
      </header>
      <Separator />
      <main className="d-flex flex-column gap-3 mx-5">
        <Split
          article_props={{
            children: (
              <>
                <ExperienceSection />
              </>
            )
          }}
          aside_props={{
            children: (
              <>
                <EducationSection />
                <LinksSection />
                <SkillsSection />
              </>
            )
          }}
        />
        <Split
          article_props={{
            children: (
              <>
                <LnASection />
              </>
            )
          }}
          aside_props={{
            children: (
              <>
                <CertificationsSection />
              </>
            ),
            id: "certifications-section"
          }}
          id="achievements"
        />
      </main>
      <Separator />
      <footer className="mx-5">
        <ReferencesSection />
      </footer>
    </div>
  );
}

export default App;
