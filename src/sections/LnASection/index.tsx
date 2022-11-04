import { Section } from "../../components/Section";

export default function LnASection() {
  return (
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
            <th>2021</th>
            <td>Participation Award</td>
            <td>
              DSTA Brainhack 2021
              <br />
              Activity: Today I Learned – AI Camp
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
  );
}
