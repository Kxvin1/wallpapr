import React from "react";
import "./ImageZoom.css";

function ImageZoom({ image }) {
  //   console.log(image);

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
      <div className="image-zoomed-info"></div>
    </div>
  );
}

export default ImageZoom;
