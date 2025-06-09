import React from "react";
import "./Menu.css";
import mlogo from "../../images/faviconblack.png";

function Menu() {
  return (
    <div className="Menu">
      <nav className="Menu-links">
        <ul>
          <li className="linkAbout">
            <a className="linkMenu" href="#contactLink">
              About
            </a>
          </li>
          <li className="linkWork">
            <a className="linkMenu" href="#workLink">
              Work
            </a>
          </li>
          <li className="linkContact">
            <a className="linkMenu" href="#contactLink">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="name-menu-container">
        <a className="mLogoLink" href="#">
          <img className="mLogo" src={mlogo} />
        </a>
      </div>

      <nav className="Menu-links-bottom">
        <ul>
          <li>
            <a
              className="linkMenuBottom"
              href="https://github.com/Mieown"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="linkMenuBottom"
              href="https://linkedin.com/in/malin-olofsson-611619a6"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
