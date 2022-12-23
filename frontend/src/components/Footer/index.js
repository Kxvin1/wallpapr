import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";

function Footer() {
  const user = useSelector((state) => state.session.user);

  // upd2
  let decideView;

  if (!user) {
    decideView = (
      <footer className="footer">
        <ul className="footer-ul">
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
              href="https://www.linkedin.com/in/kevin-bartolome/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>Sequelize</li>
          <li>PostgreSQL</li>
        </ul>
      </footer>
    );
  } else {
    decideView = <></>;
  }

  return <div>{decideView}</div>;
}

export default Footer;
