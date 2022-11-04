import { Subsection, SubsectionProps } from "../../components/Section";

type CoursesProps = Omit<SubsectionProps, "children"> & {
  courses: ChildrenProp[];
};

export default function Courses({ courses, ...props }: CoursesProps) {
  return (
    <Subsection {...props}>
      {courses.map((course, i) => (
        <div key={i}>{course}</div>
      ))}
    </Subsection>
  );
}
