import React, { useState } from "react";
import styles from "./Login.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

interface Props {}

function Login(props: Props) {
  const [focuspassword, setFocusStatePassword] = useState<boolean>(false);
  const { data: session, status } = useSession();

  return (
    <div className={styles["login-content"]}>
      {!session && (
        <>
          <form className={styles["login"]}>
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
            <button className={styles["login-button"]} type="button">
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
