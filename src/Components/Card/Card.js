import React from 'react';
import './Card.css';

function Card({ img, name, classtext, isOpened, setIsOpened, index }) {

  const onViewProject = (card) => {
    setIsOpened(card);
    console.log(isOpened);
  };

  return (
    <div className={classtext}>
      <div className="card">
        <img className="cover-img" src={img} alt="project" />
        <div className="top" onClick={() => onViewProject(index)}>
          <h2 className="name">{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
