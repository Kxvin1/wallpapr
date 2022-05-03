import React from "react";
import { useSelector } from "react-redux";

// import delete comment modal
import "./CommentInfo.css";

function CommentInfo({ comment }) {
  const sessionUser = useSelector((state) => state.session.user);
  // console.log(comment);

  const date = new Date(comment.createdAt).toDateString();

  // console.log(comment.User?.username);

  return (
    <div className="comment-container">
      <div className="commented-by-container">
        <div className="commented-by">Comment by: {comment.User?.username}</div>
      </div>
      <div className="comment-text">{comment.commentText}</div>
      <div className="comment-date">{date}</div>
      {/* add when delete comment modal is created and if match with userId then allow delete
      {sessionUser.id === comment.userId && <DeleteCommentModal comment={comment} />} */}
    </div>
  );
}

export default CommentInfo;
