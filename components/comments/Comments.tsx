import { useEffect, useState } from "react";
import Comment from "./Comment";
import styles from "./Comments.module.css";
interface CommentsProps {
  commentData: {
    author: string;
    date: string;
    content: string;
  };
  parent: string;
  blogid: string;
  addComment: ({}) => null;
}

function Comments(props: CommentsProps) {
  const [comments, setComments] = useState<
    {
      author: string;
      date: string;
      content: string;
    }[]
  >([]);
  //What happens to all this?
  useEffect(() => {
    setComments((prevComments) => {
      return [...prevComments, props.commentData];
    });
  }, [props.commentData]);

  const [allComments, setallComments] = useState<
    {
      Comment_ID: string;
      Comment_Content: string;
      Comment_Author: string;
      Comment_Date: string;
    }[]
  >([]);

  useEffect(() => {
    if (props.parent) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/comments/${props.parent}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setallComments(data.data.data);
          console.log(data.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props.parent]);

  return (
    <div className={styles["recursive__comments__div"]}>
      {comments.length !== 0
        ? comments.map((data) => {
            if (data.author && data.content && data.date) {
              return (
                <Comment
                  author={data.author}
                  date={data.date}
                  content={data.content}
                  blogid={props.blogid}
                  key={data.author + data.date}
                />
              );
            }
          })
        : null}
      {allComments.length !== 0
        ? allComments.map((data) => {
            return (
              <Comment
                author={data.Comment_Author}
                date={data.Comment_Date}
                content={data.Comment_Content}
                commentid={data.Comment_ID}
                blogid={props.blogid}
                key={data.Comment_ID}
                addComment={props.addComment}
              />
            );
          })
        : null}
    </div>
  );
}

export default Comments;
