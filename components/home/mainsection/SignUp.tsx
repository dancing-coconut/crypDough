import { useState } from "react";
import Modal from "react-modal";
import Login from "./Login";
import styles from "./SignUp.module.css";

function Signup(props) {
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false);

  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles["form-content"]}>
      <form className={styles["form"]}>
        <h1 className={styles["form-title"]}>Sign Up</h1>
        <h3 className={styles["form-tagline"]}>
          Start your cryptocurrency journey with us today!
        </h3>
        <div className={styles["form-input"]}>
          <input
            type="text"
            id="name"
            className={styles["form-input"]}
            placeholder="Enter your name"
          />
        </div>
        <div className={styles["form-input"]}>
          <input
            type="email"
            id="email"
            className={styles["form-input"]}
            placeholder="Enter your e-mail"
            onChange={emailInputHandler}
          />
        </div>
        <div className={styles["form-input"]}>
          <input
            type="password"
            id="password"
            className={styles["form-input"]}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles["form-input"]}>
          <input
            type="password"
            id="conf-password"
            className={styles["form-input"]}
            placeholder="Re-enter your password"
          />
        </div>
        <button className={styles["register-button"]}>Sign Up</button>
        <div className={styles["form-login"]}>
          Already have an account? Login{" "}
          <span
            style={{ color: "#5B10A7" }}
            href="#"
            onClick={() => setmodalIsOpen(true)}
          >
            here
          </span>
        </div>
        <Modal
          appElement={document.getElementById("root") || undefined}
          isOpen={modalIsOpen}
          onRequestClose={() => setmodalIsOpen(false)}
        >
          <Login />
        </Modal>
      </form>
    </div>
  );
}

export default Signup;
