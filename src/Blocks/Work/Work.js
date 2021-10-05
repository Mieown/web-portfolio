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
          Here is a collection of projects created by me or together with classmates and co-workers. Check them out to find out more about them.
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
            img1={item.img1}
            img2={item.img2}
            img3={item.img3}
            img4={item.img4}
            linktext={item.linktext}
            linkclasstext={item.linkclasstext} 
            link={item.link} 
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
