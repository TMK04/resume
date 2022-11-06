import { formatNonEmptyClassName, formatNonEmptyStr } from "../../helpers";

import untyped_skills from "./skills.json";

import "./Skill.css";

type SkillKey = keyof typeof untyped_skills;

const skills: Record<SkillKey, { color?: string; short?: string }> = untyped_skills;

const INITIAL_CLASS_LIST = ["bg-transparent", "p-0"];
const TOGGLED_CLASS_LIST = ["text-white"];

function skillId(skill: string) {
  return skill
    .replace(/\s+/g, "-")
    .replace(/[^0-9A-Za-z-]/g, "")
    .toLowerCase();
}

/**
 * Toggle, Timeout, Toggle
 */
function ttt(
  el: HTMLElement,
  initial_class_list: string[],
  toggled_class_list: string[],
  ms: number
) {
  el.classList.remove(...initial_class_list);
  el.classList.add(...toggled_class_list);
  setTimeout(() => {
    el.classList.remove(...toggled_class_list);
    el.classList.add(...initial_class_list);
  }, ms);
}

function tttSkill(el: HTMLElement, toggled_class_list: string[], ms: number) {
  ttt(el, INITIAL_CLASS_LIST, [...TOGGLED_CLASS_LIST, ...toggled_class_list], ms);
}

function wrap(short: string) {
  return `(${short})`;
}

type PropsWithSkill = {
  skill: SkillKey;
};

type BaseSkillProps = Omit<JSX.IntrinsicElements["button"], "onBlur" | "onFocus" | "style"> &
  PropsWithSkill;

function BaseSkill({ className, skill, ...props }: BaseSkillProps) {
  const skill_color = skills[skill].color || "rgb(var(--text))";

  return (
    <button
      className={`border-0 rounded-1 skill ${INITIAL_CLASS_LIST.join(" ")}${formatNonEmptyClassName(
        className
      )}`}
      style={{
        backgroundColor: skill_color,
        color: skill_color,
        padding: "0 0.18rem"
      }}
      {...props}
    />
  );
}

export default function Skill({
  skill,
  ...props
}: Omit<BaseSkillProps, "id" | "onBlur" | "onFocus" | "style">) {
  const short = skills[skill].short;
  const id = skillId(skill);

  return (
    <BaseSkill
      id={id}
      onClick={() => {
        document
          .querySelectorAll(`[data-skill=${id}]`)
          .forEach((el) => tttSkill(el as HTMLElement, [], 3500));
      }}
      skill={skill}
      {...props}
    >{`${skill}${formatNonEmptyStr(short, (short) => ` ${wrap(short)}`)}`}</BaseSkill>
  );
}

export function SkillApplication({ skill, ...props }: BaseSkillProps) {
  return <BaseSkill data-skill={skillId(skill)} skill={skill} {...props} />;
}

export function ForwardSkillApplication({ children, className, ...props }: BaseSkillProps) {
  return (
    <SkillApplication className={`cursor-default${formatNonEmptyClassName(className)}`} {...props}>
      <strong>{children}</strong>
    </SkillApplication>
  );
}

type SkillLinkProps = PropsWithSkill & {
  format?: (skill: string) => string;
};

export function SkillLink({ format, skill }: SkillLinkProps) {
  format ||= (skill: string) => skill;
  const short = skills[skill].short;

  return (
    <SkillApplication
      className="fw-bold"
      onClick={() => {
        const el = document.getElementById(skillId(skill));
        if (el) {
          el.focus();
          tttSkill(el, ["fw-bold"], 1500);
        }
      }}
      skill={skill}
    >
      {format(short || skill)}
    </SkillApplication>
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
