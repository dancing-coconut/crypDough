import { useEffect, useState } from "react";
import Comment from "./Comment";
interface CommentsProps {
//   commentData: {
//     author: string;
//     date: string;
//     content: string;
//   };
  parent:string;
  blogid:string;
}

function Comments(props: CommentsProps) {
  // const [comments, setComments] = useState<
  //   {
  //     author: string;
  //     date: string;
  //     content: string;
  //   }[]
  // >([
  //   {
  //     author: "ABC",
  //     date: "DD-MM-YYYY",
  //     content:
  //       "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual",
  //   },
  // ]);
  //What happens to all this? 
  // useEffect(() => {
  //   setComments((prevComments) => {
  //     return [...prevComments, props.commentData];
  //   });
  // }, [props.commentData]);

  const [allComments, setallComments] = useState<
    {
      Comment_ID: string;
      Comment_Content: string;
      Comment_Author: string;
      Comment_Date: string;
    }[]
  >([]);
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/comments/${props.parent}`)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setallComments(data.data.data);
      console.log(data.data.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[  ]);

  return (
    <>
      {allComments.length !== 0
        ? allComments.map((data) => {
            return (
              //Should I be switching the old stuff out?
              <Comment
                author={data.Comment_Author}
                date={data.Comment_Date}
                content={data.Comment_Content}
                commentid={data.Comment_ID}
                blogid={props.blogid}
                key={data.Comment_ID}
              />
            );
          })
        : null}
    </>
  );
}

export default Comments;
