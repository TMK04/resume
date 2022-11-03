import { H3, H4, H5 } from "./components/H";
import Link from "./components/Link";
import { Section } from "./components/Section";
import { Separator, SeparatorInline } from "./components/Separators";
import Time from "./components/Time";

function App() {
  return (
    <div className="my-3">
      <header className="mx-5 text-center">
        <h1>
          Tran Minh <strong>Khoa</strong>
        </h1>
        <address>
          <Link href="mailto:t.m.khoa.2308@gmail.com">t.m.khoa.2308@gmail.com</Link>
          <SeparatorInline className="fw-bold">|</SeparatorInline>
          <Link href="tel:+6580138550">+65 8013 8550</Link>
          <div>
            <Link href="mailto:2101432i@student.tp.edu.sg">2101432i@student.tp.edu.sg</Link>
          </div>
        </address>
      </header>
      <Separator />
      <main className="mx-5">
        <Section h2_props={{ children: "Education" }}>
          <H3>Temasek Polytechnic</H3>
          <H4>Diploma in Applied Artficial Intelligence</H4>
          <Time>Grad. April 2023 (expected)</Time>
          School of Informatics & Information Technology
          <H5 className="text-accent">Cum. GPA: 3.86 / 4.0</H5>
        </Section>
      </main>
    </div>
  );
}

export default App;
