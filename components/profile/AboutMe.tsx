import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import profilePic from "../../public/Images/BitcoinTrans.png";

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
    <div className={styles["aboutme__div"]}>
      <AccountCircleIcon
        style={iconStyles.accountIcon}
        className={styles["aboutme__icon"]}
      />
      <span className={styles["aboutme__text"]}>About Me</span>
      <div className={styles["aboutme__text--para"]}>
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
      <div className={styles["profile__image-maindiv"]}>
        <div className={styles["profile__image-div"]}>
        <Image
          src={profilePic}
          className={styles["profile__image"]}
          alt="profile"
          layout="fill"
        />
      </div>
      </div>
      

      <span className={styles["name__first"]}>First Name</span>
      <span className={styles["name__last"]}>Last Name</span>
      <div className={styles["aboutMe__icons"]}>
        <Link href="/" passHref>
          <LinkedInIcon style={iconStyles.otherIcons} />
        </Link>
        <Link href="/" passHref>
          <LocationOnIcon style={iconStyles.otherIcons} />
          {/* twitter */}
        </Link>
        <Link href="/" passHref>
          <FacebookRoundedIcon style={iconStyles.otherIcons} />
        </Link>
        <Link href="/" passHref>
          <MailIcon style={iconStyles.otherIcons} />
        </Link>
        <Link href="/" passHref>
          <InstagramIcon style={iconStyles.otherIcons} />
        </Link>
        <Link href="/" passHref>
          <GitHubIcon style={iconStyles.otherIcons} />
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
