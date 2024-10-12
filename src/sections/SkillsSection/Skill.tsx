import { PropsWithChildren } from "react";

import Link, { LinkProps } from "../../components/Link";
import { formatNonEmptyClassName } from "../../helpers";

import untyped_skills from "./skills.json";

import "./Skill.css";

type SkillKey = keyof typeof untyped_skills;

const skills: Record<SkillKey, { color?: string; framework_of?: SkillKey[] }> =
  untyped_skills as any;

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

function BaseSkill({ className, color, skill, ...props }: BaseSkillProps) {
  color ||= skills[skill].color || "rgb(var(--text))";

  return (
    <button
      className={`border-0 rounded-1 skill text-start ${INITIAL_CLASS_LIST.join(
        " "
      )}${formatNonEmptyClassName(className)}`}
      style={{
        backgroundColor: color,
        color,
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
  const id = skillId(skill);
  const skill_applications = document.querySelectorAll(`[data-skills~=${id}]`);

  return (
    <BaseSkill
      disabled={!skill_applications.length}
      id={id}
      onClick={() => {
        skill_applications.forEach((el) => tttSkill(el as HTMLElement, [], 3500));
      }}
      skill={skill}
      {...props}
    >
      {skill}
    </BaseSkill>
  );
}

type PropsWithSkills = {
  skills?: SkillKey[];
};

export type SkillsApplicationProps = BaseSkillProps & PropsWithSkills;

function addFrameworks(skills_set: Set<SkillKey>, framework_of: SkillKey[]) {
  for (const frameworkable of framework_of) {
    skills_set.add(frameworkable);
    const framework_of = skills[frameworkable].framework_of;
    if (framework_of) {
      addFrameworks(skills_set, framework_of);
    }
  }
}

function frameworkSkills(skills_prop: SkillKey[] | undefined, skill: SkillKey) {
  skills_prop ||= [skill];
  const skills_set = new Set<SkillKey>(skills_prop).add(skill);
  for (const skill of skills_prop) {
    const framework_of = skills[skill].framework_of;
    if (framework_of) {
      addFrameworks(skills_set, framework_of);
    }
  }
  return skills_set;
}

export function SkillsApplication({
  skill,
  skills: skills_prop,
  ...props
}: SkillsApplicationProps) {
  const skills_set = frameworkSkills(skills_prop, skill);

  return (
    <BaseSkill
      data-skills={Array.from(skills_set).map(skillId).join(" ")}
      skill={skill}
      {...props}
    />
  );
}

export type SkillsApplicationLinkProps = PropsWithChildren<{
  link_props: Omit<LinkProps, "children">;
  sa_props: Omit<SkillsApplicationProps, "children" | "color">;
}>;
export function SkillsApplicationLink({
  children,
  link_props,
  sa_props
}: SkillsApplicationLinkProps) {
  return (
    <Link {...link_props}>
      <SkillsApplication className="fw-bold" color="var(--bs-link-color)" {...sa_props}>
        {children}
      </SkillsApplication>
    </Link>
  );
}

export function ForwardSkillsApplication({ children, ...props }: SkillsApplicationProps) {
  return (
    <SkillsApplication disabled {...props}>
      {children}
    </SkillsApplication>
  );
}

type SkillsLinkProps = PropsWithSkill &
  PropsWithSkills & {
    format?: (skill: string) => string;
  };

export function SkillsLink({ format, skill, skills: skills_prop }: SkillsLinkProps) {
  format ||= (skill: string) => skill;
  const skills_set = frameworkSkills(skills_prop, skill);

  return (
    <SkillsApplication
      className="fw-bold"
      onClick={() => {
        let focused = false;
        for (const skill of skills_set) {
          const el = document.getElementById(skillId(skill));
          if (el) {
            if (!focused) {
              el.focus();
            }
            tttSkill(el, [], 1500);
            focused = true;
          }
        }
      }}
      skill={skill}
      skills={skills_prop}
    >
      {format(skill)}
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
      format={(framework) => `${framework} ${wrap(frameworkable)}`}
    />
  );
}
