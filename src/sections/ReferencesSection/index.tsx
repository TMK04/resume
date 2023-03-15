import Link from "../../components/Link";
import { Subsection } from "../../components/Section";

export default function ReferencesSection() {
  return (
    <Subsection h3_props={{ children: "References" }}>
      <span className="fw-bold">Mr Tan Sio Poh</span>
      <br />
      Course Chair, Diploma in Applied Artificial Intelligence, Temasek Polytechnic
      <br />
      <Link className="fw-bold" href="mailto:tan_sio_poh@tp.edu.sg">
        tan_sio_poh@tp.edu.sg
      </Link>
    </Subsection>
  );
}
