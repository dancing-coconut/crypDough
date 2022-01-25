import Link from "next/link";
import { useState } from "react";
import styles from "./Item.module.css";

const Item: React.FC<{
  scroll: string;
  scrollExplore: () => void;
  scrollBlogs: () => void;
  scrollStarred: () => void;
  scrollProgress: () => void;
  color: string;
  hovercolor: string;
  bgcolor: string;
  hoverbgcolor: string;
  option: string;
}> = (props) => {
  const OnClickHandler = () => {
    if (props.scroll === "ExploreSection") {
      props.scrollExplore();
    } else if (props.scroll === "BlogsSection") {
      props.scrollBlogs();
    } else if (props.scroll === "StarredSection") {
      props.scrollStarred();
    } else if (props.scroll === "ProgressSection") {
      props.scrollProgress();
    }
  };

  const [isHover, setIsHover] = useState(false);
  function changeHoverState() {
    setIsHover(true);
  }
  function changeHoverStateBack(e) {
    setIsHover(false);
  }
  const textColor = props.color;
  const hoverTextColor = props.hovercolor;
  const backgroundColor1 = props.bgcolor;
  const hoverbackgroundColor = props.hoverbgcolor;

  return (
    <Link href="/">
      <p
        style={{
          color: isHover ? hoverTextColor : textColor,
          background: isHover ? hoverbackgroundColor : backgroundColor1,
          height: "72px",
        }}
        onMouseOver={changeHoverState}
        onMouseOut={changeHoverStateBack}
        onClick={OnClickHandler}
        className={styles["title__menu"]}
      >
        {props.option}
      </p>
    </Link>
  );
};

export default Item;
