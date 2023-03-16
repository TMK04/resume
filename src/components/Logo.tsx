import "./Logo.css";

export default function Logo({ alt, ...props }: Omit<JSX.IntrinsicElements["img"], "className">) {
  return <img alt={alt} className="logo" {...props} />;
}
