import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import { Subsection, SubsectionProps } from "../../components/Section";
import Time, { TimeProps } from "../../components/Time";

type ExperienceProps = SubsectionProps & {
  actions: ChildrenProp[];
  skills: ChildrenProp[];
  time_props: TimeProps;
};

export default function Experience({ actions, skills, time_props, ...props }: ExperienceProps) {
  return (
    <Subsection {...props}>
      <H5>
        <BulletList items={skills} />
      </H5>
      <Time {...time_props} />
      <ul>
        {actions.map((action, i) => (
          <li key={i}>{action}</li>
        ))}
      </ul>
    </Subsection>
  );
}
