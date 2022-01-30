import Image from "next/image";
import Link from "next/link";
import styles from "./SubBox.module.css";

import InvestmentImage from "../../../public/Images/LandingPage/InvestmentMainPage.png";
import TransactionImage from "../../../public/Images/LandingPage/TransactionMainPage.png";
import BitcoinMiningImage from "../../../public/Images/LandingPage/BitcoinMiningMainPage.png";

interface Props {
  pathtitle: string;
  title: string;
  bgUrl: string;
  alt: string;
}
const SubBox = (props: Props) => {
  const classname = "subsection__";
  const classname3 = "subsectionImg__";
  const classname1 = "title__sub";
  console.log(props.bgUrl);
  const path = "/" + props.pathtitle;
  let image = BitcoinMiningImage;
  if (props.pathtitle === "InvestmentPage") {
    image = InvestmentImage;
  } else if (props.pathtitle === "TransactionsPage") {
    image = TransactionImage;
  }
  return (
    <Link href={path}>
      <div className={styles[classname.concat(props.title)]}>
        <Image
          className={styles[classname3.concat(props.title)]}
          src={image}
          alt={props.alt}
          layout="fill"
        />

        <span
          className={`${styles["title__sub"]} ${
            styles[`${classname1.concat(props.title)}`]
          }`}
        >
          {props.title}
        </span>
      </div>
    </Link>
  );
};

export default SubBox;
