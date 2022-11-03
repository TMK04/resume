import { formatNonEmptyClassName } from "../helpers";

import { H5 } from "./H";

export default function Time({ className, ...props }: JSX.IntrinsicElements["h3"]) {
  return <H5 className={`text-light${formatNonEmptyClassName(className)}`} {...props} />;
}
