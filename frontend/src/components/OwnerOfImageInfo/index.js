import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Modal } from "../../context/Modal";
import ImageZoom from "../ImageZoom";
import ImageDeleteModal from "../ImageDeleteModal";

import "./OwnerOfImageInfo.css";

function OwnerOfImageInfo({ image }) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const sessionUser = useSelector((state) => state.session.user);

  let showDelete;
  if (location.pathname === `/members/${sessionUser.id}`) {
    showDelete = (
      <div className="edit-and-delete-button-container">
        {/* <h1>edit modal component goes here</h1> */}
        <ImageDeleteModal image={image} id={image.id} />
      </div>
    );
  } else {
    <></>;
  }
  return (
    <div
      className="owner-of-image-container profile-image image-info-container"
      key={image.id}
    >
      <img
        onClick={() => setShowModal(true)}
        className="image-info-img profile-owner-of-image"
        id={image.id}
        key={image.id}
        src={image.imageURL}
        alt="img"
      ></img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageZoom image={image} key={`${image.id}-iz`} />
        </Modal>
      )}
      {showDelete}
    </div>
  );
}

export default OwnerOfImageInfo;
