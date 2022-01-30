import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from "./Item.module.css";

const Item: React.FC<{
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
}> = React.forwardRef((props, ref) => {
  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#a47ccc" offset="30%" />
      <stop stop-color="rgba(143, 64, 221, 0.925)" offset="50%" />
      <stop stop-color="#5b10a8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#5b10a8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

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
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      ref={ref}
    >
      {props.option}
    </p>
  );
});

export default Item;
