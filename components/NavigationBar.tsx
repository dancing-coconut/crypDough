import Logo from "./home/Logo";
import Item from "./home/Item";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
import { useSession } from "next-auth/react";
interface Props {
  bgcolor: string;
  itemcolor: string;
  hovercolor: string;
  scrollBlogs: () => null;
  scroll: string;
  hoverbgcolor: string;
  scrollExplore: () => void;
  modalStateHandler: (value: boolean) => void;
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
  const { data: session, status } = useSession();
  let accessToken;
  if (session) {
    accessToken = session.accessToken;
  }
  console.log("props.modalStateHandler", props.modalStateHandler);
  return (
    <div
      className={styles["main__navbar"]}
      style={{ background: props.bgcolor, height: "72px" }}
    >
      <Logo color={props.itemcolor} />
      <ul className={styles["MenuOptions"]}>
        <Link href="#" passHref>
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
        <Link href="/blog" passHref>
          <li className={styles["item2"]} style={{ cursor: "pointer" }}>
            <Item
              color={props.itemcolor}
              option="Blogs"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <div
          onClick={() => {
            if (status !== "authenticated") {
              props.modalStateHandler(true);
            }
          }}
        >
          <Link href={status === "authenticated" ? "/profile" : "/"} passHref>
            <li className={styles["item1"]} style={{ cursor: "pointer" }}>
              <Item
                color={props.itemcolor}
                option={status === "authenticated" ? "Profile" : "Sign In"}
                bgcolor={props.bgcolor}
                hovercolor={props.hovercolor}
                hoverbgcolor={props.hoverbgcolor}
              />
            </li>
          </Link>
        </div>
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
        modalStateHandler={props.modalStateHandler}
      />
    );
  }
}

export default NavigationBar;
