import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Login from "./Login";
import styles from "./SignUp.module.css";

function Signup(props) {
  const [focuspassword, setFocusStatePassword] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<String | null>(null);
  const [userData, setUserData] = useState<{ UserName: String; User_Email: String; User_ID: String }>();

  
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signUpHandler = (event:React.FormEvent) => {
    event.preventDefault();

    const userData = {
      User_Email: nameRef.current?.value,
      UserName: emailRef.current?.value,
      User_Password: passwordRef.current?.value,
    };

    console.log(emailRef.current?.value)

    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoggedIn(true);
        setJwtToken(data.token);
        setUserData({
          UserName: data.data.user_data.UserName,
          User_Email: data.data.user_data.User_Email,
          User_ID: data.data.user_data["BIN_TO_UUID(id)"],
        });
      })
  };

  console.log("userData", userData);

  return (
    <div className={styles["form-content"]}>
      <form className={styles["form"]} onSubmit={signUpHandler}>
        <h1 className={styles["form-title"]}>Sign Up</h1>
        <h3 className={styles["form-tagline"]}>
          Start your cryptocurrency journey with us today!
        </h3>
        <div className={styles["form-input"]}>
          <input
            ref={nameRef}
            autoComplete="off"
            type="text"
            id="name"
            className={styles["form-input"]}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={styles["form-input"]}>
          <input
            ref={emailRef}
            autoComplete="off"
            type="email"
            id="email"
            className={styles["form-input"]}
            placeholder="Enter your e-mail"
            required
          />
        </div>
        <div className={styles["form-input"]}>
          <input
            ref={passwordRef}
            autoComplete="off"
            type="password"
            id="password"
            className={styles["form-input"]}
            placeholder="Enter your password"
            readOnly={!focuspassword}
            onFocus={() => {
              setFocusStatePassword(true);
            }}
            required
          />
        </div>
        <button type={"submit"} className={styles["register-button"]}>
          Sign Up
        </button>
        <div className={styles["form-login"]}>
          Already have an account? Login
          <span
            href="#"
            style={{ color: "#5B10A7" }}
            onClick={() => {
              props.modalController(true);
            }}
          >
            here
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
