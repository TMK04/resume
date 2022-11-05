import { formatNonEmptyClassName } from "../helpers";

export function NonPrint({ className, ...props }: JSX.IntrinsicElements["span"]) {
  return <span className={`d-print-none${formatNonEmptyClassName(className)}`} {...props} />;
}

export function PrintSwitch({
  normal: { ...normal_props },
  print: { className: print_className, ...print_props }
}: Record<"normal" | "print", JSX.IntrinsicElements["span"]>) {
  return (
    <>
      <NonPrint {...normal_props} />
      <span
        className={`d-none d-print-inline${formatNonEmptyClassName(print_className)}`}
        {...print_props}
      />
    </>
  );
}
