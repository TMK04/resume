import Link, { type LinkProps } from "../../components/Link";
import { SkillsApplicationLink, type SkillsApplicationLinkProps } from "../SkillsSection/Skill";

export function SkillsCertification(props: Omit<SkillsApplicationLinkProps, "children">) {
  return <SkillsApplicationLink {...props}>{props.sa_props.skill}</SkillsApplicationLink>;
}

export function CodecademyCertification({ href, ...props }: LinkProps) {
  return (
    <Link
      className="fw-bold"
      href={`https://www.codecademy.com/profiles/floer.learner/certificates/${href}`}
      {...props}
    />
  );
}

export function CodecademySkillsCertification({
  link_props: { href, ...link_props },
  ...props
}: SkillsApplicationLinkProps) {
  return (
    <SkillsCertification
      link_props={{
        href: `https://www.codecademy.com/profiles/floer.learner/certificates/${href}`,
        ...link_props
      }}
      {...props}
    />
  );
}
