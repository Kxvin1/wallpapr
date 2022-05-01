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
    <form onSubmit={handleSubmit} className="signup-form roundbox boxshadow">
      <ul className="error-ul">
        {errors.map((error, idx) => (
          <li key={idx} className="error-li">
            {error}
          </li>
        ))}
      </ul>
      <label className="signup-header">Sign up for Wallpapr</label>
      <input
        placeholder="Email Address"
        className="signup-input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Username"
        className="signup-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        className="signup-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        placeholder="Confirm Password"
        className="signup-input"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
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
  );
}

export default SignupForm;
