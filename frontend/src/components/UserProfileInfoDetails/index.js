import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserProfile } from "../../store/profile";
import { getUsers } from "../../store/user";

import "./UserProfileInfoDetails.css";

function UserProfileInfoDetails({ memberId }) {
  const dispatch = useDispatch();
  const sessionProfile = useSelector((state) => state.profile);
  const profileInfo = Object.values(sessionProfile);
  const actualProfile = profileInfo[0];

  const sessionUser = useSelector((state) => state?.session?.user);
  const sessionUserImages = useSelector((state) => state?.image);
  const sessionUserUserName = useSelector(
    (state) => state?.session?.user?.username
  );

  const userUploadsLinkObj = profileInfo[0];

  const userUploaderId = userUploadsLinkObj?.User?.id;
  const userUploaderUsername = userUploadsLinkObj?.User?.username;

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
  } else if (sessionUserImages) {
    collectionLinks = (
      <p className="user-collection-link">
        <NavLink
          className="user-collection-navlink"
          to={`/members/${memberId}`}
        >
          {memberId}'s Collection
        </NavLink>
      </p>
    );
  } else {
    collectionLinks = <></>;
  }

  let locationText;

  if (actualProfile) {
    locationText = <p>Location: {actualProfile?.location}</p>;
  } else {
    locationText = <p>User {memberId}'s profile is currently empty!</p>;
  }

  useEffect(() => {
    dispatch(getUserProfile(memberId));
  }, [dispatch, memberId]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
        {locationText}
        <p className="user-bio">{actualProfile?.biography}</p>
      </div>
    </div>
  );
}

export default UserProfileInfoDetails;
