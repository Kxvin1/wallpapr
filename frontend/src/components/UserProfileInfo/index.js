import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import UserProfileInfoDetails from "../UserProfileInfoDetails";
import Comments from "../Comments";
import CommentPostModal from "../CommentPostModal";

import "./UserProfileInfo.css";

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
              <div className="add-review-button-container">
                <CommentPostModal memberId={memberId} />
              </div>
              <Comments memberId={memberId} />
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
