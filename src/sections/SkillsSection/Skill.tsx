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

type BaseSkillProps = Omit<JSX.IntrinsicElements["button"], "onBlur" | "onFocus" | "style"> &
  PropsWithSkill &
  Partial<Record<"blur_style" | "focus_style", CSSProperties>>;

function BaseSkill({
  className,
  blur_style: blur_style_prop,
  focus_style,
  skill,
  ...props
}: BaseSkillProps) {
  const skill_color = skills[skill].color || "rgb(var(--text))";

  const blur_style: CSSProperties = {
    backgroundColor: "transparent",
    color: skill_color,
    padding: 0,
    ...blur_style_prop
  };
  const [style, setStyle] = useState(blur_style);

  return (
    <button
      className={`border-0 rounded-1 skill${formatNonEmptyClassName(className)}`}
      onBlur={() => {
        setStyle(blur_style);
      }}
      onFocus={() => {
        setStyle({
          backgroundColor: skill_color,
          color: "white",
          padding: "0 0.18rem",
          ...focus_style
        });
      }}
      style={style}
      {...props}
    />
  );
}

export default function Skill({
  skill,
  ...props
}: Omit<BaseSkillProps, "id" | "onBlur" | "onFocus" | "style">) {
  const short = skills[skill].short;

  return (
    <BaseSkill
      blur_style={{ fontWeight: "normal" }}
      focus_style={{ fontWeight: "bold" }}
      id={skillId(skill)}
      skill={skill}
      {...props}
    >{`${skill}${formatNonEmptyStr(short, (short) => ` ${wrap(short)}`)}`}</BaseSkill>
  );
}

type SkillLinkProps = PropsWithSkill & {
  format?: (skill: string) => string;
};

export function SkillLink({ format, skill }: SkillLinkProps) {
  format ||= (skill: string) => skill;
  const short = skills[skill].short;

  return (
    <BaseSkill
      blur_style={{ fontWeight: "bold" }}
      onClick={() => {
        const el = document.getElementById(skillId(skill));
        if (el) {
          el.focus();
          setTimeout(() => el.blur(), 1500);
        }
      }}
      skill={skill}
    >
      {format(short || skill)}
    </BaseSkill>
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
