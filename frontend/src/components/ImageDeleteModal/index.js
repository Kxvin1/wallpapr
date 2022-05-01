import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ImageDeleteModal from "./ImageDeleteModal";

function ImageDeleterModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="upload-button" onClick={() => setShowModal(true)}>
        <i className="fas fa-trash"></i>
        {/* <img src="./frontend/images/x.png" alt="x" /> */}
        {/* <i className="fas fa-upload"></i> */}
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageDeleteModal showModal={setShowModal} image={image} />
        </Modal>
      )}
    </>
  );
}

export default ImageDeleterModal;
