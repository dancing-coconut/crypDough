import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const iconStyles = {
  accountIcon: {
    fontSize: "50px",
    color: "#5B10A8",
  },
  otherIcons: {
    fontSize: "40px",
    color: "#5B10A8",
    margin: "10px 20px 0px 20px",
  },
};

function AboutMe() {
  return (
    <div className="aboutme__div">
      <AccountCircleIcon
        style={iconStyles.accountIcon}
        className="aboutme__icon"
      />
      <span className="aboutme__text">About Me</span>
      <div className="aboutme__text--para">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <img
        className="profile__image"
        src="/Images/BitcoinTrans.png"
        alt="profile"
      />
      <span className="name__first">First Name</span>
      <span className="name__last">Last Name</span>
      <div className="aboutMe__icons">
        <Link to="/">
          <LinkedInIcon style={iconStyles.otherIcons} />
        </Link>
        <Link to="/">
          <LocationOnIcon style={iconStyles.otherIcons} />
          {/* twitter */}
        </Link>
        <Link to="/">
          <FacebookRoundedIcon style={iconStyles.otherIcons} />
        </Link>
        <Link to="/">
          <MailIcon style={iconStyles.otherIcons} />
        </Link>
        <Link to="/">
          <InstagramIcon style={iconStyles.otherIcons} />
        </Link>
        <Link to="/">
          <GitHubIcon style={iconStyles.otherIcons} />
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;