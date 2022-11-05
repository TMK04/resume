import Detail from "./components/Detail";
import { H5 } from "./components/H";
import Link from "./components/Link";
import { NormalInline } from "./components/Normal";
import PrintSwitch from "./components/PrintSwitch";
import { Separator, SeparatorInline } from "./components/Separators";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import LnASection from "./sections/LnASection";
import ReferencesSection from "./sections/ReferencesSection";
import SkillsSection from "./sections/SkillsSection";

import "./App.css";

function App() {
  return (
    <div className="my-3">
      <header className="mx-5 text-center">
        <h1>
          Tran Minh <strong>Khoa</strong>
        </h1>
        <address>
          <Link className="text-secondary" href="mailto:t.m.khoa.2308@gmail.com">
            <Detail>t.m.khoa.2308@gmail.com</Detail>
          </Link>
          <SeparatorInline className="fw-bold">|</SeparatorInline>
          <Link className="text-secondary" href="tel:+6580138550">
            <Detail>+65 8013 8550</Detail>
          </Link>
          <div>
            <H5>
              {"Digital Resume: "}
              <NormalInline>
                <Link href="https://tmk04-resume.s3.ap-southeast-1.amazonaws.com/index.html">
                  <PrintSwitch
                    normal={{ children: "tmk04-resume" }}
                    print={{
                      children: "https://tmk04-resume.s3.ap-southeast-1.amazonaws.com/index.html"
                    }}
                  />
                </Link>
              </NormalInline>
            </H5>
          </div>
        </address>
      </header>
      <Separator />
      <main className="d-flex flex-column flex-md-row-reverse gap-md-5 mx-5">
        <article className="d-flex flex-column gap-3" id="top-article">
          <ExperienceSection />
          <LnASection />
        </article>
        <br className="d-none d-print-block" />
        <aside className="d-flex flex-column gap-3" id="top-aside">
          <EducationSection />
          <LinksSection />
          <SkillsSection />
        </aside>
      </main>
      <Separator />
      <footer className="mx-5">
        <ReferencesSection />
      </footer>
    </div>
  );
}

export default App;
