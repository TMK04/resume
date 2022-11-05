import { formatNonEmptyClassName } from "../helpers";

export default function Link({
  children,
  className,
  ...props
}: Omit<JSX.IntrinsicElements["a"], "target">) {
  return (
    <a
      className={`info text-decoration-none${formatNonEmptyClassName(className)}`}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}
