import { formatNonEmptyClassName } from "../helpers";

import { H2, H3, H4 } from "./H";

type SectionProps = JSX.IntrinsicElements["section"] & {
  h2_props: JSX.IntrinsicElements["h2"];
};

export function Section({
  children,
  h2_props: { children: h2_children, ...h2_props },
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <H2 {...h2_props}>{h2_children}</H2>
      {children}
    </section>
  );
}

export type SubsectionProps = JSX.IntrinsicElements["section"] & {
  h3_props: JSX.IntrinsicElements["h3"] & {
    description?: ChildrenProp;
  };
};

export function Subsection({
  children,
  className,
  h3_props: { children: h3_children, description, className: h3_className, ...h3_props },
  ...props
}: SubsectionProps) {
  return (
    <section className={`mb-2${formatNonEmptyClassName(className)}`} {...props}>
      <H3
        className={`text-decoration-underline${formatNonEmptyClassName(h3_className)}`}
        {...h3_props}
      >
        {h3_children}
        {description ? <H4 className="d-inline"> - {description}</H4> : <></>}
      </H3>
      {children}
    </section>
  );
}
