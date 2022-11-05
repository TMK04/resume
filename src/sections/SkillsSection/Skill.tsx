import { CSSProperties, useState } from "react";

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
  const skills_skill = skills[skill];
  const short = skills_skill.short;
  const skill_color = skills_skill.color || "rgb(var(--text))";

  const initial_style: CSSProperties = {
    backgroundColor: "transparent",
    color: skill_color,
    fontWeight: "normal"
  };
  const [style, setStyle] = useState(initial_style);

  return (
    <button
      className="border-0 cursor-default p-0"
      id={skillId(skill)}
      onBlur={() => {
        setStyle(initial_style);
      }}
      onFocus={() => {
        setStyle({
          backgroundColor: skill_color,
          color: "white",
          fontWeight: "bold"
        });
      }}
      style={style}
    >{`${skill}${formatNonEmptyStr(short, (short) => ` ${wrap(short)}`)}`}</button>
  );
}

export function SkillLink({ skill }: SkillProps) {
  const { color, short } = skills[skill];
  return (
    <span
      onClick={() => {
        const el = document.getElementById(skillId(skill));
        el?.focus();
      }}
      style={{ color }}
      role="button"
    >
      {short ? wrap(short) : skill}
    </span>
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
