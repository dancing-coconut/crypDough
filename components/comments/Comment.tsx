import styles from "./Comment.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {useState} from 'react';
import WriteComment from "./WriteComment";
import Comments from "./Comments";
interface Props {
  date: string;
  author: string;
  content: string;
  commentid: string;
  blogid: string;
}
function Comment(props: Props) {
  const [disp, setdisp] = useState(false);
  const [show, setshow] = useState(false);
  //Bishop code again?
  // const [commentData, setCommentData] = useState<{
  //   author: string;
  //   date: string;
  //   content: string;
  //   commentid: string;
  //   blogid: string;
  // }>({
  //   author: "ABC",
  //   date: "DD-MM-YYYY",
  //   content:
  //     "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual",
  //   commentid:"",
  //   blogid:"",
  // });

  // const addComment = (comment: {
  //   author: string;
  //   date: string;
  //   content: string;
  //   commentid: string;
  //   blogid: string;
  // }) => {
  //   setCommentData(comment);
  // };
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
        <button type="button" className={styles.Reply__button} onClick={()=>{setshow(!show)}}>
          <KeyboardArrowDownIcon className={styles.Dropdown} />
        </button>
        <button type="button" className={styles.Reply__button} onClick={()=>{setdisp(!disp)}}>
          <CommentIcon className={styles.Reply__icon} />
        </button>
        {disp?<WriteComment parent={props.commentid} blogid={props.blogid}/>:null}
        {show?<Comments parent={props.commentid} blogid={props.blogid}/>:null}
      </div>
    </div>
  );
}
export default Comment;

/*Logic for one Comment:
This little cookie gets its id from the Comments component that's mapping through it and its sibling comments
On clicking the reply button, a WriteComment component is called whose parentid is this comment's id and whose blogid
is this comment's blogid prop which its getting from the Comments component that its being mapped in. Now when the down
arrow is clicked, another Comments component is called, with all the comments that is a child to our current comment. This
Comments component, takes the parentid of all the comments it will map through as the commentid of our current comment, and the blogid
also it'll get de mon petit biscuit.*/