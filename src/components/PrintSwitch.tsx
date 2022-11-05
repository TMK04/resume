import { formatNonEmptyClassName } from "../helpers";

export default function PrintSwitch({
  normal: { className: normal_className, ...normal_props },
  print: { className: print_className, ...print_props }
}: Record<"normal" | "print", JSX.IntrinsicElements["span"]>) {
  return (
    <>
      <span
        className={`d-print-none${formatNonEmptyClassName(normal_className)}`}
        {...normal_props}
      />
      <span
        className={`d-none d-print-inline${formatNonEmptyClassName(print_className)}`}
        {...print_props}
      />
    </>
  );
}
