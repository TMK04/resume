import Link from "./components/Link";
import { Separator, SeparatorInline } from "./components/Separators";
import CourseworkSection from "./sections/CourseworkSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import LinksSection from "./sections/LinksSection";
import LnASection from "./sections/LnASection";
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
            t.m.khoa.2308@gmail.com
          </Link>
          <SeparatorInline className="fw-bold">|</SeparatorInline>
          <Link className="text-secondary" href="tel:+6580138550">
            +65 8013 8550
          </Link>
          <div>
            <Link className="text-secondary" href="mailto:2101432i@student.tp.edu.sg">
              2101432i@student.tp.edu.sg
            </Link>
          </div>
        </address>
      </header>
      <Separator />
      <main className="d-flex flex-column flex-md-row-reverse gap-md-5 mx-5">
        <article className="d-flex flex-column gap-3" id="top-article">
          <ExperienceSection />
          <LnASection />
        </article>
        <aside className="d-flex flex-column gap-3" id="top-aside">
          <EducationSection />
          <LinksSection />
          <CourseworkSection />
          <SkillsSection />
        </aside>
      </main>
    </div>
  );
}

export default App;
