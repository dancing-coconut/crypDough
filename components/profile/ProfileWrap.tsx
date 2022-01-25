import NavigationBar from "../NavigationBar";
import AboutMe from "./AboutMe";
import MyBlogs from "./MyBlogInfo";
import Starred from "./Starred";
import ProgressBar from "./ProgressBar";

function ProfilePage() {
  return (
    <div>
      <NavigationBar
        itemcolor="white"
        bgcolor="linear-gradient(90deg, #B638FF 0%, #6600CB 100%)"
        navtype="profile"
        hovercolor="#5b10a8"
        hoverbgcolor="#FFF"
      />
      <AboutMe />
      <MyBlogs />
      <Starred />
      <ProgressBar />
    </div>
  );
}

export default ProfilePage;