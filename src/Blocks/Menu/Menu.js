import React from 'react';
import './Menu.css';
import mlogo from '../../images/m-logo.svg';


function Menu() {
  return (
    <div className="Menu">
      <nav className="Menu-links">
        <ul>
          <li>
            <a className="linkMenu" href="#">About</a>
          </li>
          <li>
            <a className="linkMenu" href="#">Work</a>
          </li>
          <li>
            <a className="linkMenu" href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="logo-menu-container">
      <img className="m-logo" src={mlogo}/>
      </div>

      <nav className="Menu-links-bottom">
        <ul>
          <li>
            <a className="linkMenuBottom" href="#">Github</a>
          </li>
          <li>
            <a className="linkMenuBottom" href="#">Linkedin</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
