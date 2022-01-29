import { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import BlogSection from "./BlogViewSection";
import styles from "./BlogViewWrap.module.css";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Link from 'next/link'

function BlogViewWrap() {
  const [totalBlogs, setTotalBlogs] = useState<
    {
      _id: string;
      name: string;
      email: string;
      role: string;
      active: boolean;
      photo: string;
    }[]
  >([
    { _id: "", name: "", email: "", role: "", active: false, photo: "" },
    { _id: "", name: "", email: "", role: "", active: false, photo: "" },
  ]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/blogs`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.data);
        setTotalBlogs(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile1" />
      <div className={styles.Search__area}>
        <div className={styles.Search__box}></div>
        <Link href="/writeblog">
          <Fab color="secondary" className={styles.Plus__button}>
            <AddIcon/>
          </Fab>
        </Link>
      </div>
      <div style={{ display: "flex" }} className={styles.Blog_Row}>
        {totalBlogs.map((data) => {
          return (
            <BlogSection
              date={data.Blog_Date}
              author={data.Author_Email}
              blogname={data.Blog_Title}
              blogimg={data.Blog_Photo}
              blogdesc={data.Blog_Content}
              key={Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogViewWrap;
