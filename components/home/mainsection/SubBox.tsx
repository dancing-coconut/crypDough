import Link from "next/link";

interface Props{
  pathtitle: string;
  title: string;
  bgUrl: string;
  alt: string;
}
const SubBox = (props:Props) => {
  const classname = "styles.subsection__";
  const classname3 = "styles.subsectionImg__";
  const classname1 = "styles.title__sub";
  const classname2 = `styles.title__sub ${classname1.concat(props.title)}`;
  const path = "/" + props.pathtitle;
  return (
    <Link href={path}>
      <div className={classname.concat(props.title)}>
        <img
          className={classname3.concat(props.title)}
          src={props.bgUrl}
          alt={props.alt}
        />
        <span className={classname2}>{props.title}</span>
      </div>
    </Link>
  );
};

export default SubBox;
