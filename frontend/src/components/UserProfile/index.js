import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { loadMemberImagesThunk } from "../../store/images";
import ImageInfo from "../ImageInfo";
import OwnerOfImageInfo from "../OwnerOfImageInfo";

import "./UserProfile.css";

function UserProfile() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { memberId } = useParams();

  const memberImagesObject = useSelector((state) => state.image);
  const memberImages = Object.values(memberImagesObject);
  // console.log(memberImages);

  const memberImagesFiltered = memberImages.filter(
    // eslint-disable-next-line
    (image) => image.userId == memberId
  );
  // console.log(memberImagesFiltered);

  memberImagesFiltered.sort((a, b) => {
    return b.id - a.id;
  });

  useEffect(() => {
    dispatch(loadMemberImagesThunk(memberId));
  }, [dispatch]);

  return (
    <div>
      <div className="image-user-profile-containers">
        {memberImagesFiltered.map((image) => {
          let tagString;
          if (image.tags) {
            tagString = image.tags;
            tagString = tagString.map((tag) => `#${tag}`);
            tagString = tagString.join(", ");
          }
          if (image.userId === sessionUser.id) {
            return (
              <OwnerOfImageInfo
                key={image.id}
                image={image}
                tagString={tagString}
              />
            );
          }

          return (
            <ImageInfo key={image.id} image={image} tagString={tagString} />
          );
        })}
      </div>
    </div>
  );
}

export default UserProfile;
