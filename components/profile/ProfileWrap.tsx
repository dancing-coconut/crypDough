import NavigationBar from "../NavigationBar";
import AboutMe from "./AboutMe";
import MyBlogsInfo from "./MyBlogInfo";
import Starred from "./Starred";
import ProgressBar from "./ProgressBar";


interface Props{
  email:string,
}
function ProfileWrap(props:Props) {
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
      <MyBlogsInfo email={props.email}/>
      <Starred email={props.email}/>
      <ProgressBar />
    </div>
  );
}

export default ProfileWrap;