import { formatNonEmptyClassName } from "../helpers";

export default function Link({
  children,
  className,
  target,
  ...props
}: JSX.IntrinsicElements["a"]) {
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
