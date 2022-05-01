import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getImages } from "../../store/images";
import ImageInfo from "../ImageInfo";

import "./UserMain.css";

function UserMain() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const imagesObject = useSelector((state) => state.image);
  const images = Object.values(imagesObject);

  images.sort((a, b) => {
    return b.id - a.id;
  });

  // console.log("images sorted?", imagesSorted);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="image-user-main-container">
      {images?.map((image) => {
        if (image.userId === sessionUser.id) {
          return <ImageInfo key={image.id} image={image} />;
        }

        return <ImageInfo key={image.id} image={image} />;
      })}
    </div>
  );
}

export default UserMain;
