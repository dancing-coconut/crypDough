import React from "react";
import Link from "next/link";
import BookIcon from "@mui/icons-material/Book"; //for blogs
import AnalyticsIcon from "@mui/icons-material/Analytics"; //real time analysis
import CompareIcon from "@mui/icons-material/Compare"; //compare cyptocurr
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; //track your progress
import ImportContactsIcon from "@mui/icons-material/ImportContacts"; //learn crypto
import { useSpring, animated } from "react-spring";
import styles from "./ExploreBox.module.css";

const iconStyles = {
  otherIcons: {
    fontSize: "50px",
    color: "#FFFFFF",
    position: "absolute",
    top: "8%",
    left: "4%",
  },
};
const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];

const perspective = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function icon(iconName) {
  if (iconName === "Blog") return <BookIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Compare")
    return <CompareIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Progress")
    return <TrendingUpIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Analysis")
    return <AnalyticsIcon style={iconStyles.otherIcons} />;
  else if (iconName === "Learn")
    return <ImportContactsIcon style={iconStyles.otherIcons} />;
}

function ExploreBoxes(props) {
  const [props2, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 200, friction: 80 },
  }));

  let path = "";
  if (props.feature === "Blogs") {
    path = `/blog`;
  } else if (props.feature === "Learn Cryptocurrency from A-Z") {
    path = `/InfoPage`;
  } else if (props.feature === "Track Your Progress") {
    path = `/ProfilePage`;
  }

  return (
    <animated.div
      style={{
        transform: props2.xys.to(perspective),
        backgroundColor: props.color,
      }}
      className={styles["exploreBox__div"]}
      onMouseMove={({ clientX: x, clientY: y }) =>
        set.start({ xys: calcXY(x, y) })
      }
      onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
    >
      <Link href="/blog">
        <div style={{ cursor: "pointer" }}>
          {icon(props.logo)}
          <p className={styles["exploreBoxTitle"]}>{props.feature}</p>
          <p className={styles["exploreBoxText"]}>{props.desc}</p>
        </div>
      </Link>
    </animated.div>
  );
}

export default ExploreBoxes;
