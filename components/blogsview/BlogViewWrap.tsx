import NavigationBar from "../NavigationBar";
import BlogSection from "./BlogViewSection";
import styles from "./BlogViewWrap.module.css"

function BlogPage() {
  return (
    <div>
      <NavigationBar itemcolor="white" bgcolor="#5B10A8" navtype="profile1" />
      <div className={styles.Search__area}>
        <div className={styles.Search__box}></div>
      </div>
      <div style={{ display: "flex" }} className={styles.Blog_Row}>
        <BlogSection
          author="Author 1"
          date="DD/MM/YYYY"
          blogname="Blog Title 1"
          blogimg="https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/20/full/1621527204-9343.jpg&width=1200"
          blogdesc="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                "
        />
        <BlogSection
          author="Author 2"
          date="DD/MM/YYYY"
          blogname="Blog Title 2"
          blogimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhRS-GqtCRLuOe6OBO-bBqdowHU9KRbBp-g&usqp=CAU"
          blogdesc="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
                "
        />
      </div>
    </div>
  );
}

export default BlogPage;