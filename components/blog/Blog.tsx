import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavigationBar from "../NavigationBar";
import Comments from "../comments/Comments";
import WriteComment from "../comments/WriteComment";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {useRouter} from 'next/router';

interface Blog {
  blogid: string | string[] | undefined;
}

const Blog = (props: Blog) => {
  const router=useRouter();
  //Naviagte, useNavigate - aa thoo, try router
  const [blogTitles, setblogTitles] = useState<{
    Blog_Titles:string;
    Blog_IDs:string;
  }[]>([])
  const [value, setValue] = useState("");
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
  // const [commentData, setCommentData] = useState<{
  //   author: string;
  //   date: string;
  //   content: string;
  // }>({
  //   author: "ABC",
  //   date: "DD-MM-YYYY",
  //   content:
  //     "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual",
  // });

  // const addComment = (comment: {
  //   author: string;
  //   date: string;
  //   content: string;
  // }) => {
  //   setCommentData(comment);
  // };
  useEffect(() => {
    if (props.blogid){
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
  useEffect(() => {
    if(blogData.Author_Email){
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/api/v1/blogs/blog/user/${blogData.Author_Email}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.data.data);
          setblogTitles(data.data.data);
        });
    }
  }, [blogData.Author_Email]);
  const name="Search for a blog by "+blogData.Author_Email;

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
        <Autocomplete
        freeSolo
        disableClearable
        options={blogTitles.map((data) => data.Blog_Title)}
        onChange={(e,v) => {
          setValue(v);
          //Value dede please aur kuch bhi kabhi bhi nhi mangugi
          console.log(v);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              width:300,
              height:40,
              color:'white',
            }}
            //Don't do overdrama with TextField props, collision happening- do CSMA-CA-TD: sx/stylesC
            label={name}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <button onClick={
        ()=>{
          var i;
          for(i=0;i<blogTitles.length;++i){
            if(blogTitles[i].Blog_Title==value)
              break;
          }
          console.log(i);
          console.log(blogTitles[i].Blog_ID);
          //TF is Blog_ID disappearing to, gives -1, indexOf-x
          router.push(`${blogTitles[i].Blog_ID}`); 
        }
        //Redirect-bigtime bitch -isn't working-existential crisis error
      }>Go</button>
      
      {/* <a href={`/blog/${blogTitles[blogTitles.map(x => x.Blog_Titles).indexOf(value)].Blog_IDs}`}>Go</a> */}
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
        <WriteComment parent={blogData.Blog_ID} blogid={blogData.Blog_ID}/>
      </div>
      <div className={styles.Comment__Div}>
        {/*Do we still need commentData={commentData}*/}
        <Comments parent={blogData.Blog_ID} blogid={blogData.Blog_ID}/>
      </div>
    </div>
  );
};

export default Blog;

/* Logic for blogs to comments:
Our blog boi/gal/prefer-not-to-say here gives its id to WriteComment as the blogid of that comment
and as the parent id of that comment, as any comment made with this WriteComment is directly for blog
The Comments holds all the comments with parent id as the blogid, and with blogid and this blog's id*/