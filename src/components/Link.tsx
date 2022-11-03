import { formatNonEmptyClassName } from "../helpers";

import Detail from "./Detail";

import "./Link.css";

type LinkProps = Omit<JSX.IntrinsicElements["a"], "children"> & {
  children: string;
};

export default function Link({ children, className, ...props }: LinkProps) {
  return (
    <Detail>
      <a
        className={`link text-decoration-none text-secondary${formatNonEmptyClassName(className)}`}
        {...props}
      >
        {children}
      </a>
    </Detail>
  );
}
