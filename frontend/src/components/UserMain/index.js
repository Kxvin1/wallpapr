import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getImages } from "../../store/images";

import "./UserMain.css";

function UserMain() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const imagesObject = useSelector((state) => state.image);
  const images = Object.values(imagesObject);
  console.log("sessionUser", sessionUser);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="image-row">
      {images.map((image) => {
        return (
          <div className="image-block">
            <img
              className="image-poster"
              src={image.imageURL}
              alt="img-alt"
              key={image.id}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default UserMain;
