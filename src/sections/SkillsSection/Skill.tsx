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
          .querySelectorAll(`[data-skills*=${id}]`)
          .forEach((el) => tttSkill(el as HTMLElement, [], 3500));
      }}
      skill={skill}
      {...props}
    >{`${skill}${formatNonEmptyStr(short, (short) => ` ${wrap(short)}`)}`}</BaseSkill>
  );
}

type PropsWithSkills = {
  skills?: SkillKey[];
};

type SkillsApplicationProps = BaseSkillProps & PropsWithSkills;

export function SkillsApplication({ skill, skills, ...props }: SkillsApplicationProps) {
  const skills_set = new Set<SkillKey>(skills || []).add(skill);
  return (
    <BaseSkill
      data-skills={Array.from(skills_set).map(skillId).join(",")}
      skill={skill}
      {...props}
    />
  );
}

export function ForwardSkillsApplication({
  children,
  className,
  ...props
}: SkillsApplicationProps) {
  return (
    <SkillsApplication className={`cursor-default${formatNonEmptyClassName(className)}`} {...props}>
      <strong>{children}</strong>
    </SkillsApplication>
  );
}

type SkillsLinkProps = PropsWithSkill &
  PropsWithSkills & {
    format?: (skill: string) => string;
  };

export function SkillsLink({ format, skill, skills: skills_prop }: SkillsLinkProps) {
  format ||= (skill: string) => skill;
  const skills_set = new Set<SkillKey>(skills_prop || []).add(skill);
  const short = skills[skill].short;

  return (
    <SkillsApplication
      className="fw-bold"
      onClick={() =>
        Promise.allSettled(
          Array.from(skills_set).map(async (skill) => {
            const el = document.getElementById(skillId(skill));
            if (el) {
              el.focus();
              tttSkill(el, ["fw-bold"], 1500);
            }
          })
        )
      }
      skill={skill}
      skills={skills_prop}
    >
      {format(short || skill)}
    </SkillsApplication>
  );
}

export function FrameworkLink({
  framework,
  frameworkable
}: Record<"framework" | "frameworkable", SkillKey>) {
  return (
    <SkillsLink
      skill={framework}
      skills={[frameworkable]}
      format={(framework) => `${framework} ${wrap(skills[frameworkable].short || frameworkable)}`}
    />
  );
}
