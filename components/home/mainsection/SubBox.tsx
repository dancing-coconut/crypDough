import Link from "next/link";
import styles from "./SubBox.module.css"
interface Props {
  pathtitle: string;
  title: string;
  bgUrl: string;
  alt: string;
}
const SubBox = (props: Props) => {
  const classname = "subsection__";
  const classname3 = "subsectionImg__";
  const classname1 = "title__sub";
  const classname2 = `title__sub ${classname1.concat(props.title)}`;

  const path = "/" + props.pathtitle;
  return (
    <Link href={path}>
      <div className={styles[classname.concat(props.title)]}>
        <img
          className={styles[classname3.concat(props.title)]}
          src={props.bgUrl}
          alt={props.alt}
        />
        <span className={styles[classname2]}>{props.title}</span>
      </div>
    </Link>
  );
};

export default SubBox;
