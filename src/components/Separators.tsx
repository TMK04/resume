import { formatNonEmptyClassName } from "../helpers";

import "./Separators.css";

export function Separator({ className, ...props }: JSX.IntrinsicElements["div"]) {
  return (
    <div className={`bg-primary my-2 separator${formatNonEmptyClassName(className)}`} {...props} />
  );
}

export function SeparatorInline({ className, ...props }: JSX.IntrinsicElements["span"]) {
  return <span className={`separator-inline${formatNonEmptyClassName(className)}`} {...props} />;
}
