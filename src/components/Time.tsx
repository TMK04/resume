import { formatNonEmptyClassName } from "../helpers";

import { H5 } from "./H";

export type TimeProps = JSX.IntrinsicElements["h3"];

export default function Time({ className, ...props }: TimeProps) {
  return <H5 className={`text-light${formatNonEmptyClassName(className)}`} {...props} />;
}
