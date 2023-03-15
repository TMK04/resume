import Link from "../../components/Link";
import { PrintSwitch } from "../../components/Print";
import { Section } from "../../components/Section";

export default function LinksSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Links" }}>
      <address>
        <div>
          GitHub:
          <PrintSwitch normal={{ children: "//" }} print={{ children: " " }} />
          <Link className="fw-bold raleway text-accent" href="https://github.com/TMK04">
            <PrintSwitch normal={{ children: "TMK04" }} print={{ children: "github.com/TMK04" }} />
          </Link>
        </div>
        <div>
          LinkedIn:
          <PrintSwitch normal={{ children: "//" }} print={{ children: " " }} />
          <Link className="fw-bold raleway text-accent" href="https://linkedin.com/in/tmk04">
            <PrintSwitch
              normal={{ children: "tmk04" }}
              print={{ children: "linkedin.com/in/tmk04" }}
            />
          </Link>
        </div>
      </address>
    </Section>
  );
}
