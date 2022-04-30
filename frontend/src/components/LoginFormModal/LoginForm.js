import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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

  const demoLogin = (e) => {
    e.preventDefault();

    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="login-form roundbox boxshadow">
      <ul className="error-ul">
        {errors.map((error, idx) => (
          <li key={idx} className="error-li">
            {error}
          </li>
        ))}
      </ul>
      <label className="login-header">Log in to Wallpapr</label>
      <input
        placeholder="Username or Email"
        className="login-input"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className={
          credential.length > 0 && password.length > 0
            ? "login-btn"
            : "login-btn-disabled"
        }
        disabled={
          credential.length === 0 ||
          password.length === 0 ||
          credential.value === "Demo-lition"
        }
      >
        Log In
      </button>
      <button type="button" onMouseDown={demoLogin} className="demo-btn">
        Demo User
      </button>
    </form>
  );
}

export default LoginForm;
