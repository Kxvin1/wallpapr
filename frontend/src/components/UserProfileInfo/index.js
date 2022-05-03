import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import UserProfileInfoDetails from "../UserProfileInfoDetails";
import Comments from "../Comments";

import "./UserProfileInfo.css";
// import comment form modal component

function UserProfileInfo() {
  const sessionUser = useSelector((state) => state.session.user);
  const { memberId } = useParams();

  return (
    <>
      {sessionUser ? (
        <div className="member-profile-main-container">
          <div className="member-profile-main-inner-container">
            <>
              <div className="member-profile-container">
                <UserProfileInfoDetails memberId={memberId} />
              </div>
              <div className="all-reviews-container-container">
                <div className="all-reviews-and-button-container">
                  <div className="add-review-button-container">
                    CommentFormModal Component
                  </div>
                  <Comments memberId={memberId} />
                </div>
              </div>
            </>
          </div>
        </div>
      ) : (
        <>Page Not Found Component</>
      )}
    </>
  );
}

export default UserProfileInfo;
