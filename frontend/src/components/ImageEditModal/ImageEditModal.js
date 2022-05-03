import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { editMemberImageThunk } from "../../store/images";

import "./ImageEditModal.css";

function ImageEditModal({ showModal, image }) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [tags, setTags] = useState([image.tags]);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tagsArray;
    if (tags.length) {
      tagsArray = tags.split(",");
      setTags(tagsArray);
    }

    const payload = {
      id: image.id,
      userId: image.userId,
      imageURL: image.imageURL,
      tags: tagsArray,
    };

    if (location.pathname === `/members/${sessionUser.id}`) {
      dispatch(editMemberImageThunk(payload));
    }

    alert("Edit submitted!");
    showModal(false);
    // history.push("/"); // temporary fix, auto redirects to discover page to force the render
  };

  useEffect(() => {
    const errors = [];

    if (tags.indexOf(" ") >= 0)
      errors.push("Tags are comma separated with no spaces in between.");

    setErrors(errors);
  }, [tags]);

  return (
    <form
      onSubmit={handleSubmit}
      className="form-header-edit-form roundbox boxshadow"
    >
      <ul className="errors-ul-image-edit">
        {errors.length > 0 &&
          errors.map((error) => (
            <li className="error-li-image-edit" key={error}>
              {error}
            </li>
          ))}
      </ul>
      <div className="form-element">
        <h2 className="h2-center">Edit Tags</h2>
        <label className="form-label">Current Tags: </label>
        <input
          className="form-input-edit"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder='ex. "lake, sky, dog"'
        />
      </div>
      <button
        className="image-edit-button"
        type="submit"
        disabled={errors.length > 0}
      >
        Submit Edit
      </button>
    </form>
  );
}

export default ImageEditModal;
