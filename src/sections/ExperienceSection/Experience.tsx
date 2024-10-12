import BulletList from "../../components/BulletList";
import { H5 } from "../../components/H";
import { Subsection, SubsectionProps } from "../../components/Section";
import Time, { TimeProps } from "../../components/Time";

type ExperienceProps = SubsectionProps & {
  skills: ChildrenProp[];
  time_props: TimeProps;
};

export default function Experience({ children, skills, time_props, ...props }: ExperienceProps) {
  return (
    <Subsection {...props}>
      <H5>
        <BulletList items={skills} />
      </H5>
      <Time {...time_props} />
      {children}
    </Subsection>
  );
}
