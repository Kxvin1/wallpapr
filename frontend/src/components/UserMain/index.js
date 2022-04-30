import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getImages } from "../../store/images";
import { Modal } from "../../context/Modal";

import "./UserMain.css";

function UserMain() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [modelId, setModelId] = useState("");

  // const sessionUser = useSelector((state) => state.session.user);

  const imagesObject = useSelector((state) => state.image);
  const images = Object.values(imagesObject);
  // console.log("images", images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const getImg = (imgSrc, imageId) => {
    setTempImgSrc(imgSrc);
    setModelId(imageId);
    setModel(true);
  };

  return (
    <div>
      <div
        className={model ? "model open" : "model"}
        onClick={() => setModel(false)}
      >
        <img className="modal_img" src={tempimgSrc} alt="img"></img>
      </div>
      <div className="image-row">
        {images.map((image) => {
          return (
            <div className="image-block" key={image.id}>
              <img
                onClick={() => getImg(image.imageURL, image.id)}
                className="image-poster"
                src={image.imageURL}
                alt="img-alt"
                key={image.id}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserMain;
