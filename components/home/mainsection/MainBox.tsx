import { useState } from "react";
import Modal from "react-modal";
import GetStartedButton from "./GetStartedButton";
import Signup from "./SignUp";

import styles from "./MainBox.module.css";
import Login from "./Login";
import Image from "next/image";
import mainSectionImage from "../../../public/BackgroundImageMain.png";
interface Props {}

function MainBox(props: Props) {
  const [singUpModalIsOpen, setSignUpModalIsOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalIsOpen1] = useState(false);

  const openModal = (value: boolean) => {
    setSignUpModalIsOpen(value);
  };

  const openModal1 = (value: boolean) => {
    setLoginModalIsOpen1(value);
  };

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

  return (
    <div className={styles.MainContainer}>
      <div className={styles["mainSection-image__div"]}>
        <Image
          className={styles.mainsection__image}
          src={mainSectionImage}
          alt="Main"
          layout="fill"
          priority
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <h1 className={styles.title__main}>Learn</h1>
      <p className={styles.description__main}>Cryptocurrency</p>
      <GetStartedButton onClickOpenModal={openModal} />
      {!loginModalIsOpen && (
        <Modal
          style={{
            content: {
              position: "absolute",
              width: "40%",
              marginLeft: "27%",
              zIndex: "1",
            },
          }}
          ariaHideApp={false}
          isOpen={singUpModalIsOpen}
          onRequestClose={() => openModal(false)}
        >
          <Signup modalController={openModal1} />
        </Modal>
      )}
      <Modal
        ariaHideApp={false}
        isOpen={loginModalIsOpen}
        onRequestClose={() => {
          setLoginModalIsOpen1(false);
          setSignUpModalIsOpen(false);
        }}
        style={{
          content: {
            position: "absolute",
            width: "40%",
            marginLeft: "27%",
            zIndex: "1",
          },
        }}
      >
        <Login />
      </Modal>
      {/* <Modal></Modal> */}
    </div>
  );
}

export default MainBox;
