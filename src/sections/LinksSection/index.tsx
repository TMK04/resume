import Link from "../../components/Link";
import { Section } from "../../components/Section";

export default function LinksSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Links" }}>
      <address>
        <div>
          GitHub://
          <Link className="text-accent" href="https://github.com/TMK04">
            TMK04
          </Link>
        </div>
        <div>
          LinkedIn://
          <Link className="text-accent" href="https://www.linkedin.com/in/tmk04">
            tmk04
          </Link>
        </div>
      </address>
    </Section>
  );
}
