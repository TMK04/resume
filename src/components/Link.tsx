import { formatNonEmptyClassName } from "../helpers";

import "./Link.css";

export default function Link({
  children,
  className,
  ...props
}: Omit<JSX.IntrinsicElements["a"], "target">) {
  return (
    <a
      className={`link text-decoration-none${formatNonEmptyClassName(className)}`}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
}
