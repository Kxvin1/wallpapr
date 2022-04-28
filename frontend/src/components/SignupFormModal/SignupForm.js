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
        if (data && data.errors) setErrors(data.errors);
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
    </form>
  );
}

export default SignupForm;
