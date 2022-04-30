import React from "react";

import "./Splash.css";

function Splash() {
  return (
    <div className="parent-div-splash">
      <div className="body-text">
        <h1>Find your next wallpaper.</h1>

        <h3>
          From epic graphical works of art to inspiring moments in nature —
          submit your best desktop backgrounds.
        </h3>

        <h4>
          Join our community, home to tens of billions of high quality images.{" "}
        </h4>
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
