import "./Split.css";

export default function Split({
  aside_children,
  article_children,
  ...props
}: Omit<JSX.IntrinsicElements["div"], "children" | "className"> & {
  aside_children: JSX.Element;
  article_children: JSX.Element;
}) {
  return (
    <div className="d-flex flex-column flex-md-row gap-4 gap-md-5 split" {...props}>
      <aside className="d-flex flex-column gap-1 split-aside">{aside_children}</aside>
      <article className="d-flex flex-column gap-3 split-article">{article_children}</article>
    </div>
  );
}
