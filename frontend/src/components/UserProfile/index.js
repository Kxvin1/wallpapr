import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { loadMemberImagesThunk } from "../../store/member";
import ImageInfo from "../ImageInfo";

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
    <div className="image-user-profile-containers">
      {memberImages?.map((image) => {
        if (image.userId === sessionUser.id) {
          return <ImageInfo key={image.id} image={image} />;
        }

        return <ImageInfo key={image.id} image={image} />;
      })}
    </div>
  );
}

export default UserProfile;
