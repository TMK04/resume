import Detail from "../../components/Detail";
import Link from "../../components/Link";
import { Section } from "../../components/Section";

export default function LinksSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Links" }}>
      <address>
        <div>
          GitHub://
          <Link className="fw-bold text-accent" href="https://github.com/TMK04">
            <Detail>TMK04</Detail>
          </Link>
        </div>
        <div>
          LinkedIn://
          <Link className="fw-bold text-accent" href="https://www.linkedin.com/in/tmk04">
            <Detail>tmk04</Detail>
          </Link>
        </div>
      </address>
    </Section>
  );
}
