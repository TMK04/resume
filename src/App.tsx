import { useEffect, useState } from "react";

import { H5 } from "./components/H";
import Link from "./components/Link";
import { NormalInline } from "./components/Normal";
import { PrintSwitch } from "./components/Print";
import { Separator, SeparatorInline } from "./components/Separators";
import Split from "./components/Split";
import CertificationsSection from "./sections/CertificationsSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import LnASection from "./sections/LnASection";
import ReferencesSection from "./sections/ReferencesSection";
import SkillsSection from "./sections/SkillsSection";
import { SkillsApplication } from "./sections/SkillsSection/Skill";

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
          <Link className="fw-bold raleway text-secondary" href="tel:+6580138550">
            +65 8013 8550
          </Link>
          <div>
            <H5>
              {"Digital Resume: "}
              <SkillsApplication skill="Cloud Technologies">
                <NormalInline>
                  <Link className="fw-bold" href="https://tmkhoa.netlify.app">
                    <PrintSwitch
                      normal={{ children: "tmkhoa.netlify.app" }}
                      print={{
                        children: "tmkhoa.netlify.app"
                      }}
                    />
                  </Link>
                </NormalInline>
              </SkillsApplication>
            </H5>
          </div>
        </address>
        <p className="mt-3 mx-auto raleway" id="objective">
          To learn and apply new knowledge at the frontier of AI, in order to develop innovative
          solutions for various industries and applications.
        </p>
      </header>
      <Separator />
      <main className="d-flex flex-column gap-3 mx-5">
        <Split
          article_children={
            <>
              <ExperienceSection />
            </>
          }
          aside_children={
            <>
              <EducationSection />
              <LinksSection />
              <SkillsSection />
            </>
          }
        />
        <Split
          article_children={
            <>
              <LnASection />
            </>
          }
          aside_children={
            <>
              <CertificationsSection />
            </>
          }
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
