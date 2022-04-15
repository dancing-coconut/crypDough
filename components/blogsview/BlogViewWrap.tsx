import { useEffect, useState } from "react";
import NavigationBar from "../NavigationBar";
import BlogViewSection from "./BlogViewSection";
import styles from "./BlogViewWrap.module.css";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Link from "next/link";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {useRouter} from 'next/router';
import useSWR from "swr";

function BlogViewWrap() {
  // const { data, error } = useSWR('http://localhost:8000/api/v1/blogs')
  // console.log(data,"from SWR");
  const router=useRouter();
  const [value, setValue] = useState("");
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
        <div className={styles.Search__box}>
        <Autocomplete
        freeSolo
        disableClearable
        options={totalBlogs.map((data) => data.Blog_Title)}
        onChange={(e,v) => {
          setValue(v);
          console.log(v);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              width:500,
              height:40,
              color:'white',
            }}
            label="Search for a blog!"
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
          for(i=0;i<totalBlogs.length;++i){
            if(totalBlogs[i].Blog_Title==value)
              break;
          }
          console.log(i);
          console.log(totalBlogs[i].Blog_ID);
          //TB - you aren't doing tun tun with the other array anymore
          router.push(`/blog/${totalBlogs[i].Blog_ID}`); 
        }
        //Check back 
      }>Go</button>
        </div>
        <div className={styles.Plus__button}>
          <Link href="/blog/writeblog" passHref>
            <Fab color="secondary">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </div>
      <div className={styles.Blog_Row}>
        {totalBlogs
        //Like PK's ten ten reel, split, and join back
          ? totalBlogs.map((data) => {
              return (
                <BlogViewSection
                  date={data.Blog_Date}
                  author={data.Author_Email}
                  blogname={data.Blog_Title}
                  blogimg={data.Blog_Photo}
                  blogdesc={data.Blog_Content}
                  blogid={data.Blog_ID}
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
