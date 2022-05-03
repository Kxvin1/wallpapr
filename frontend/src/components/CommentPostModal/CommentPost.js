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

    dispatch(addMemberCommentThunk(payload));
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
    <form onSubmit={commentSubmit}>
      <div className="form-header">
        <h4>Write Comment</h4>
      </div>
      <ul className="errors-ul">
        {errors.length > 0 &&
          errors.map((error) => (
            <li className="error-li-comment-post" key={error}>
              {error}
            </li>
          ))}
      </ul>
      <div className="form-element form-text-area">
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment here..."
        />
      </div>
      <button
        className="comment-post-button"
        type="submit"
        disabled={errors.length > 0}
      >
        Post Comment
      </button>
    </form>
  );
}

export default CommentPost;
