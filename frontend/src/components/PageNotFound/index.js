import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 10000);
  }, [history]);

  return (
    <div className="page-not-found-container">
      <div className="page-not-found">
        <h2 className="pnf-404">404</h2>
        <p className="redirect-paragraph">Page Not Found</p>
        <p className="redirect-paragraph">
          Redirecting you back to the homepage in 10 seconds...
        </p>
        <p className="redirect-paragraph">
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
