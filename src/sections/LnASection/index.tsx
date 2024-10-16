import Link from "../../components/Link";
import { Section } from "../../components/Section";

export default function LnASection() {
  return (
    <Section h2_props={{ children: "Leadership & Awards" }}>
      <table className="table table-hover table-striped">
        <tbody>
          <tr>
            <th>2023</th>
            <td>Director's List</td>
            <td>Temasek Polytechnic, Diploma in Applied Artificial Intelligence</td>
          </tr>
          <tr>
            <th></th>
            <td>
              8<sup>th</sup>/31 teams in Computer Vision
            </td>
            <td id="brainhack-2023">
              <Link href="https://zindi.africa/competitions/brainhack-til-23-advanced-cv/leaderboard">
                DSTA BrainHack 2023 (Today I Learned — AI Camp)
              </Link>
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <Link href="https://certificates.aisingapore.org/certificate-verification/87767-853DB-8048F">
                Participation Award
              </Link>
            </td>
            <td id="naisc-2022">
              <Link href="https://learn.aisingapore.org/national-ai-student-challenge-2022">
                National AI Student Challenge 2022
              </Link>
            </td>
          </tr>
          <tr>
            <th>2022</th>
            <td>
              6<sup>th</sup>/137 teams
              <br />1<sup>st</sup>/14 teams in Category
            </td>
            <td>
              <Link id="lna-pf100-2022" href="http://polyfintech100hackathon.sg">
                PolyFinTech 100 API Hackathon 2022
              </Link>
              <br />
              Category: Creator Economy (Team Mala)
            </td>
          </tr>
          <tr>
            <th>2021</th>
            <td>Participation Award</td>
            <td>DSTA Brainhack 2021 (Today I Learned — AI Camp)</td>
          </tr>
          <tr>
            <th>2020</th>
            <td>
              Section Leader &<br />
              Service Award
            </td>
            <td>Dunman Secondary School Choir</td>
          </tr>
          <tr>
            <th>2017</th>
            <td>Bronze in School</td>
            <td>Singapore Maths Olympiad Round 1</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
