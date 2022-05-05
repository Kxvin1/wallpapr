import React, { useEffect } from "react";
import "./ImageZoom.css";
import { NavLink } from "react-router-dom";
import { getUsers } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";

function ImageZoom({ image, tagString }) {
  const dispatch = useDispatch();
  const usersObj = useSelector((state) => state.user);
  const users = Object.values(usersObj);

  const username = users.find((user) => {
    return user.id === image.userId;
  });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="image-zoom-container" key={image.id}>
      <img className="image-zoom-zoomed" src={image.imageURL} alt="img" />
      <div className="image-zoomed-info">
        <div className="image-zoom-all-tags" key={image}>
          <NavLink
            className="zoomed-uploader-container"
            to={`/profiles/${image?.userId}`}
          >
            <p className="zoomed-uploader-name">
              Uploaded by: {username?.username}
            </p>
          </NavLink>
          {tagString ? (
            tagString
              .split(",")
              .map((tag) => (
                <p key={tag} className="image-zoom-single-tag">{`${tag}`}</p>
              ))
          ) : (
            <p key="emptytag" className="image-zoom-no-tags"></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageZoom;
