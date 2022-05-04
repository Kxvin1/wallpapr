import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// import delete comment modal
import DeleteCommentModal from "../DeleteCommentModal";
import "./CommentInfo.css";

function CommentInfo({ comment }) {
  const sessionUser = useSelector((state) => state.session.user);

  const commentersProfile = comment?.User?.id;

  // console.log(comment.User.id);

  // const userUploaderId = userUploadsLinkObj?.User?.id;
  // const userUploaderUsername = userUploadsLinkObj?.User?.username;

  const date = new Date(comment.createdAt).toDateString();

  return (
    <div className="comment-container">
      <div className="commented-by-container">
        <div className="commented-by">
          {/* Comment by: {comment?.User?.username} */}
          <NavLink
            className="user-collection-navlink-comment"
            to={`/profiles/${commentersProfile}`}
          >
            Comment by: {comment?.User?.username}
          </NavLink>
        </div>
      </div>
      <div className="comment-text">{comment.commentText}</div>
      <div className="comment-date">{date}</div>
      {sessionUser.id === comment.userId && (
        <DeleteCommentModal comment={comment} />
      )}
    </div>
  );
}

export default CommentInfo;
