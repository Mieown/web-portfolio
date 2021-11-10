import React, { useState } from 'react';
import './Header.css';
import imageme from '../../images/pictureofme.png';

function Header() {

  const [meImage, setMeImage] = useState(false)
  

  return (
    <div className="header">
      <div className="main-frame frame-top"></div>
      <div className="main-frame frame-right"></div>
      <div className="main-frame frame-left"></div>
      <div className="main-frame frame-bottom"></div>
      <div className="box-left-top"></div>
      <div className="box-right-top"></div>
      <div className="box-left-bottom"></div>
      <div className="box-right-bottom"></div>
      <div className="text-container-start">
        <h1 className="header-header">Hi there! Welcome.<br />I'm <div id="picture-me" onMouseEnter={() => setMeImage(true)} onMouseLeave={() => setMeImage(false)}>Malin</div> <img className="imageme" style= {{ visibility: meImage ? "" : 'hidden' }} src={imageme}/> and I'm a, <div class="scrollHeader">
            <span>
              Frontend Developer<br/>
              and Designer
            </span>
          </div>
        </h1>
      </div>
        <div className="p-container">
          <div className="hoverScroll">
            <span>
            <a className="linkScroll" href="#workLink">
              Scroll<br/>
              Down<br/>
              <div id="heart-logo">💜</div>
              </a>
            </span>
          </div>
        </div>
    </div>
  );
}

export default Header;
