import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMemberCommentThunk } from "../../store/member";

import "./CommentPostModal.css";

function CommentPost({ showModal, memberId }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  //   console.log("session user", sessionUser);

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  const commentSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId: sessionUser.id,
      memberId,
      commentText: comment,
    };

    // console.log(payload);

    await dispatch(addMemberCommentThunk(payload));
    showModal(false);
  };

  useEffect(() => {
    const errors = [];
    if (!comment.length) errors.push("Comment cannot be empty.");
    if (comment.length > 255)
      errors.push("Comments cannot exceed 255 characters.");

    setErrors(errors);
  }, [comment]);

  return (
    <div className="login-box">
      <form onSubmit={commentSubmit} className="login-form">
        <label className="signup-header">Write Comment</label>
        <ul className="errors-ul">
          {errors.length > 0 &&
            errors.map((error) => (
              <li className="error-li-comment-post" key={error}>
                {error}
              </li>
            ))}
        </ul>
        <div className="form-element form-text-area">
          <div className="comment-user-box">
            <textarea
              className="textarea-for-comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your comment here..."
              rows={5}
            />
          </div>
        </div>
        <button
          className="comment-post-button"
          type="submit"
          disabled={errors.length > 0}
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}

export default CommentPost;
