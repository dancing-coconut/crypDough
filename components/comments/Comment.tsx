import styles from "./Comment.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface Props {
  date: string;
  author: string;
  content: string;
}
function Comment(props: Props) {
  return (
    <div className={styles.Comment__box}>
      <div className={styles.Author__section}>
        <AccountCircleIcon className={styles.Account__icon} />
        <div className={styles.Author__details}>
          <h5 className={styles.Author__name}>{props.author}</h5>
          <h6 className={styles.Comment__date}>{props.date}</h6>
        </div>
      </div>
      <div className={styles.Comment__content}>{props.content}</div>
      <div className={styles.Vote__section}>
        <ThumbUpIcon className={styles.Up__icon} />
        <ThumbDownIcon className={styles.Down__icon} />
        <KeyboardArrowDownIcon className={styles.Dropdown} />
        <button type="button" className={styles.Reply__button}>
          <CommentIcon className={styles.Reply__icon} />
        </button>
      </div>
    </div>
  );
}
export default Comment;
