import Detail from "../../components/Detail";
import Link from "../../components/Link";
import PrintSwitch from "../../components/PrintSwitch";
import { Section } from "../../components/Section";

export default function LinksSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Links" }}>
      <address>
        <div>
          GitHub:
          <PrintSwitch normal={{ children: "//" }} print={{ children: " " }} />
          <Link className="fw-bold text-accent" href="https://github.com/TMK04">
            <Detail>
              <PrintSwitch
                normal={{ children: "TMK04" }}
                print={{ children: "https://github.com/TMK04" }}
              />
            </Detail>
          </Link>
        </div>
        <div>
          LinkedIn:
          <PrintSwitch normal={{ children: "//" }} print={{ children: " " }} />
          <Link className="fw-bold text-accent" href="https://www.linkedin.com/in/tmk04">
            <Detail>
              <PrintSwitch
                normal={{ children: "tmk04" }}
                print={{ children: "https://www.linkedin.com/in/tmk04" }}
              />
            </Detail>
          </Link>
        </div>
      </address>
    </Section>
  );
}
