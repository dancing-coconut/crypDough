import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CommentIcon from "@mui/icons-material/Comment";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogViewSection.module.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useSession } from "next-auth/react";
interface Props {
  author: string;
  date: string;
  blogimg: string;
  blogname: string;
  blogdesc: string;
  blogid: string;
}
function BlogViewSection(props: Props) {
  const { data: session, status } = useSession();
  console.log(session?.user?.email);
  const bookmarkHandler = (event: React.FormEvent) =>{
    event.preventDefault();
    const post={
      blogid: props.blogid,
      user: session?.user?.email,
      author: props.author,
      title: props.blogname,
    };
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/blogs/bookmark`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
    .then((response) => {
      if (response.status === 404) {
        console.log("error!!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  }
  let date = new Date(
    Date.parse(props.date.substring(0, 10).replace(/[-]/g, "/"))
  );

  // function TrimName(name: string) {
  //   if (name.length > 300) {
  //     let name1 = name.slice(0, 300);
  //     while (name1.charAt(name1.length - 1) !== " " && name1.length !== 0) {
  //       name1 = name1.slice(0, -1);
  //     }
  //     return name1 + "...Read More";
  //   } else {
  //     return name + "...Read More";
  //   }
  // }

  return (
    <div className={styles["Blog__box"]}>
      <div className={styles["Author__section"]}>
        <AccountCircleIcon className={styles["Account__icon"]} />
        <div className={styles["Author__details"]}>
          <h5 className={styles["Author__name"]}>{props.author}</h5>
          <h6
            className={styles["Blog__date"]}
          >{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</h6>
        </div>
      </div>
      <Link href={`/blog/${props.blogid}`}>
        <img
          className={styles["Blog__img"]}
          src={props.blogimg}
          alt="Blog's Pictures"
        />
      </Link>

      <Link href={`/blog/${props.blogid}`}>
        <h3 className={styles["Blog__title"]}>{props.blogname}</h3>
      </Link>
      <p className={styles["Blog__desc"]}>
        {props.blogdesc}{" "}
        <Link href={`/blog/${props.blogid}`}>
          <span className={styles["Blog-desc__readmore"]}>...Read More</span>
        </Link>
      </p>
      <div className={styles["Blogopt__section"]}>
        <button onClick={bookmarkHandler}>
          <BookmarksIcon className={styles["Bookmark__icon"]} />
        </button>
        <CommentIcon className={styles["Comment__icon"]} />
        <ThumbUpIcon className={styles["Like__icon"]} />
        <ThumbDownAltIcon className={styles["Dislike__icon"]} />
      </div>
    </div>
  );
}
export default BlogViewSection;
