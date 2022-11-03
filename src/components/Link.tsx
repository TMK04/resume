import { formatNonEmptyClassName, formatNonEmptyStr } from "../helpers";

import Detail from "./Detail";

type LinkProps = Omit<JSX.IntrinsicElements["a"], "children" | "href"> & {
  children: string;
  href_prefix?: string;
};

export default function Link({ children, className, href_prefix, ...props }: LinkProps) {
  return (
    <Detail>
      <a
        className={`text-decoration-none text-secondary${formatNonEmptyClassName(className)}`}
        href={`${formatNonEmptyStr(children, (str) => `${str}:`)}${children}`}
        {...props}
      >
        {children}
      </a>
    </Detail>
  );
}
