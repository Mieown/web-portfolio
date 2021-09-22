import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="Menu">
      <nav className="Menu-links">
        <ul>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Connect</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
