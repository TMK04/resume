import Link from "../../components/Link";
import { formatNonEmptyStr } from "../../helpers";

import untyped_skills from "./skills.json";

type SkillKey = keyof typeof untyped_skills;

const skills: Record<SkillKey, { color?: string; short?: string }> = untyped_skills;

export function skillId(skill: string) {
  return skill
    .replace(/\s+/g, "-")
    .replace(/[^0-9A-Za-z-]/g, "")
    .toLowerCase();
}

export function wrap(short: string) {
  return `(${short})`;
}

type SkillProps = { skill: SkillKey };

export default function Skill({ skill }: SkillProps) {
  const { short } = skills[skill];
  return (
    <span id={skillId(skill)}>{`${skill}${formatNonEmptyStr(
      short,
      (short) => ` ${wrap(short)}`
    )}`}</span>
  );
}

export function SkillLink({ skill }: SkillProps) {
  const { color, short } = skills[skill];
  return (
    <Link href={`#${skillId(skill)}`} style={{ color }}>
      {short ? wrap(short) : skill}
    </Link>
  );
}

export function FrameworkLink({
  framework,
  frameworkable
}: Record<"framework" | "frameworkable", SkillKey>) {
  return (
    <span>
      <SkillLink skill={framework} /> <SkillLink skill={frameworkable} />
    </span>
  );
}
