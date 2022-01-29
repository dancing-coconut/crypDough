import { useState } from "react";
import Modal from "react-modal";
import GetStartedButton from "./GetStartedButton";
import Signup from "./SignUp";

import styles from "./MainBox.module.css";
import Login from "./Login";
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

  return (
    <div className={styles.MainContainer}>
      <img
        className={styles.mainsection__image}
        src="/Images/LandingPage/BackgroundImageMain.png"
        alt="Main"
      />
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
