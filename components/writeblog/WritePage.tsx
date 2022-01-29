import { useEffect, useRef, useState } from "react";
import NavigationBar from "../NavigationBar";
import styles from "./WritePage.module.css";

interface Props {
  email: string;
}

function WriteBlog(props: Props) {
  const [blogNumber, setBlogNumber] = useState(0);
  const TitleRef = useRef<HTMLInputElement>(null);
  const PostRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/blogs/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: props.email }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogNumber(data.data.count);
      });
  }, []);
    console.log(blogNumber);
  const SaveHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(TitleRef.current?.value, PostRef.current?.value);
    const post = {
      blogNumber: blogNumber+1,
      title: TitleRef.current?.value,
      post: PostRef.current?.value,
      email: props.email,
      photo:
        "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg",
    };
    fetch("http://127.0.0.1:8000/api/v1/save-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((response) => {
        if (response.status === 404) {
          console.log("error!!");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const PostHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(TitleRef.current?.value, PostRef.current?.value);
    const post = {
      blogNumber: blogNumber+1,
      title: TitleRef.current?.value,
      post: PostRef.current?.value,
      email: props.email,
      photo:
        "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg",
    };
    fetch("http://127.0.0.1:8000/api/v1/post-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((response) => {
        if (response.status === 404) {
          console.log("error!!");
        }
        return response.json();
      })
      .then((data) => {
        console.log("saved");
      });
  };

  return (
    <div className={styles.PostPage__div}>
      <NavigationBar itemcolor="#FFFFFF" bgcolor="#5B10A8" />
      <h4 className={styles.Post__title}>Create a Post</h4>
      <hr className={styles.Post__line} />
      <select className={styles.Post__topic} title="blog-type">
        <option value="none" selected disabled hidden>
          Choose a Topic
        </option>
        <option>Investments</option>
        <option>Transactions</option>
        <option>Bitcoin Mining</option>
      </select>
      <div className={styles.Postbox__container}>
        <div className={styles.PostBox}>
          <input
            type="text"
            placeholder="Title"
            className={styles.PostTitle}
            ref={TitleRef}
          ></input>
          <div className={styles.Post__Additions}>
            <button type="button" className={styles.Post}>
              GIFS
            </button>
            <button type="button" className={styles.Post__options}>
              Photos
            </button>
            <button type="button" className={styles.Post__options}>
              Links
            </button>
            <button type="button" className={styles.Post__options}>
              Collab
            </button>
          </div>
          <textarea
            ref={PostRef}
            className={styles.Post__area}
            placeholder="Text"
          ></textarea>
          <div className={styles.Post__buttons}>
            <button
              type="submit"
              className={styles.Posting__options}
              onClick={SaveHandler}
            >
              Save
            </button>
            <button
              type="submit"
              className={styles.Posting__options}
              onClick={PostHandler}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteBlog;
