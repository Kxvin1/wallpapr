import React from "react";
import { useDispatch } from "react-redux";
import { deleteMemberCommentThunk } from "../../store/member";

function DeleteComment({ showModal, comment }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: comment.id,
    };

    dispatch(deleteMemberCommentThunk(payload));
    showModal(false);
  };

  const handleCancelClick = async (e) => {
    e.preventDefault();
    showModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Delete your comment?</label>
      <div className="button-container">
        <button className="delete-button" type="submit">
          Delete
        </button>
        <button
          className="cancel-button"
          type="button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default DeleteComment;
