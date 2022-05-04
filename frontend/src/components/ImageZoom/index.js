import React, { useEffect } from "react";
import "./ImageZoom.css";
import { NavLink } from "react-router-dom";
import { getUsers } from "../../store/user";
import { useDispatch, useSelector } from "react-redux";

function ImageZoom({ image, tagString }) {
  const dispatch = useDispatch();
  const usersObj = useSelector((state) => state.user);
  const users = Object.values(usersObj);

  // console.log("users", users);

  const username = users.find((user) => {
    return user.id === image.userId;
  });

  console.log("~~~~~~~~~~~~username~~~~~~~~~~~~~", username?.username);

  // {id: 2, userId: 4, imageURL: '/images/image-2.png', tags: Array(3), favoritedCount: 151, …}
  // Favorites: []
  // Users: []
  // createdAt: "2022-04-29T00:45:22.345Z"
  // favoritedCount: 151
  // id: 2
  // imageURL: "/images/image-2.png"
  // tags: (3) ['dragon', 'fantasy', 'army']
  // updatedAt: "2022-04-29T00:45:22.345Z"
  // userId: 4

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
              {username?.username}'s Profile
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
