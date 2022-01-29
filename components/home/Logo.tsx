import React from "react";
import Link from "next/link";
import logo from "../../public/WebsiteLogo.png";
import styles from "./Logo.module.css"
import Image from "next/image";
interface Props {
  color: string;
}

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className={styles["WholeLogo"]}>
        <img className={styles["pic__logo"]} src="/WebsiteLogo.png" alt="Logo" />
        <h3 style={{ color: props.color }} className={styles["title__logo"]}>
          Bitcoin
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
