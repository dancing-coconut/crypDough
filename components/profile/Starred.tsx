import BlogTitle from "./BlogTitle";
import MyStarredInfo from "./MapStarred";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import styles from "./MyBlogInfo.module.css";
interface MyBlogInfo{
    id: number;
    title: string;
    date: string;
}

//uses the same styles as of MyBlogs.jsx
function addStarredBox(mybloginfo:MyBlogInfo) {
  return (
    <BlogTitle
      key={mybloginfo.id}
      titleName={mybloginfo.title}
      date={mybloginfo.date}
    />
  );
}

const iconStyles = {
  descIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
};

function Starred() {
  return (
    <div className={styles.myblogs__div}>
      <BookmarksIcon style={iconStyles.descIcon} />
      <span className={styles.myblogs__text}>Starred</span>
      {MyStarredInfo.map(addStarredBox)}
    </div>
  );
}

export default Starred;