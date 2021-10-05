import React from 'react';
import './Imagebanner.css';
import css from '../../images/csslogo.svg';
import figma from '../../images/figmalogo.svg';
import github from '../../images/githublogo.svg';
import html from '../../images/htmllogo.svg';
import illustrator from '../../images/illustratorlogo.svg';
import indesign from '../../images/indesignlogo.svg';
import javascript from '../../images/javascriptlogo.svg';
import photoshop from '../../images/photoshoplogo.svg';
import premier from '../../images/premierlogo.svg';
import miro from '../../images/mirologo.svg';
import react from '../../images/reactlogo.svg';
import npm from '../../images/npmlogo.svg';


function Imagebanner() {
  return (
    <div className="marquee">
    <div class="marquee--inner">
    <span>
    <img className="orb" src={javascript}/>
      <img className="orb" src={css}/>
      <img className="orb" src={html}/>
      <img className="orb" src={react}/>
      <img className="orb" src={figma}/>
      <img className="orb" src={github}/>
      <img className="orb" src={npm}/>
      <img className="orb" src={illustrator}/>
      <img className="orb" src={indesign}/>
      <img className="orb" src={photoshop}/>
      <img className="orb" src={premier}/>
      <img className="orb" src={miro}/>
    </span>
    <span>
    <img className="orb" src={javascript}/>
      <img className="orb" src={css}/>
      <img className="orb" src={html}/>
      <img className="orb" src={react}/>
      <img className="orb" src={figma}/>
      <img className="orb" src={github}/>
      <img className="orb" src={npm}/>
      <img className="orb" src={illustrator}/>
      <img className="orb" src={indesign}/>
      <img className="orb" src={photoshop}/>
      <img className="orb" src={premier}/>
      <img className="orb" src={miro}/>
    </span>

    </div>
      {/* <div className="imagebanner-container">
      <img className="orb" src={javascript}/>
      <img className="orb" src={css}/>
      <img className="orb" src={html}/>
      <img className="orb" src={react}/>
      <img className="orb" src={figma}/>
      <img className="orb" src={github}/>
      <img className="orb" src={npm}/>
      <img className="orb" src={illustrator}/>
      <img className="orb" src={indesign}/>
      <img className="orb" src={photoshop}/>
      <img className="orb" src={premier}/>
      <img className="orb" src={miro}/>
    </div> */}
  </div>
  );
}

export default Imagebanner;
