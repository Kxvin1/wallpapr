import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { postImage } from "../../store/images";

import "./ImageUpload.css";

function ImageUpload({ showModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [imageURL, setImageURL] = useState("");
  const [tags, setTags] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  const imageSubmit = async (e) => {
    e.preventDefault();

    let tagsArr;
    if (tags.length) {
      tagsArr = tags.split(",");
      setTags(tagsArr);
    }

    const payload = {
      userId: sessionUser.id,
      imageURL,
      tags: tagsArr,
    };

    dispatch(postImage(payload));
    history.push("/");

    showModal(false);
  };

  useEffect(() => {
    const errors = [];
    if (!imageURL.length) errors.push("URL is required!");
    if (tags.indexOf(" ") >= 0)
      errors.push("Tags are comma separated with no spaces.");
    if (!imageURL.match(/^https?:\/\/.+\/.+$/) && imageURL.length > 0)
      errors.push("Invalid url.");

    setValidationErrors(errors);
  }, [tags, imageURL]);

  return (
    <form onSubmit={imageSubmit} className="upload-form roundbox boxshadow">
      <div className="form-header">
        <h4>Upload New Image</h4>
      </div>
      <ul className="error-ul">
        {validationErrors.length > 0 &&
          validationErrors.map((error) => (
            <li className="error-li" key={error}>
              {error}
            </li>
          ))}
      </ul>
      <div className="form-element">
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Image URL"
          required
        />
      </div>
      <div className="form-element">
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (optional) e.g. 'minimal'"
        />
      </div>
      <button
        type="submit"
        className="upload-btn"
        disabled={validationErrors.length > 0}
      >
        Upload
      </button>
    </form>
  );
}

export default ImageUpload;
