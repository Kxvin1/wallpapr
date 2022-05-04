import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  }, [history]);

  return (
    <div className="page-not-found-container">
      <div className="page-not-found">
        <h2 id="nothing-to-see">404 Page Not Found</h2>
        <p>Redirecting you back to the homepage in 5 seconds...</p>
        <p>
          Or click{" "}
          <a href="/">
            <span className="redirect-link">HERE</span>
          </a>{" "}
          to go back to the Home page.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
