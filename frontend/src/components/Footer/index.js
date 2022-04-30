import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-ul">
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>React</li>
        <li>Redux</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>PostgreSQL</li>
        <li className="footer-text">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Kxvin1/wallpapr"
            className="white"
          >
            GitHub Repository | Wallpapr 2022
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
      {/* <ul className="below-footer-ul">
        <ul className="inner-ul"></ul>
      </ul> */}
    </footer>
  );
}

export default Footer;
