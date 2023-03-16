import type { ReactNode } from "react";

import Link from "../../components/Link";
import { ForwardSkillsApplication, SkillsApplicationProps } from "../SkillsSection/Skill";

type CertificationProps = Omit<Parameters<typeof Link>[0], "className">;
export default function Certification(props: CertificationProps) {
  return <Link className="fw-bold" {...props} />;
}

export function SkillCertification<
  T extends {
    certificationFn: (children: ReactNode) => JSX.Element;
    fsa_props: SkillsApplicationProps;
  }
>({ certificationFn, fsa_props }: T) {
  return (
    <ForwardSkillsApplication {...fsa_props}>
      {certificationFn(fsa_props.skill)}
    </ForwardSkillsApplication>
  );
}

export function CodecademyCertification({ href, ...props }: CertificationProps) {
  return (
    <Certification
      href={`https://www.codecademy.com/profiles/floer.learner/certificates/${href}`}
      {...props}
    />
  );
}
