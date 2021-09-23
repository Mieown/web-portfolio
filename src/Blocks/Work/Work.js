import React, { useState } from 'react';
import './Work.css';
import info from '../../info';
import Card from '../../Components/Card/Card';

function Work({ isOpened, setIsOpened }) {
  return (
    <div className="Work">
      <div className="Text-container-work">
        <h1 className="Work-header">My Work</h1>
        <p className="Work-textinfo">
          Här är en samling av projekt skapade av mig eller tillsammans med
          klasskamrater och arbetskamrater. Klicka dig in till dem för att läsa
          mer om dem.
        </p>
      </div>
      <div className="Cards-container">
        {info.map((item, index) => (
          <Card
            index={index}
            key={index}
            name={item.name}
            img={item.imgSRC}
            pinfo={item.pinfo}
            classtext={item.classtext}
            isOpened={isOpened}
            setIsOpened={setIsOpened}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;

// A small gallery of recent projects chosen by me. I've done them by myself or together with some classmates. Click into them to see more.</p>
