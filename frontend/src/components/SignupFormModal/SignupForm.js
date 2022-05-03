import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import "./SignupForm.css";

function SignupForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
    }

    return setErrors(["Passwords do not match."]);
  };

  return (
    <div className="login-box">
      <form onSubmit={handleSubmit} className="login-form">
        <ul className="error-ul">
          {errors.map((error, idx) => (
            <li key={idx} className="error-li">
              {error}
            </li>
          ))}
        </ul>
        <label className="signup-header">Sign up for Wallpapr</label>
        <div className="user-box">
          <input
            placeholder="Email Address"
            className="signup-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Username"
            className="signup-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Password"
            className="signup-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Confirm Password"
            className="signup-input"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={
            !email.includes("@") ||
            username.length < 4 ||
            password.length < 6 ||
            confirmPassword.length < 6
              ? "signup-btn-disabled"
              : "signup-btn"
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
