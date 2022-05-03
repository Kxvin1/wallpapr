import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMemberCommentsThunk } from "../../store/member";
import CommentInfo from "../CommentInfo";

import "./Comments.css";

function Comments({ memberId }) {
  const dispatch = useDispatch();
  const sessionProfile = useSelector((state) => state.member);
  const memberComments = Object.values(sessionProfile);

  //   console.log("member comments", memberComments);

  useEffect(() => {
    dispatch(loadMemberCommentsThunk(memberId));
  }, [dispatch]);

  return (
    <>
      <div className="all-comments-container">
        {memberComments.map((comment) => {
          return <CommentInfo key={comment.userId} comment={comment} />;
        })}
      </div>
    </>
  );
}

export default Comments;
