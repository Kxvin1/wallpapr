import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { loadMemberImagesThunk } from "../../store/member";

import "./UserProfile.css";

function UserProfile() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { memberId } = useParams();

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const [modelId, setModelId] = useState("");

  const memberImagesObject = useSelector((state) => state.member);
  const memberImages = Object.values(memberImagesObject);
  console.log(memberImages);

  memberImages.sort((a, b) => {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(loadMemberImagesThunk(memberId));
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
        {memberImages.map((image) => {
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

export default UserProfile;
