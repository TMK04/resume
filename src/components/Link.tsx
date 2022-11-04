import { formatNonEmptyClassName } from "../helpers";

import "./Link.css";

export default function Link({ children, className, ...props }: JSX.IntrinsicElements["a"]) {
  return (
    <a className={`link text-decoration-none${formatNonEmptyClassName(className)}`} {...props}>
      {children}
    </a>
  );
}
