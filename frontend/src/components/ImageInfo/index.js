import { useState } from "react";
import { Modal } from "../../context/Modal";
import ImageZoom from "../ImageZoom";

import "./ImageInfo.css";

function ImageInfo({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="image-info-container">
      <img
        onClick={() => setShowModal(true)}
        className="image-info-img"
        id={image.id}
        key={image.id}
        src={image.imageURL}
        alt="img"
      ></img>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageZoom image={image} key={`${image.id}-zoom`} />
        </Modal>
      )}
    </div>
  );
}

export default ImageInfo;
