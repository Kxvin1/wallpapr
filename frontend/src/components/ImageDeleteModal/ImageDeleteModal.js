import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { deleteMemberImageThunk } from "../../store/images";

function ImageDeleteModal({ showModal, image }) {
  const history = useHistory();
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
    }

    alert("Image successfully deleted!");
    // history.push("/"); // temp fix while i fix the issue where if we delete from uploads page, and then click to discover, our deleted image is still there
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
