import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import ImageUpload from "./ImageUpload.js";

import "./ImageUploadModal.css";

function ImageUploadModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="upload-button" onClick={() => setShowModal(true)}>
        <i className="fas fa-upload"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageUpload showModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default ImageUploadModal;
