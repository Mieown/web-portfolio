import React from 'react';
import './About.css';
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


function About() {
  return (
    <div className="About">
      <div className="about-container">
      <div className="Text-container-about">
        <h1 className="About-header">About me</h1>
        <p className="About-textinfo">
        
        I’m a frontend developer and designer from Jämtland, in northern Sweden currently based in Stockholm. I'm in my second year of the Frontend program on Hyper Island. I have previously worked with graphic design and packaging development.
        <br />
        <br />
        I like problem solving and have a keen eye for details and beautiful designs. I am determination to always try to better myself with every project I work on. The main areas of my knowledge are HTML (5), CSS (3), JavaScript (native)
        and React. I regularly use version control system (GIT) to maintain my code.
        Based on the design part, the main areas of my knowledge are Illustrator, Indesign, Photoshop, Premiere Pro and Figma.
        <br />
        <br />
        When I'm not coding, you can find me out in the nature, either on a mountain, in the forest or by the sea. Always looking for new places to explore with my friends and family.

        </p>
      </div>
      {/* <div className="logos-container-about">
      <img className="logos-about" src={javascript}/>
      <img className="logos-about" src={css}/>
      <img className="logos-about" src={html}/>
      <img className="logos-about" src={react}/>
      <img className="logos-about" src={figma}/>
      <img className="logos-about" src={github}/>
      <img className="logos-about" src={npm}/>
      <img className="logos-about" src={illustrator}/>
      <img className="logos-about" src={indesign}/>
      <img className="logos-about" src={photoshop}/>
      <img className="logos-about" src={premier}/>
      <img className="logos-about" src={miro}/>
    </div> */}
    </div>
  </div>
  );
}

export default About;
