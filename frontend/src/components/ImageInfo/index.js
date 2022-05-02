import { useState } from "react";
import { Modal } from "../../context/Modal";
import ImageZoom from "../ImageZoom";

import "./ImageInfo.css";

function ImageInfo({ image, tagString }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="image-info-container">
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
          <ImageZoom
            image={image}
            tagString={tagString}
            key={`${image.id}-iz`}
          />
        </Modal>
      )}
    </div>
  );
}

export default ImageInfo;
