import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const clearForm = (e) => {
    setCredential("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          clearForm();
          setErrors(data.errors);
        }
      }
    );
  };

  const demoLogin = (e) => {
    e.preventDefault();

    setCredential("Demo");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "Demo", password: "password" })
    );
  };

  // return (
  //   <form onSubmit={handleSubmit} className="login-form roundbox boxshadow">
  //     <ul className="error-ul">
  //       {errors.map((error, idx) => (
  //         <li key={idx} className="error-li">
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //     <label className="login-header">Log in to Wallpapr</label>
  //     <input
  //       placeholder="Username or Email"
  //       className="login-input"
  //       type="text"
  //       value={credential}
  //       onChange={(e) => setCredential(e.target.value)}
  //       required
  //     />
  //     <input
  //       placeholder="Password"
  //       className="login-input"
  //       type="password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //       required
  //     />
  //     <button
  //       type="submit"
  //       className={
  //         credential.length > 0 && password.length > 0
  //           ? "login-btn"
  //           : "login-btn-disabled"
  //       }
  //       disabled={credential.length === 0 || password.length === 0}
  //     >
  //       Log In
  //     </button>
  //     <button type="button" onMouseDown={demoLogin} className="demo-btn">
  //       Demo User
  //     </button>
  //   </form>
  // );

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
        <label className="login-header">Log in to Wallpapr</label>
        <div className="user-box">
          <input
            placeholder="Username or Email"
            className="login-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div className="user-box">
          <input
            placeholder="Password"
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={
            credential.length > 0 && password.length > 0
              ? "login-btn"
              : "login-btn-disabled"
          }
          disabled={credential.length === 0 || password.length === 0}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Log In
        </button>
        <button type="button" onMouseDown={demoLogin} className="demo-btn">
          Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
