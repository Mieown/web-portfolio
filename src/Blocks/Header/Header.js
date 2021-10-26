import React, { useState, useEffect } from 'react';
import './Header.css';
import Waveanimation from '../../Components/WaveAnimation/Waveanimation';
import startarrow from '../../images/arrowstartbrown.svg';

function Header() {

  const [isName, setIsName] = useState('scroll');

  const changeText = () => {
    setIsName('down');
  };

  const changeBackText = () => {
    setIsName('scroll');
  };

  return (
    <div className="Header">
      <div className="Main-frame frame-top"></div>
      <div className="Main-frame frame-right"></div>
      <div className="Main-frame frame-left"></div>
      <div className="Main-frame frame-bottom"></div>
      <div className="Text-container-start">
        <h1 className="Header-header">Hi! I'm Malin</h1>
        <h2 className="Header-textinfo">Frontend developer & Designer</h2>
        <div className="Wave-animation-container">
          <Waveanimation />
        </div>
        <div className="P-container">
          <h2 className="Header-p-text" onMouseEnter={changeText} onMouseLeave={changeBackText}>{isName}</h2>
        </div>
        <img className="startarrow" src={startarrow}/>
      </div>
    </div>
  );
}

export default Header;
