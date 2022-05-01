import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteMemberImageThunk } from "../../store/member";
import { deleteImageThunk } from "../../store/images";

function ImageDeleteModal({ showModal, image }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: image.id,
    };

    if (location.pathname === `/members/${sessionUser.id}`) {
      dispatch(deleteMemberImageThunk(payload));
    } else {
      dispatch(deleteImageThunk(payload));
    }

    showModal(false);
  };

  const handleCancelClick = async (e) => {
    e.preventDefault();
    showModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Delete this image?</label>
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

export default ImageDeleteModal;
