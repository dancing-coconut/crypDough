import Logo from "./home/Logo";
import Item from "./home/Item";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
interface Props {
  bgcolor: string;
  itemcolor: string;
  hovercolor: string;
  scrollBlogs: () => null;
  scroll: string;
  hoverbgcolor: string;
  scrollExplore: () => void;
}

function Profilenavbar(props: Props) {
  return (
    <div
      style={{ background: props.bgcolor }}
      className={styles["menu__items--div"]}
    >
      <Logo color={props.itemcolor} />
      <div className={styles["menu__items--container"]}>
        <ul className={styles["MenuOptions-profile"]}>
          <Link href="" passHref>
            <li className={styles[""]} style={{ cursor: "pointer" }}>
              <Item
                color={props.itemcolor}
                option="About"
                hovercolor={props.hovercolor}
                hoverbgcolor={props.hoverbgcolor}
              />
            </li>
          </Link>
          <Link href="" passHref>
            <li className={styles[""]} style={{ cursor: "pointer" }}>
              <Item
                scrollBlogs={props.scrollBlogs}
                scroll={props.scroll}
                color={props.itemcolor}
                option="Blogs"
                hovercolor={props.hovercolor}
                hoverbgcolor={props.hoverbgcolor}
              />
            </li>
          </Link>
          <Link href="" passHref>
            <li className={styles[""]} style={{ cursor: "pointer" }}>
              <Item
                color={props.itemcolor}
                option="Starred"
                hovercolor={props.hovercolor}
                hoverbgcolor={props.hoverbgcolor}
              />
            </li>
          </Link>
          <Link href="" passHref>
            <li className={styles[""]} style={{ cursor: "pointer" }}>
              <Item
                color={props.itemcolor}
                option="Progress"
                hovercolor={props.hovercolor}
                hoverbgcolor={props.hoverbgcolor}
              />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

function Normalnavbar(props: Props) {
  return (
    <div
      className={styles["main__navbar"]}
      style={{ background: props.bgcolor, height: "72px" }}
    >
      <Logo color={props.itemcolor} />
      <ul className={styles["MenuOptions"]}>
        <Link href="/explore" passHref>
          <li className={styles["item3"]} style={{ cursor: "pointer" }}>
            <Item
              scrollExplore={props.scrollExplore}
              scroll={props.scroll}
              color={props.itemcolor}
              option="Explore"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <Link href="/contact" passHref>
          <li className={styles["item2"]} style={{ cursor: "pointer" }}>
            <Item
              color={props.itemcolor}
              option="Contact"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <Link href="/profile" passHref>
          <li className={styles["item1"]} style={{ cursor: "pointer" }}>
            <Item
              color={props.itemcolor}
              option="Profile"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
}

function NavigationBar(props: Props) {
  if (props.navtype === "profile") {
    return (
      <Profilenavbar
        scrollBlogs={props.scrollBlogs}
        scroll={props.scroll}
        itemcolor={props.itemcolor}
        bgcolor={props.bgcolor}
        hovercolor={props.hovercolor}
        hoverbgcolor={props.hoverbgcolor}
      />
    );
  } else {
    return (
      <Normalnavbar
        scrollExplore={props.scrollExplore}
        scroll={props.scroll}
        itemcolor={props.itemcolor}
        bgcolor={props.bgcolor}
        hovercolor={props.hovercolor}
        hoverbgcolor={props.hoverbgcolor}
      />
    );
  }
}

export default NavigationBar;
