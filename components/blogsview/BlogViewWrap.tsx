import { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import BlogViewSection from "./BlogViewSection";
import styles from "./BlogViewWrap.module.css";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Link from "next/link";

import useSWR from "swr";

function BlogViewWrap() {
  // const { data, error } = useSWR('http://localhost:8000/api/v1/blogs')
  // console.log(data,"from SWR");
  const [totalBlogs, setTotalBlogs] = useState<
    {
      Blog_ID: string;
      Blog_Content: string;
      Author_Email: string;
      Blog_Title: string;
      Blog_Photo: string;
      Blog_Date: string;
    }[]
  >([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/blogs`)
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
        <Link href="/writeblog" passHref>
          <Fab color="secondary" className={styles.Plus__button}>
            <AddIcon />
          </Fab>
        </Link>
      </div>
      <div className={styles.Blog_Row}>
        {totalBlogs
          ? totalBlogs.map((data) => {
              return (
                <BlogViewSection
                  date={data.Blog_Date}
                  author={data.Author_Email}
                  blogname={data.Blog_Title}
                  blogimg={data.Blog_Photo}
                  blogdesc={data.Blog_Content}
                  key={data.Blog_ID}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default BlogViewWrap;
