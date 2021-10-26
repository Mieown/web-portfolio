import React from 'react';
import './Card.css';

// import { gsap, Power3 } from 'gsap';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

function Card({ img, name, classtext, isOpened, setIsOpened, index }) {

  const onViewProject = (card) => {
    setIsOpened(card);
    console.log(isOpened);
    // ScrollTrigger.refresh(true);
  };

  return (
    <div className={classtext}>
      <div className="card">
        <img className="cover-img" src={img} alt="project" />
        <div className="top">
          <h2 className="name">{name}</h2>
          <button
            className="button-project"
            onClick={() => onViewProject(index)}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
