import { formatNonEmptyClassName } from "../helpers";

export function NormalInline({ className, ...props }: JSX.IntrinsicElements["span"]) {
  return (
    <span className={`fs-6 fst-normal fw-normal${formatNonEmptyClassName(className)}`} {...props} />
  );
}
