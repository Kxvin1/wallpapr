import React, { useState } from "react";

import { Modal } from "../../context/Modal";
import ImageEditModal from "./ImageEditModal";

function EditImageModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-post-icon" onClick={() => setShowModal(true)}>
        <i className="fas fa-edit"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ImageEditModal showModal={setShowModal} image={image} />
        </Modal>
      )}
    </>
  );
}

export default EditImageModal;
