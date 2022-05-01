import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getUserProfile } from "../../store/profile";

import "./UserProfile.css";

function UserProfile() {
  const sessionUser = useSelector((state) => state.session.user);
  const sessionUserProfile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const history = useHistory();

  // if user doesn't exist, send them to a page not found

  if (!sessionUser) {
    history.push("/page-not-found");
  }

  useEffect(() => {
    dispatch(getUserProfile(sessionUser.id));
  }, [dispatch]);

  console.log(sessionUser);

  return (
    <div className="main-container my-profile-container">
      <div>Will it work</div>
      <div>{sessionUser.id}</div>
    </div>
  );
}

export default UserProfile;
