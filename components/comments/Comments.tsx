import { useEffect, useState } from "react";
import Comment from "./Comment";
interface CommentsProps {
  commentData: {
    author: string;
    date: string;
    content: string;
  };
}

function Comments(props: CommentsProps) {
  const [comments, setComments] = useState([
    {
      author: "ABC",
      date: "DD-MM-YYYY",
      content:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual",
    },
  ]);

  useEffect(() => {
    setComments((prevComments) => {
      return [...prevComments, props.commentData];
    });
  }, [props.commentData]);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment
            author={comment.author}
            date={comment.date}
            content={comment.content}
          />
        );
      })}
    </div>
  );
}

export default Comments;
