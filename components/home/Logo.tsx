import React from "react";
import Link from "next/link";
import logo from "../../public/WebsiteLogo.png";
import styles from "./Logo.module.css";
import logoImage from "../../public/WebsiteLogo.png";
import Image from "next/image";
interface Props {
  color: string;
}

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className={styles["WholeLogo"]}>
        <div className={styles["pic__logo"]}>
          <Image className={styles["pic__logo"]} src={logoImage} alt="Logo" />
        </div>
        <h3 style={{ color: props.color }} className={styles["title__logo"]}>
          CrypDough
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
