import React from 'react';
import './Card.css';

function Card({ img, name, isOpened, setIsOpened, index }) {
  // function handleClick() {
  //   setIsOpened();
  // }

  // använd arrow functions istället! och var specifik i namngivningen

  const onViewProject = (card) => {
    setIsOpened(card);
    console.log(isOpened);
  };

  return (
    <div className="card-container">
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
