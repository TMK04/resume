import { CSSProperties, useState } from "react";

import { formatNonEmptyClassName, formatNonEmptyStr } from "../../helpers";

import untyped_skills from "./skills.json";

import "./Skill.css";

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

type PropsWithSkill = {
  skill: SkillKey;
};

type SkillProps = Omit<JSX.IntrinsicElements["button"], "id" | "onBlur" | "onFocus" | "style"> &
  PropsWithSkill;

export default function Skill({ className, skill, ...props }: SkillProps) {
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
      className={`border-0 cursor-default p-0 skill${formatNonEmptyClassName(className)}`}
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
      {...props}
    >{`${skill}${formatNonEmptyStr(short, (short) => ` ${wrap(short)}`)}`}</button>
  );
}

type SkillLinkProps = PropsWithSkill & {
  format?: (skill: string) => string;
};

export function SkillLink({ format, skill }: SkillLinkProps) {
  format ||= (skill: string) => skill;
  const { color, short } = skills[skill];
  return (
    <span
      onClick={() => {
        const el = document.getElementById(skillId(skill));
        if (el) {
          el.focus();
          setTimeout(() => el.blur(), 1500);
        }
      }}
      style={{ color }}
      role="button"
    >
      {format(short || skill)}
    </span>
  );
}

export function FrameworkLink({
  framework,
  frameworkable
}: Record<"framework" | "frameworkable", SkillKey>) {
  return (
    <span>
      <SkillLink skill={framework} /> <SkillLink format={wrap} skill={frameworkable} />
    </span>
  );
}
