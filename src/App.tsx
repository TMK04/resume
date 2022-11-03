import BulletList from "./components/BulletList";
import { H3, H4, H5 } from "./components/H";
import Link from "./components/Link";
import { Section } from "./components/Section";
import { Separator, SeparatorInline } from "./components/Separators";
import Time from "./components/Time";

import "./App.css";

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
      <main className="d-flex flex-column flex-md-row-reverse gap-md-5 mx-5">
        <article className="d-flex flex-column gap-3" id="top-article">
          <Section h2_props={{ children: "Experience" }}>
            <H3>
              <Link href="http://polyfintech100hackathon.sg">PolyFinTech 100 API Hackathon</Link>
            </H3>
            <H5>
              <BulletList
                items={[<>React (TS)</>, <>React Native (TS)</>, <>CSS</>, <>Solidity</>, <>Git</>]}
              />
            </H5>
            <Time>April 2022 - November 2022</Time>
            <ul>
              <li>
                Created & deployed a <b>Web3-powered</b> ecosystem featuring an E-commerce Website &
                a Walk-for-rewards App
              </li>
              <li>
                Worked in a <b>team of 6</b> using Git, Discord, & Remnote to organize code,
                communication, & knowledge respectively
              </li>
            </ul>
          </Section>
        </article>
        <aside className="d-flex flex-column gap-3" id="top-aside">
          <Section h2_props={{ children: "Education" }}>
            <H3>Temasek Polytechnic</H3>
            <H4>Diploma in Applied Artficial Intelligence</H4>
            <Time>Grad. April 2023 (expected)</Time>
            School of Informatics & Information Technology
            <H5 className="text-accent">Cum. GPA: 3.86 / 4.0</H5>
          </Section>
        </aside>
      </main>
    </div>
  );
}

export default App;
