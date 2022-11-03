import BulletList from "./components/BulletList";
import { H4, H5 } from "./components/H";
import Link from "./components/Link";
import { NormalInline } from "./components/Normal";
import { Section, Subsection } from "./components/Section";
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
            <Subsection
              h3_props={{
                children: (
                  <Link href="http://polyfintech100hackathon.sg">
                    PolyFinTech 100 API Hackathon
                  </Link>
                )
              }}
            >
              <H5>
                <BulletList
                  items={[
                    <>React (TS)</>,
                    <>React Native (TS)</>,
                    <>CSS</>,
                    <>Solidity</>,
                    <>Git</>
                  ]}
                />
              </H5>
              <Time>April 2022 - November 2022</Time>
              <ul>
                <li>
                  Created & deployed a <b>Web3-powered</b> ecosystem featuring an E-commerce Website
                  & a Walk-for-rewards App
                </li>
                <li>
                  Worked in a <b>team of 6</b> using Git, Discord, & Remnote to organize code,
                  communication, & knowledge respectively
                </li>
              </ul>
            </Subsection>
            <Subsection
              h3_props={{
                children: "Papa Yu's",
                description: "Recipes Website"
              }}
            >
              <H5>
                <BulletList items={[<>React (TS)</>, <>CSS</>, <>Git</>]} />
              </H5>
              <Time>April 2022 - August 2022</Time>
              <ul>
                <li>Set up Elastic Beanstalk, Lambda, S3, & other services on AWS Cloud</li>
                <li>Incorporated both Fulltext & Tag-based search</li>
              </ul>
            </Subsection>
            <Subsection
              h3_props={{
                children: <Link href="https://github.com/TMK04/sourcerer">Sourcerer</Link>,
                description: "Research Automation Tool"
              }}
            >
              <H5>
                <BulletList items={[<>UiPath</>, <>Git</>]} />
              </H5>
              <Time>April 2022 - August 2022</Time>
              <ul>
                <li>
                  Automated <em>Keyword Extraction</em> & <em>Outsourcing of References</em>
                </li>
                <li>
                  Shortened research time from <em>several minutes</em>
                  {" to "}
                  <strong>30 seconds</strong>
                </li>
              </ul>
            </Subsection>
            <Subsection
              h3_props={{
                children: (
                  <Link href="https://github.com/TMK04/mldp-project">
                    Data Science Job Salaries Predictor
                  </Link>
                )
              }}
            >
              <H5>
                <BulletList items={[<>Python Notebooks</>, <>HTML</>, <>Git</>]} />
              </H5>
              <Time>May 2022 - August 2022</Time>
              <ul>
                <li>
                  Experimented with more than 6 Machine Learning models to predict annual salaries
                  in the field of Data Science
                </li>
                <li>
                  Followed the <strong>CRISP-DM Framework</strong>
                </li>
              </ul>
            </Subsection>
            <Subsection
              h3_props={{
                children: <Link href="https://github.com/TMK04/hauterev">Hauterev</Link>
              }}
            >
              <H5>
                <BulletList items={[<>Web Components (TS)</>, <>CSS</>, <>MySQL</>, <>Git</>]} />
              </H5>
              <Time>October 2021 - February 2022</Time>
              <ul>
                <li>Incorporated Fulltext search with filters</li>
              </ul>
            </Subsection>
          </Section>
          <Section h2_props={{ children: "Leadership & Awards" }}>
            <table className="table table-hover table-striped">
              <tbody>
                <tr>
                  <th>2022</th>
                  <td>
                    6<sup>th</sup>/137 teams
                    <br />1<sup>st</sup>/14 teams in Category
                  </td>
                  <td>
                    PolyFinTech 100 API Hackathon
                    <br />
                    Category: Creator Economy (Team Mala)
                  </td>
                </tr>
                <tr>
                  <th>2020</th>
                  <td>
                    Section Leader &<br />
                    Service Award
                  </td>
                  <td>Secondary School Choir</td>
                </tr>
                <tr>
                  <th>2017</th>
                  <td>Bronze in School</td>
                  <td>Singapore Maths Olympiad Round 1</td>
                </tr>
              </tbody>
            </table>
          </Section>
        </article>
        <aside className="d-flex flex-column gap-3" id="top-aside">
          <Section h2_props={{ children: "Education" }}>
            <Subsection h3_props={{ children: <>Temasek Polytechnic</> }}>
              <H4>Diploma in Applied Artficial Intelligence</H4>
              <Time>Grad. April 2023 (expected)</Time>
              School of Informatics & Information Technology
              <H5 className="text-accent">Cum. GPA: 3.86 / 4.0</H5>
            </Subsection>
          </Section>
          <Section className="mb-2" h2_props={{ children: "Links" }}>
            <address>
              <div>
                GitHub://<Link href="https://github.com/TMK04">TMK04</Link>
              </div>
              <div>
                LinkedIn://<Link href="https://www.linkedin.com/in/tmk04">tmk04</Link>
              </div>
            </address>
          </Section>
          <Section h2_props={{ children: "Coursework" }}>
            <Subsection h3_props={{ children: <>Undergraduate</> }}>
              <div>Data Science & Machine Learning</div>
              <div>Robotics Process Automation</div>
              <div>Cloud Technologies (AWS)</div>
              <div>Fullstack Website Development</div>
              <div>Security Essentials</div>
              <div>Mobile App Development</div>
              <div>UI & UX</div>
              <div>Network Technology</div>
              <div>Communication</div>
            </Subsection>
          </Section>
          <Section h2_props={{ children: "Skills" }}>
            <Subsection h3_props={{ children: <>Programming</> }}>
              <H5>Over 5000 lines:</H5>
              <BulletList
                items={[
                  <>TypeScript (TS)</>,
                  <>JavaScript (JS)</>,
                  <>React</>,
                  <>HTML</>,
                  <>CSS</>,
                  <i>Git</i>
                ]}
              />
              <H5>Over 1000 lines:</H5>
              <BulletList
                items={[
                  <>Python</>,
                  <>Markdown</>,
                  <>React Native</>,
                  <>Web Components</>,
                  <>UiPath</>,
                  <>MySQL</>,
                  <>Java</>,
                  <>XML</>,
                  <i>Adobe XD</i>
                ]}
              />
              <H5>Familiar:</H5>
              <BulletList items={[<>Solidity</>, <>GraphQL</>, <>Kotlin</>]} />
              <H5>WPM: 91</H5>
            </Subsection>
            <Subsection h3_props={{ children: <>Soft Skills</> }}>
              <H5>
                Adaptibility:
                <NormalInline>
                  {" "}
                  I am <strong>open-minded</strong> & <strong>calm under pressure</strong>.
                </NormalInline>
              </H5>
              <H5>
                Never-ending Curiosity:
                <NormalInline>
                  {" I will "}
                  <strong>question</strong>
                  {". I will "}
                  <strong>research</strong>
                  {". I will "}
                  <em>find out</em>.
                </NormalInline>
              </H5>
              <H5>
                High Achiever:
                <NormalInline>
                  {" I go the extra mile to deliver "}
                  <em>exceptional</em>
                  {" results."}
                </NormalInline>
              </H5>
              <H5>
                Prosocial:
                <NormalInline>
                  {" I enjoy "}
                  <strong>working with others</strong>
                  {" and bringing the the best out of everyone's ideas."}
                </NormalInline>
              </H5>
              <H5>
                Systematic:
                <NormalInline>
                  {" I use "}
                  <strong>frameworks</strong>
                  {" to plan, execute, & explain my work."}
                </NormalInline>
              </H5>
            </Subsection>
          </Section>
        </aside>
      </main>
    </div>
  );
}

export default App;
