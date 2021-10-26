import React from 'react';
import './Menu.css';
import mlogo from '../../images/m-logo.svg';


function Menu() {
  return (
    <div className="Menu">
      <nav className="Menu-links">
        <ul>
          <li>
            <a className="linkMenu" href="#contactLink">About</a>
          </li>
          <li>
            <a className="linkMenu" href="#workLink">Work</a>
          </li>
          <li>
            <a className="linkMenu" href="#contactLink">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="logo-menu-container">
      <a className="linkMenuLogo" href="#"><img className="m-logo" src={mlogo}/></a>
      </div>

      <nav className="Menu-links-bottom">
        <ul>
          <li>
            <a className="linkMenuBottom" href="https://github.com/Mieown" target='_blank'>Github</a>
          </li>
          <li>
            <a className="linkMenuBottom" href="https://linkedin.com/in/malin-olofsson-611619a6" target='_blank'>Linkedin</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
