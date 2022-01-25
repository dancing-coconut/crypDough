import Logo from "./home/Logo";
import Item from "./home/Item";
import Link from "next/link";

interface Props {
  bgcolor: string;
  itemcolor: string;
  hovercolor: string;
  scrollBlogs: () => null;
  scroll: string;
  hoverbgcolor: string;
}

function Profilenavbar(props: Props) {
  return (
    <div style={{ background: props.bgcolor }} className="menu__items--div">
      <Logo color={props.itemcolor} />
      <div className="menu__items--container">
        <Link href="">
          <Item
            color={props.itemcolor}
            option="About"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
        <Link href="">
          <Item
            scrollBlogs={props.scrollBlogs}
            scroll={props.scroll}
            color={props.itemcolor}
            option="Blogs"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
        <Link href="">
          <Item
            color={props.itemcolor}
            option="Starred"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
        <Link href="">
          <Item
            color={props.itemcolor}
            option="Progress"
            hovercolor={props.hovercolor}
            hoverbgcolor={props.hoverbgcolor}
          />
        </Link>
      </div>
    </div>
  );
}

function Normalnavbar(props) {
  return (
    <div style={{ background: props.bgcolor, height: "72px" }}>
      <Logo color={props.itemcolor} />
      <ul className="MenuOptions">
        <Link href="/ProfilePage">
          <li className="item1">
            <Item
              color={props.itemcolor}
              option="Profile"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <Link href="">
          <li className="item2">
            <Item
              color={props.itemcolor}
              option="Contact"
              bgcolor={props.bgcolor}
              hovercolor={props.hovercolor}
              hoverbgcolor={props.hoverbgcolor}
            />
          </li>
        </Link>
        <Link href="">
          <li className="item3">
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
      </ul>
    </div>
  );
}

function NavigationBar(props) {
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
