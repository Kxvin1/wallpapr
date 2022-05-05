import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMemberCommentsThunk } from "../../store/member";
import CommentInfo from "../CommentInfo";

import "./Comments.css";

function Comments({ memberId }) {
  const dispatch = useDispatch();
  const sessionProfile = useSelector((state) => state.member);
  const memberComments = Object.values(sessionProfile);

  memberComments.sort((a, b) => {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(loadMemberCommentsThunk(memberId));
  }, [dispatch, memberId]);

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
