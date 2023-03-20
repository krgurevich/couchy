import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  }

  return (
    <div className="login-page">
      <div className="card logincard">
        <h2>Welcome back, let's pick up where you left off!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="username" className="FieldLabel">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="LoginFormField"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" className="FieldLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="LoginFormField"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="LoginBtn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
