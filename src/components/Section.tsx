import { H2 } from "./H";

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
