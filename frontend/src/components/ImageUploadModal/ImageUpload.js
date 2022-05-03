import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postImage } from "../../store/images";

import "./ImageUpload.css";

function ImageUpload({ showModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [imageURL, setImageURL] = useState("");
  const [tags, setTags] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  // console.log(sessionUser);

  const superUsersArray = [7, 13];
  console.log(superUsersArray);

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
    alert("Image uploaded successfully!");
    // history.push(`/`); // temporary fix, auto redirects to discover page to force the render
    // history.push(`/members/${sessionUser.id}`); // if want to redirect them to their profile after upload

    showModal(false);
    return;
  };

  useEffect(() => {
    const errors = [];
    if (!imageURL.length) errors.push("URL is Required");
    if (tags.indexOf(" ") >= 0) errors.push("Current Tags Invalid");
    if (!imageURL.match(/^https?:\/\/.+\/.+$/) && imageURL.length > 0)
      errors.push("Current URL Invalid");

    setValidationErrors(errors);
  }, [tags, imageURL]);

  return (
    <div className="login-box">
      <form onSubmit={imageSubmit} className="login-form">
        <label className="signup-header">New Image Upload</label>
        <ul className="error-ul-image-upload">
          {validationErrors.length > 0 &&
            validationErrors.map((error) => (
              <li className="error-li-image-upload" key={error}>
                {error}
              </li>
            ))}
        </ul>
        <div className="user-box">
          <input
            className="form-input"
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="URL: http//:img.com/gj1.jpg"
            required
          />
        </div>
        <div className="user-box">
          <input
            className="form-input"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (optional): cat, sky, dog"
          />
        </div>
        <button
          type="submit"
          className={
            superUsersArray.includes(sessionUser.id) &&
            validationErrors.length <= 0
              ? "upload-btn"
              : "upload-btn-disabled"
          }
          disabled={
            !superUsersArray.includes(sessionUser.id) ||
            validationErrors.length > 0
          }
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;
