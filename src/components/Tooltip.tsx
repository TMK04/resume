import { useState } from "react";

import { formatNonEmptyClassName } from "../helpers";

import { NonPrint, NonPrintProps } from "./Print";

const TOOLTIP_INITIAL_CLASS_NAME = "text-light";

export default function Tooltip({
  className,
  ...props
}: Omit<NonPrintProps, "onMouseOut" | "onMouseOver">) {
  const [class_name, setClassName] = useState(TOOLTIP_INITIAL_CLASS_NAME);
  return (
    <NonPrint
      className={`bi bi-question-circle cursor-help d-flex fs-6 rounded-circle ${class_name}${formatNonEmptyClassName(
        className
      )}`}
      onMouseOut={() => setClassName(TOOLTIP_INITIAL_CLASS_NAME)}
      onMouseOver={() => setClassName("bg-info text-accent")}
      {...props}
    />
  );
}
