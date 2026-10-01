interface Props {
  kicker: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ kicker, title, description }: Props) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
