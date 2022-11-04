import Detail from "./components/Detail";
import Link from "./components/Link";
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
            <Link className="text-secondary" href="mailto:2101432i@student.tp.edu.sg">
              <Detail>2101432i@student.tp.edu.sg</Detail>
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
