import { formatNonEmptyClassName } from "../../helpers";
import { SeparatorInline } from "../Separators";

import BulletListItem from "./Item";

type BulletListProps = Omit<JSX.IntrinsicElements["ul"], "children"> & {
  items: JSX.Element[];
};

export default function BulletList({ className, items, ...props }: BulletListProps) {
  const Items = [<BulletListItem key={0}>{items[0]}</BulletListItem>];
  let l = items.length;
  for (let i = 1; i !== l; i++) {
    const key = i * 2;
    Items.push(<SeparatorInline key={key - 1}>•</SeparatorInline>);
    Items.push(<BulletListItem key={key}>{items[i]}</BulletListItem>);
  }

  return (
    <ul
      className={`bullet-list d-flex flex-wrap mb-0 p-0${formatNonEmptyClassName(className)}`}
      {...props}
    >
      {Items}
    </ul>
  );
}
