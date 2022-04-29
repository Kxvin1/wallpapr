import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  let centerLinks;

  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <ul>
        <li className="id-nav-link">
          <LoginFormModal />
        </li>
        <li className="signup-nav-link">
          <SignupFormModal />
        </li>
      </ul>
    );
  }

  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-bar-element left-container">
          <NavLink exact to="/">
            Home (replace with logo img or something)
          </NavLink>
        </div>
        <div className="nav-bar-element center-container">
          {isLoaded && centerLinks}
        </div>
        <div className="nav-bar-element right-container">
          {isLoaded && sessionLinks}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
