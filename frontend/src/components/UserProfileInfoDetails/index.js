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

  // console.log("actual profile", actualProfile);
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
    <div className="user-profile-info-details-top-container">
      {profileInfo && (
        <div id="user-profile-info-details-content">
          <div>Placeholder Bio Info Text: </div>
          <div>Placeholder Bio Info Text: </div>
          <div>Placeholder Bio Info Text: </div>
          <div>Placeholder Bio Info Text: </div>
          <div>Placeholder Bio Info Text: </div>
          <div>Placeholder Bio Info Text: </div>
        </div>
      )}
    </div>
  );
}

export default UserProfileInfoDetails;
