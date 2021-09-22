import React from 'react';
import './Topheader.css';


function Topheader() {
  return (
    <div className="Topheader">
      <nav className="Header-links">
	    <ul>
		    <li><a href="#">Work</a></li>
		    <li><a href="#">About</a></li>
		    <li><a href="#">Connect</a></li>
	    </ul>  	
        </nav> 
    </div>
  );
}

export default Topheader;