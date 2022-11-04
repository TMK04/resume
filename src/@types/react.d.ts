import type { PropsWithChildren } from "react";

declare global {
  type ChildrenProp = PropsWithChildren["children"];
}
