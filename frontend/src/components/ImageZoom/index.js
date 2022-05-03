import React from "react";
import "./ImageZoom.css";
import { NavLink } from "react-router-dom";

function ImageZoom({ image, tagString }) {
  // console.log(image);
  // console.log("tag string", tagString);

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

  return (
    <div className="image-zoom-container" key={image.id}>
      <img className="image-zoom-zoomed" src={image.imageURL} alt="img" />
      <div className="image-zoomed-info">
        {/* <NavLink
          className="zoomed-uploader-container"
          to={`/profiles/${image?.userId}`}
        >
          <p className="zoomed-uploader-name">{image?.User.username}</p>
        </NavLink> */}
        <div className="image-zoom-all-tags" key={image}>
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
