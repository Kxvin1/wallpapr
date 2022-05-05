import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postImage } from "../../store/images";

import "./ImageUpload.css";

function ImageUpload({ showModal }) {
  const dispatch = useDispatch();
  const history = useHistory();

  // const [imageURL, setImageURL] = useState(""); --> pre aws
  const [image, setImage] = useState(null); // --> post aws
  const [tags, setTags] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  const superUsersArray = [7]; // add Demo user to this (id = 1) when demoing or want to give upload functionality to demo user

  const imageSubmit = async (e) => {
    e.preventDefault();

    let tagsArr;
    if (tags.length) {
      tagsArr = tags.split(",");
      setTags(tagsArr);
    }

    const payload = {
      userId: sessionUser.id,
      image,
      tags: tagsArr,
    };

    console.log(payload);

    dispatch(postImage(payload));
    alert("Image uploaded successfully!");

    showModal(false);
    return;
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (file) setImage(file);
  };

  useEffect(() => {
    const errors = [];
    // if (!image.length) errors.push("URL is Required");
    if (tags.indexOf(" ") >= 0) errors.push("Current Tags Invalid");
    // if (!image.match(/^https?:\/\/.+\/.+$/) && image.length > 0)
    //   errors.push("Current URL Invalid");

    setValidationErrors(errors);
  }, [tags]);

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
          {/* <input
            className="form-input"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="URL: http//:img.com/gj1.jpg"
            required
          /> */}
          <input type="file" onChange={uploadFile} />
        </div>
        {/* <div className="user-box">
          <input
            className="form-input"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags (optional): cat, sky, dog"
          />
        </div> */}
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
