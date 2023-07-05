import { Subsection } from "../../components/Section";

import Reference from "./Reference";

export default function ReferencesSection() {
  return (
    <Subsection className="d-flex flex-column gap-1" h3_props={{ children: "References" }}>
      <Reference
        name="Mr. Tan Sio Poh"
        title="Course Chair, Diploma in Applied Artificial Intelligence, Temasek Polytechnic"
        email="tan_sio_poh@tp.edu.sg"
        tel="(+65)67806920"
        relationship="Mr. Tan was my Careperson & Lecturer throughout my time in Temasek Polytechnic."
      />
      <Reference
        name="Ms. Shuyun Cheng"
        title="Manager/Student Development, Temasek Polytechnic"
        email="cheng_shuyun@tp.edu.sg"
        tel="(+65)67806955"
        relationship="Ms. Cheng was my AI Lecturer in 2022."
      />
    </Subsection>
  );
}
