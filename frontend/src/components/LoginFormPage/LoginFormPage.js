import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./LoginForm.css";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // If there is a session (user is logged in), redirect to home page
  if (sessionUser) return <Redirect to="/" />;

  // Handles Regular User Login
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  // Handles Demo User Login
  const demoLogin = (e) => {
    e.preventDefault();
    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-header">
        {/* <h4>Replace this with a small img of logo (give it it's own class)</h4> */}
        {/* <h4>Log in to Wallpapr</h4> */}
      </div>
      <ul className="error-login">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <label className="username">
        Username or Email
        <input
          className="login-input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className="password">
        Password
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="login-button">
        Log In
      </button>
      <button type="button" onMouseDown={demoLogin} className="demo-button">
        Demo User
      </button>
    </form>
  );
}

export default LoginFormPage;
