import { formatNonEmptyClassName } from "../helpers";

export default function Detail({ className, ...props }: JSX.IntrinsicElements["span"]) {
  return (
    <span
      className={`fw-bold raleway text-secondary${formatNonEmptyClassName(className)}`}
      {...props}
    />
  );
}
