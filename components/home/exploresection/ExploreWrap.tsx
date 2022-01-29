import React, { useRef, useEffect } from "react";
import ExploreBox from "./ExploreBox";
import ExploreBoxContents from "./ExploreBoxContent.js";
import styles from "./ExploreWrap.module.css";

function addExploreBox(boxContent) {
  return (
    <ExploreBox
      key={boxContent.id}
      titleName={boxContent.title}
      logo={boxContent.logo}
      color={boxContent.color}
      feature={boxContent.feature}
      desc={boxContent.desc}
    />
  );
}

function ExploreSection(props) {
  const myref = useRef<HTMLDivElement>(null);

  if (props.toScroll) {
    myref.current?.scrollIntoView({ behavior: "smooth" });
    console.log("sds", props.toScroll);
  }

  return (
    <div ref={myref} className={styles["exploreSection__div"]}>
      {ExploreBoxContents.map(addExploreBox)}
    </div>
  );
}

export default ExploreSection;
