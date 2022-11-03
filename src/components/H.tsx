import { formatNonEmptyClassName } from "../helpers";

import "./H.css";

export function H2({ children, className, ...props }: JSX.IntrinsicElements["h2"]) {
  return (
    <h2 className={`text-primary text-uppercase${formatNonEmptyClassName(className)}`} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: JSX.IntrinsicElements["h3"]) {
  return (
    <h3
      className={`fw-bold text-accent text-uppercase${formatNonEmptyClassName(className)}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: JSX.IntrinsicElements["h3"]) {
  return (
    <h4 className={`raleway text-uppercase${formatNonEmptyClassName(className)}`} {...props}>
      {children}
    </h4>
  );
}

export function H5({ children, className, ...props }: JSX.IntrinsicElements["h3"]) {
  return (
    <h5 className={`fw-bold raleway${formatNonEmptyClassName(className)}`} {...props}>
      {children}
    </h5>
  );
}
