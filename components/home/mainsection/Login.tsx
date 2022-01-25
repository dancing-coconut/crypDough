import React from "react";

interface Props{
  
}

function Login(props:Props) {
  return (
    <div className="login-content">
      <form className="login">
        <h1 className="login-title">Login</h1>
        <div className="login-input">
          <input
            type="email"
            id="email"
            className="login-input"
            placeholder="Enter your e-mail"
          />
        </div>
        <div className="login-input">
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button" type="button">Login</button>
      </form>
    </div>
  );
}

export default Login;
