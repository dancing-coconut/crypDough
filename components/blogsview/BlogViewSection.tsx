import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CommentIcon from "@mui/icons-material/Comment";
import styles from "./BlogViewSection.module.css"
interface Props{
	author:string;
	date:string;
	blogimg:string;
	blogname:string;
	blogdesc:string;
}
function BlogSection(props:Props) {
  return (
    <div className={styles.Blog__box}>
      <div className={styles.Author__section}>
        <AccountCircleIcon className={styles.Account__icon} />
        <div className={styles.Author__details}>
          <h5 className={styles.Author__name}>{props.author}</h5>
          <h6 className={styles.Blog__date}>{props.date}</h6>
        </div>
      </div>
      <img className={styles.Blog__img} src={props.blogimg} alt="Blog's Pictures" />
      <h3 className={styles.Blog__title}>{props.blogname}</h3>
      <p className={styles.Blog__desc}>{props.blogdesc}</p>
      <div className={styles.Blogopt__section}>
        <BookmarksIcon className={styles.Bookmark__icon} />
        <CommentIcon className={styles.Comment__icon} />
      </div>
    </div>
  );
}
export default BlogSection;