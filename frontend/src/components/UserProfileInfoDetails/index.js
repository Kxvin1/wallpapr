import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserProfile } from "../../store/profile";
// import { loadMemberProfileThunk } from "../../store/member"; // doesn't work
import { getUsers } from "../../store/user";

import "./UserProfileInfoDetails.css";

function UserProfileInfoDetails({ memberId }) {
  const dispatch = useDispatch();
  const sessionProfile = useSelector((state) => state.profile);
  const profileInfo = Object.values(sessionProfile);
  const actualProfile = profileInfo[0];

  // console.log("actual", actualProfile);

  const usersObj = useSelector((state) => state.user);
  const users = Object.values(usersObj);

  // const uploaderProfile = users.find((user) => {
  //   return user.id === image.userId;
  // });

  const userUploadsLinkObj = profileInfo[0];

  // console.log(userUploadsLinkObj?.User?.id);
  // console.log(userUploadsLinkObj?.User?.username);

  const userUploaderId = userUploadsLinkObj?.User?.id;
  const userUploaderUsername = userUploadsLinkObj?.User?.username;

  console.log(userUploaderId);
  console.log(userUploaderUsername);

  let collectionLinks;

  if (userUploaderId) {
    collectionLinks = (
      <p className="user-collection-link">
        <NavLink
          className="user-collection-navlink"
          to={`/members/${userUploaderId}`}
        >
          {userUploaderUsername}'s Collection
        </NavLink>
      </p>
    );
  } else {
    collectionLinks = <></>;
  }

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
        {collectionLinks}
        <h3>{actualProfile?.fullName}</h3>
        {/* <h4>AKA: "{actualProfile?.User?.username}"</h4> */}
        <p>Location: {actualProfile?.location}</p>
        <p className="user-bio">{actualProfile?.biography}</p>
        {/* EditProfileModal below: */}
        {/* {sessionUser.id === +memberId && <EditProfileModal myProfile={actualProfile} />} */}
      </div>
    </div>
  );
}

export default UserProfileInfoDetails;
