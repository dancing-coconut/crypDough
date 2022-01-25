import { useState } from "react";
import Modal from "react-modal";
import GetStartedButton from "./GetStartedButton";
import Signup from "./SignUp";

import styles from "./MainBox.module.css"
interface Props{
  
}

function MainBox(props:Props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModal = () => {
    setmodalIsOpen(true);
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
      >
        <Signup />
      </Modal>
      {/* <Modal></Modal> */}
    </div>
  );
}

export default MainBox;
