import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { postImage } from "../../store/images";

import "./ImageUpload.css";

function ImageUpload({ showModal }) {
  const dispatch = useDispatch();
  // const history = useHistory();

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
    alert("Image uploaded successfully!");
    // history.push(`/`); // if want to redirect them to discover page after upload
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
    <form onSubmit={imageSubmit} className="upload-form roundbox boxshadow">
      <div className="form-header">
        <h4>New Image Upload</h4>
      </div>
      <ul className="error-ul-image-upload">
        {validationErrors.length > 0 &&
          validationErrors.map((error) => (
            <li className="error-li-image-upload" key={error}>
              {error}
            </li>
          ))}
      </ul>
      {/* <div className="form-input"> */}
      <input
        className="form-input"
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
        placeholder="ex: https://img.com/NCkJ.jpg"
        required
      />
      {/* </div> */}
      {/* <div className="form-input"> */}
      <input
        className="form-input"
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        placeholder="ex: lake, sky, dog"
      />
      {/* </div> */}
      <button
        type="submit"
        className={
          sessionUser.id === 7 && validationErrors.length <= 0
            ? "upload-btn"
            : "upload-btn-disabled"
        }
        disabled={sessionUser.id !== 7 || validationErrors.length > 0}
      >
        Upload
      </button>
    </form>
  );
}

export default ImageUpload;
