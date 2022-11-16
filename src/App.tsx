import { H5 } from "./components/H";
import Link from "./components/Link";
import { NormalInline } from "./components/Normal";
import { PrintSwitch } from "./components/Print";
import { Separator, SeparatorInline } from "./components/Separators";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import LnASection from "./sections/LnASection";
import ReferencesSection from "./sections/ReferencesSection";
import SkillsSection from "./sections/SkillsSection";
import { SkillsApplication } from "./sections/SkillsSection/Skill";

import "./App.css";

function App() {
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
                  <Link className="fw-bold" href="https://tmk04-resume.com">
                    <PrintSwitch
                      normal={{ children: "tmk04-resume.com" }}
                      print={{
                        children: "https://tmk04-resume.s3.ap-southeast-1.amazonaws.com/index.html"
                      }}
                    />
                  </Link>
                </NormalInline>
              </SkillsApplication>
            </H5>
          </div>
        </address>
      </header>
      <Separator />
      <main className="d-flex flex-column flex-md-row gap-md-5 mx-5">
        <aside className="d-flex flex-column gap-3" id="top-aside">
          <EducationSection />
          <LinksSection />
          <SkillsSection />
        </aside>
        <article className="d-flex flex-column gap-3" id="top-article">
          <ExperienceSection />
          <LnASection />
        </article>
        <br className="d-none d-print-block" />
      </main>
      <Separator />
      <footer className="mx-5">
        <ReferencesSection />
      </footer>
    </div>
  );
}

export default App;
