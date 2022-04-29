import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-ul">
        <li>Javascript</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>React</li>
        <li>Redux</li>
        <li>Git</li>
        <li>JSON API</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
      <ul className="below-footer-ul">
        <ul className="inner-ul">
          <li className="footer-text">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/Kxvin1/wallpapr"
            >
              Wallpapr | 2022
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/Kxvin1"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/kevin-b-643664221/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
