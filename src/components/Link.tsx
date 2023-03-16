import { formatNonEmptyClassName } from "../helpers";

export type LinkProps = JSX.IntrinsicElements["a"];
export default function Link({ children, className, target, ...props }: LinkProps) {
  return (
    <a
      className={`info text-decoration-none${formatNonEmptyClassName(className)}`}
      target={target || "_blank"}
      {...props}
    >
      {children}
    </a>
  );
}
