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

  const path = "/" + props.pathtitle;

  const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#a47ccc" offset="30%" />
      <stop stop-color="rgba(143, 64, 221, 0.925)" offset="50%" />
      <stop stop-color="#5b10a8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#5b10a8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  let image = BitcoinMiningImage;
  if (props.pathtitle === "InvestmentPage") {
    image = InvestmentImage;
  } else if (props.pathtitle === "TransactionsPage") {
    image = TransactionImage;
  }
  return (
    <Link href={path} passHref>
      <div className={styles[classname.concat(props.title)]}>
        <div className={styles["box-image__div"]}>
          <Image
            className={styles[classname3.concat(props.title)]}
            src={image}
            alt={props.alt}
            layout="fill"
            placeholder="blur"
            priority
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>

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
