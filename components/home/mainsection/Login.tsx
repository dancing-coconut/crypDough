import React, { useRef, useState } from "react";
import styles from "./Login.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { Token } from "@mui/icons-material";

interface Props {}

function Login(props: Props) {
  const [focuspassword, setFocusStatePassword] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<String | null>(null);
  const [userData, setUserData] =
    useState<{ UserName: String; User_Email: String; User_ID: String }>();
  const { data: session, status } = useSession();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // const { data: session, status } = useSession();
  const { data: session } = useSession();
  let accessToken;
  if (session) {
    accessToken = session.accessToken;
  }
  console.log("session,accessToken", session, accessToken);

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const userLoginData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    console.log(emailRef.current?.value)

    fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLoginData),
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
      });
  };
  console.log("userData", userData,Token);
  return (
    <div className={styles["login-content"]}>
      {!session && (
        <>
          <form className={styles["login"]} onSubmit={loginHandler}>
            <h1 className={styles["login-title"]}>Login</h1>
            <div className={styles["login-input"]}>
              <input
                type="email"
                id="email"
                className={styles["login-input"]}
                placeholder="Enter your e-mail"
              />
            </div>
            <div className={styles["login-input"]}>
              <input
                type="password"
                id="password"
                className={styles["login-input"]}
                placeholder="Enter your password"
                readOnly={!focuspassword}
                onFocus={() => {
                  setFocusStatePassword(true);
                }}
              />
            </div>
            <button className={styles["login-button"]} type="submit">
              Login
            </button>
          </form>
          <span className={styles.notSignedInText}>You are not signed in</span>
          <a
            href={`/api/auth/signin`}
            className={styles.buttonPrimary}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session?.user && (
        <>
          <span
            style={{ backgroundImage: `url(${session.user.image})` }}
            className={styles.avatar}
          />
          <span className={styles.signedInText}>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
    </div>
  );
}

export default Login;
