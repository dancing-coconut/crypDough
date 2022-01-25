import React from "react";
import Link from "next/link";
import logo from "../../public/WebsiteLogo.png";

interface Props {
  color: string;
}

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className="WholeLogo">
        <img className="pic__logo" src={logo} alt="Logo" />
        <h3 style={{ color: props.color }} className="title__logo">
          Bitcoin
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
