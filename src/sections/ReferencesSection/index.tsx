import Link from "../../components/Link";
import { Subsection } from "../../components/Section";

export default function ReferencesSection() {
  return (
    <Subsection h3_props={{ children: "References" }}>
      Mr Tan Sio Poh
      <br />
      Course Chair, Diploma in Applied Artificial Intelligence, Temasek Polytechnic
      <br />
      <Link href="mailto:tan_sio_poh@tp.edu.sg">tan_sio_poh@tp.edu.sg</Link>
    </Subsection>
  );
}
