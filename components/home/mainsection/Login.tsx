import React from "react";
import styles from "./Login.module.css"
interface Props{
  
}

function Login(props:Props) {
  return (
    <div className={styles["login-content"]}>
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
        <div className="login-input">
          <input
            type="password"
            id="password"
            className={styles["login-input"]}
            placeholder="Enter your password"
          />
        </div>
        <button className={styles["login-button"]} type="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
