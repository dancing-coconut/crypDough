import StarredBlogTitle from "./StarredBlogTitle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import styles from "./MyBlogInfo.module.css";
import { useEffect, useState } from "react";
interface MyBlogInfo{
    id: number;
    title: string;
    author: string;
}

//uses the same styles as of MyBlogs.jsx
function addStarredBox(mybloginfo) {
  return (
    <StarredBlogTitle
      key={mybloginfo.Blog_ID}
      titleName={mybloginfo.Blog_Title}
      author={mybloginfo.Author_Email}
    />
  );
}

const iconStyles = {
  descIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
};
interface Starred {
  email: string;
}

function Starred(props: Starred) {
  const [blogs, setBlogs] = useState<
    {
      Blog_ID: string;
      Blog_Title: string;
      Author_Email: string;
    }[]
  >([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/blogs/bookmark/${props.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data.data.data);
      });
  }, [props.email]);
  return (
    <div className={styles.myblogs__div}>
      <BookmarksIcon style={iconStyles.descIcon} />
      <span className={styles.myblogs__text}>Starred</span>
      {blogs.length !== 0 ? blogs.map(addStarredBox) : null}
    </div>
  );
}

export default Starred;