import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../store/profile";
// import { loadMemberProfileThunk } from "../../store/member"; // doesn't work

import "./UserProfileInfoDetails.css";

function UserProfileInfoDetails({ memberId }) {
  const dispatch = useDispatch();
  const sessionProfile = useSelector((state) => state.profile);
  const profileInfo = Object.values(sessionProfile);
  const actualProfile = profileInfo[0];

  console.log("actual", actualProfile);
  // console.log("actual profile", actualProfile);
  // console.log("sesh user", actualProfile.userId === 7);
  // array of objs containing user profile stuff.
  // How to use:
  // use actualProfile (this is an obj) to key into the profile info:
  // actualProfile.User.username (note User is capitalized)
  // actualProfile.User.id (note User is capitalized)
  // actualProfile.avatar
  // actualProfile.biography
  // actualProfile.fullName
  // actualProfile.location

  useEffect(() => {
    dispatch(getUserProfile(memberId));
  }, [dispatch, memberId]);

  return (
    <div className="out-out-container">
      <div className="card-container">
        <img
          className="round"
          src="/logo-images/1-default-avatar-astro.png"
          alt="user"
        />
        <h3>{actualProfile?.fullName}</h3>
        <h3>AKA: {actualProfile?.User?.username}</h3>
        <h6>From: {actualProfile?.location}</h6>
        <p className="user-bio">{actualProfile?.biography}</p>
        {/* EditProfileModal below: */}
        {/* {sessionUser.id === +memberId && <EditProfileModal myProfile={actualProfile} />} */}
      </div>
    </div>
  );
}

export default UserProfileInfoDetails;
