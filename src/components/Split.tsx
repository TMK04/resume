import "./Split.css";

type SplitItemProps<K extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[K],
  "className"
>;
export default function Split({
  aside_props,
  article_props,
  ...props
}: Omit<JSX.IntrinsicElements["div"], "children" | "className"> & {
  aside_props: SplitItemProps<"aside">;
  article_props: SplitItemProps<"article">;
}) {
  return (
    <div className="d-flex flex-column flex-md-row gap-4 gap-md-5 split" {...props}>
      <aside className="d-flex flex-column gap-1 split-aside" {...aside_props} />
      <article className="d-flex flex-column gap-3 split-article" {...article_props} />
    </div>
  );
}
