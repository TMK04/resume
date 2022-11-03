import { formatNonEmptyClassName } from "../helpers";

export default function Detail({ className, ...props }: JSX.IntrinsicElements["div"]) {
  return <div className={`text-secondary${formatNonEmptyClassName(className)}`} {...props} />;
}
