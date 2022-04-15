import styles from "./MyBlogInfo.module.css";
interface Props {
  titleName: string;
  author: string;
}
function StarredBlogTitle(props: Props) {
  return (
    <div className={styles["blogsTitle__div"]}>
      <span className={styles["blogsTitle__titleName"]}>{props.titleName} by {props.author}</span>
    </div>
  );
}

export default StarredBlogTitle;
