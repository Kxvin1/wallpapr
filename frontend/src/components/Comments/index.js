import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMemberCommentsThunk } from "../../store/member";
import CommentInfo from "../CommentInfo";

import "./Comments.css";

function Comments({ memberId }) {
  const dispatch = useDispatch();
  const sessionProfile = useSelector((state) => state.member);
  const memberComments = Object.values(sessionProfile);

  // console.log("sessionProfile", sessionProfile);
  // console.log("member comments", memberComments);

  useEffect(() => {
    dispatch(loadMemberCommentsThunk(memberId));
  }, [dispatch]);

  return (
    <>
      {memberComments.length ? (
        <div className="all-comments-container">
          {memberComments?.map((comment) => {
            return <CommentInfo key={comment.id} comment={comment} />;
          })}
        </div>
      ) : null}
    </>
  );
}

export default Comments;
