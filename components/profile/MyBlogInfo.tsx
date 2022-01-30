import BlogTitle from "./BlogTitle";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
// import myblogsinfo from "./MapMyBlogInfo";
import styles from "./MyBlogInfo.module.css";
import { useEffect, useState } from "react";
interface addMyBlogsBox {
  Blog_ID: number;
  Blog_Title: string;
  Blog_Date: string;
  blog_status: string;
}

function addMyBlogsBox(mybloginfo) {
  return (
    <BlogTitle
      key={mybloginfo.Blog_ID}
      titleName={mybloginfo.Blog_Title}
      date={mybloginfo.Blog_Date}
      status={mybloginfo.blog_status}
    />
  );
}

const iconStyles = {
  descIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
};

interface MyBlogsInfo {
  email: string;
}

function MyBlogsInfo(props: MyBlogsInfo) {
  const [blogs, setBlogs] = useState<
    {
      Blog_ID: string;
      Blog_Title: string;
      Blog_Date: string;
      blog_status: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/user/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: props.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data.data.data);
      });
  }, [props.email]);

  console.log(blogs);
  return (
    <div className={styles["myblogs__div"]}>
      <DescriptionSharpIcon style={iconStyles.descIcon} />
      <span className={styles["myblogs__text"]}>My Blogs</span>
      {blogs.length !== 0 ? blogs.map(addMyBlogsBox) : null}
    </div>
  );
}

export default MyBlogsInfo;
