import styles from "./WriteComment.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useRef, useState, useEffect } from "react";

//Do we still need to go from Child to Parent?
interface Props {
  parent: string;
  blogid: string;
  addComment: ({}) => null;
}
function WriteComment(props: Props) {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  //Should this still be there?
  // const commentSubmitHandler = () => {
  //   props.addComment({
  //     author: "aafsaf",
  //     date: "DD-MM-YYYY",
  //     content: contentRef.current?.value
  //   })
  // };

  async function SubmitHandler() {
    //How do you get the count? With something/comments/something/${props.parent}?
    const resp1 = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/comments/count/${props.parent}`
    );
    const data1 = await resp1.json();

    const comm = {
      commno: data1.data.count + 1,
      parent: props.parent,
      content: contentRef.current?.value,
      author: "palanikannan.m2020@vitstudent.ac.in",
      blogid: props.blogid,
    };
    const resp2 = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/v1/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comm),
      }
    );
    if (resp2.status === 404) {
      console.log("Error");
    }
    props.addComment({
      author: "aafsaf",
      date: "DD-MM-YYYY",
      content: contentRef.current?.value,
    });
  }
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
              onClick={SubmitHandler}
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
