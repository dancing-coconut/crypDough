import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './Blog.module.css';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavigationBar from "../NavigationBar";

interface Blog {
  blogid: string;
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

  useEffect(() => {
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
  }, []);

  return(
    <div className={styles.Full__blog}>
        <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile1" />
        <div className={styles.Cover__box}>
            <div className={styles.Blog__container}>
                <div className={styles.Author_section}>
                    <AccountCircleIcon className={styles.Account__icon} />
                    <div className={styles.Author__details}>
                        <h5 className={styles.Author__name}>{blogData.Author_Email}</h5>
                        <h6 className={styles.Blog__date}>DD-MM-YYYY</h6>
                    </div>
                </div>
                <div className={styles.Blog__section}>
                    <h1 className={styles.Blog__title}>{blogData.Blog_Title}</h1>
                    <img className={styles.Blog__picture} src="" alt="Blog Picture" />
                    <div className={styles.Blog__content}>{blogData.Blog_Content}</div>
                </div>
            </div>
            <div className={styles.About__section}>
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Author's Picture" className={styles.Author__photo} />
            </div>
        </div>
        <div className={styles.Comment__section}>
            <h1 className={styles.Comment__title}>Discussion</h1>
            <div className={styles.Comment__box}>
                <AccountCircleIcon className={styles["Account__icon--Comment"]} />
                <div className={styles.Comment__write}>
                    <textarea placeholder="Add to the discussion" cols="90" rows="7" className={styles.Write__comment}></textarea>
                    <div className={styles.Comment__options}>
                        <button className={styles.Comment__submit}>Submit</button>
                        <button className={styles.Comment__preview}>Preview</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};


export default Blog;
