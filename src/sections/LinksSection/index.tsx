import Link from "../../components/Link";
import { PrintSwitch } from "../../components/Print";
import { Section } from "../../components/Section";

const github_profile = <span className="fw-bold">TMK04</span>;
const linkedin_profile = <span className="fw-bold">tmk04</span>;

export default function LinksSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Links" }}>
      <address>
        <div>
          <span className="fw-800">
            GitHub:
            <PrintSwitch normal={{ children: "//" }} print={{ children: " " }} />
          </span>
          <Link className="raleway" href="https://github.com/TMK04">
            <PrintSwitch
              normal={{ children: github_profile }}
              print={{ children: <>github.com/{github_profile}</> }}
            />
          </Link>
        </div>
        <div>
          <span className="fw-800">
            LinkedIn:
            <PrintSwitch normal={{ children: "//" }} print={{ children: " " }} />
          </span>
          <Link className="raleway" href="https://linkedin.com/in/tmk04">
            <PrintSwitch
              normal={{ children: linkedin_profile }}
              print={{ children: <>linkedin.com/in/{linkedin_profile}</> }}
            />
          </Link>
        </div>
      </address>
    </Section>
  );
}
