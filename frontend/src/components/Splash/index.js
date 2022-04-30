import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "../SignupFormModal/SignupForm";

import "./Splash.css";

function Splash() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="parent-div-splash">
      <div className="body-text">
        <h1>Find your next desktop wallpaper.</h1>

        <h3>
          From epic graphical works of art to inspiring moments in nature — join
          our community, home to high quality desktop wallpapers.
        </h3>
        {/* <h4>Join our community, home to high quality desktop wallpapers. </h4> */}
        <button
          className="start-free-button"
          onClick={() => setShowModal(true)}
        >
          Start for free
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
          </Modal>
        )}
      </div>

      <ul className="cb-slideshow">
        <li>
          <span>First Image</span>
        </li>
        <li>
          <span>Second Image</span>
        </li>
        <li>
          <span>Third Image</span>
        </li>
        <li>
          <span>Fourth Image</span>
        </li>
      </ul>
    </div>
  );
}

export default Splash;
