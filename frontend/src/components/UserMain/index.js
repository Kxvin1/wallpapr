import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getImages } from "../../store/images";
import { Modal } from "../../context/Modal";

import "./UserMain.css";

function UserMain() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // const sessionUser = useSelector((state) => state.session.user);

  const imagesObject = useSelector((state) => state.image);
  const images = Object.values(imagesObject);
  // console.log("images obj", imagesObject);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="image-row">
      {images.map((image) => {
        return (
          <div className="image-block" key={image.id}>
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
