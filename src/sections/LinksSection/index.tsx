import Link from "../../components/Link";
import Logo from "../../components/Logo";
import { PrintSwitch } from "../../components/Print";
import { Section } from "../../components/Section";

const github_profile = <span className="fw-bold">TMK04</span>;
const linkedin_profile = <span className="fw-bold">tmk04</span>;

export default function LinksSection() {
  return (
    <Section className="mb-2" h2_props={{ children: "Links" }}>
      <address>
        <span className="align-middle d-block fw-800">
          <Logo alt="GitHub" src="res/github.svg" />
          <Link className="raleway" href="https://github.com/TMK04">
            <span className="fw-bold text-body">
              <PrintSwitch
                normal={{
                  children: "GitHub://"
                }}
                print={{ children: " github.com/" }}
              />
            </span>
            {github_profile}
          </Link>
        </span>
        <span className="align-middle d-block fw-800">
          <Logo alt="LinkedIn" src="res/linkedin.png" />
          <Link className="raleway" href="https://linkedin.com/in/tmk04">
            <span className="fw-bold text-body">
              <PrintSwitch
                normal={{
                  children: "LinkedIn://"
                }}
                print={{ children: " linkedin.com/in/" }}
              />
            </span>
            {linkedin_profile}
          </Link>
        </span>
      </address>
    </Section>
  );
}
