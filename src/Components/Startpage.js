import React from 'react';
import './Startpage.css';
import Waveanimation from './Waveanimation.js';


function Startpage() {

  return (
  <div className="Startpage">
    <div className="Main-frame frame-top"></div>
    <div className="Main-frame frame-right"></div>
    <div className="Main-frame frame-left"></div>
    <div className="Main-frame frame-bottom"></div>
      <div className="Text-container-start">       
        <h1 className="Startpage-header">Hi! I'm Malin</h1>
        <h2 className="Startpage-textinfo">A Frontend developer & Designer</h2>
        <div className="Wave-animation-container">
        <Waveanimation />
        </div>
        <div className="P-container">
          <p className="Startpage-p-text">Kul att du hittade till mig! Kolla in mina arbeten</p>
        </div>
    </div>
  </div>
  );
}

export default Startpage;