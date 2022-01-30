import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "./Item.module.css";

interface ItemProps {
  scroll: string;
  scrollExplore: () => void;
  scrollBlogs: () => null;
  scrollStarred: () => null;
  scrollProgress: () => null;
  color: string;
  hovercolor: string;
  bgcolor: string;
  hoverbgcolor: string;
  option: string;
}

const Item = React.forwardRef<HTMLParagraphElement, ItemProps>((props, ref) => {
  const OnClickHandler = () => {
    console.log(props.scrollBlogs);
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
    <p
      style={{
        color: isHover ? hoverTextColor : textColor,
        background: isHover ? hoverbackgroundColor : backgroundColor1,
      }}
      onMouseOver={changeHoverState}
      onMouseOut={changeHoverStateBack}
      onClick={OnClickHandler}
      className={styles["title__menu"]}
      ref={ref}
    >
      {props.option}
    </p>
  );
});

Item.displayName = "MyComponent";

export default Item;
