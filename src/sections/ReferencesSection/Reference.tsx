import BulletList from "../../components/BulletList";
import Link from "../../components/Link";

type ReferenceProps = {
  name: string;
  title: string;
  email?: string;
  tel?: string;
  relationship: string;
};

export default function Reference({ name, title, email, tel, relationship }: ReferenceProps) {
  return (
    <div className="mb-1">
      <div className="raleway">
        <span className="fw-bold">{name}</span>
        <br />
        {title}
        <br />
        <BulletList
          items={[
            <Link className="fw-bold" href={`mailto:${email}`}>
              {email}
            </Link>,
            <Link className="fw-bold" href={`tel:${tel}`}>
              {tel}
            </Link>
          ]}
          separator="|"
        />
      </div>
      <div>{relationship}</div>
    </div>
  );
}
