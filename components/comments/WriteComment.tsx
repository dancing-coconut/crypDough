import styles from "./WriteComment.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRef } from "react";

function WriteComment(props:WriteComment) {
  const contentRef = useRef<HTMLTextAreaElement>()
  const commentSubmitHandler = () => {
    props.addComment({
      author: "aafsaf",
      date: "DD-MM-YYYY",
      content: contentRef.current?.value
    })
  };

  return (
    <div className={styles.Comment__box}>
      <div className={styles.Comment__write}>
        <AccountCircleIcon className={styles["Account__icon"]} />
        <div className={styles.Comm__container}>
          <textarea
            placeholder="Add to the discussion"
            cols={90}
            rows={7}
            className={styles.Write__comment}
            ref={contentRef}
          ></textarea>
          <div className={styles.Comment__options}>
            <button
              type="submit"
              className={styles.Comment__submit}
              onClick={commentSubmitHandler}
            >
              Submit
            </button>
            <button type="button" className={styles.Comment__preview}>
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className={styles.Comment__write}>
    //   <AccountCircleIcon className={styles.Account__icon} />
    //   <div className={styles.Comm__container}>
    //     <textarea
    //       placeholder="Reply"
    //       cols={50}
    //       rows={5}
    //       className={styles.Write__comment}
    //     ></textarea>
    //     <div className={styles.Comment__options}>
    //       <button type="submit" className={styles.Comment__submit}>Submit</button>
    //       <button type="button" className={styles.Comment__preview}>Preview</button>
    //     </div>
    //   </div>
    // </div>
  );
}
export default WriteComment;
