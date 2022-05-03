import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteComment from "./DeleteComment";

import "./DeleteCommentModal.css";

function DeleteCommentModal({ comment }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete-post-trash"
        id="delete-comment-trash"
        onClick={() => setShowModal(true)}
      >
        <i className="far fa-trash-alt"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteComment showModal={setShowModal} comment={comment} />
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentModal;
