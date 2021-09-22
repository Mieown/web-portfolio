import React from 'react';
import './Header.css';
import Waveanimation from '../../Components/WaveAnimation/Waveanimation';

function Header() {
  return (
    <div className="Header">
      <div className="Main-frame frame-top"></div>
      <div className="Main-frame frame-right"></div>
      <div className="Main-frame frame-left"></div>
      <div className="Main-frame frame-bottom"></div>
      <div className="Text-container-start">
        <h1 className="Header-header">Hi! I'm Malin</h1>
        <h2 className="Header-textinfo">A Frontend developer & Designer</h2>
        <div className="Wave-animation-container">
          <Waveanimation />
        </div>
        <div className="P-container">
          <p className="Header-p-text">
            Kul att du hittade till mig! Kolla in mina arbeten
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
