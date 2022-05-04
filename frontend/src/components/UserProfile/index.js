import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { loadMemberImagesThunk } from "../../store/images";
import { getUsers } from "../../store/user";
import ImageInfo from "../ImageInfo";
import OwnerOfImageInfo from "../OwnerOfImageInfo";

import "./UserProfile.css";

function UserProfile() {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { memberId } = useParams();

  const memberImagesObject = useSelector((state) => state.image);
  const memberImages = Object.values(memberImagesObject);
  // console.log(memberImages);

  // const usersObject = useSelector((state) => state.user);
  // const users = Object.values(usersObject);
  // console.log("users", users);

  // const validUser = users.find((user) => {
  //   return user.id === +memberId;
  // });
  // // console.log("validUser", validUser);

  // if (!validUser) {
  //   history.push("/member-id-invalid");
  // }

  const memberImagesFiltered = memberImages.filter(
    (image) => image.userId === +memberId
  );
  // console.log(memberImagesFiltered);

  memberImagesFiltered.sort((a, b) => {
    return b.id - a.id;
  });

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(loadMemberImagesThunk(memberId));
  }, [dispatch, memberId]);

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
