import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CommentPost from "./CommentPost";

function CommentPostModal({ memberId }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="write-comment-button-color-this"
        onClick={() => setShowModal(true)}
      >
        Write Comment
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentPost showModal={setShowModal} memberId={memberId} />
        </Modal>
      )}
    </div>
  );
}

export default CommentPostModal;
