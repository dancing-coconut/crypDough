import styles from "./MyBlogInfo.module.css";
interface Props {
  titleName: string;
  date: string;
  status: string;
}
function BlogTitle(props: Props) {
  let date = new Date(
    Date.parse(props.date.substring(0, 10).replace(/[-]/g, "/"))
  );
  console.log(date);
  return (
    <div className={styles["blogsTitle__div"]}>
      <span className={styles["blogsTitle__titleName"]}>{props.titleName}</span>
      <span>{props.status}</span>
      <span
        className={styles["blogsTitle__date"]}
      >{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span>
    </div>
  );
}

export default BlogTitle;
