import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavigationBar from "../NavigationBar";
import Comments from "../comments/Comments";
import WriteComment from "../comments/WriteComment";
interface Blog {
  blogid: string | string[] | undefined;
}

const Blog = (props: Blog) => {
  const [blogData, setblogData] = useState<{
    Blog_ID: string;
    Blog_Title: string;
    Blog_Photo: string;
    Author_Email: string;
    Blog_Content: string;
  }>({
    Blog_ID: "",
    Blog_Title: "",
    Blog_Photo: "",
    Author_Email: "",
    Blog_Content: "",
  });

  //Bishop code maybe?????
  const [commentData, setCommentData] = useState<{
    author: string | null;
    date: string | null;
    content: string | null;
  }>({
    author: null,
    date: null,
    content: null,
  });

  const addComment = (comment: {
    author: string;
    date: string;
    content: string;
  }) => {
    setCommentData(comment);
  };
  useEffect(() => {
    if (props.blogid) {
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/api/v1/blogs/blog/${props.blogid}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.data);
          setblogData(data.data);
        });
    }
  }, [props.blogid]);

  return (
    <div className={styles.Full__blog}>
      <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile1" />
      <div className={styles.Cover__box}>
        <div className={styles.Blog__container}>
          <div className={styles.Author_section}>
            <AccountCircleIcon className={styles.Account__icon} />
            <div className={styles.Author__details}>
              <h6 className={styles.Blog__date}>DD-MM-YYYY</h6>
            </div>
          </div>
          <div className={styles.Blog__section}>
            <h1 className={styles.Blog__title}>{blogData.Blog_Title}</h1>
            <img
              className={styles.Blog__picture}
              src={blogData.Blog_Photo}
              alt="Blog Picture"
            />
            <div className={styles.Blog__content}>{blogData.Blog_Content}</div>
          </div>
        </div>
        <div className={styles.About__section}>
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Author's Picture"
            className={styles.Author__photo}
          />
        </div>
      </div>
      <h1 className={styles.Comment__title}>Discussion</h1>
      <div className={styles.Comment__section}>
        {/* Is addComment still needed */}
        {/* How do you fix this type equation error */}
        <WriteComment
          parent={blogData.Blog_ID}
          blogid={blogData.Blog_ID}
          addComment={addComment}
        />
      </div>
      <div className={styles.Comment__Div}>
        {/*Do we still need commentData={commentData}*/}
        <Comments
          parent={blogData.Blog_ID}
          blogid={blogData.Blog_ID}
          commentData={commentData}
          addComment={addComment}

        />
      </div>
    </div>
  );
};

export default Blog;

/* Logic for blogs to comments:
Our blog boi/gal/prefer-not-to-say here gives its id to WriteComment as the blogid of that comment
and as the parent id of that comment, as any comment made with this WriteComment is directly for blog
The Comments holds all the comments with parent id as the blogid, and with blogid and this blog's id*/
