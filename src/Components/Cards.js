import React from 'react';
import './Cards.css';

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="cover-img" src={props.img} alt="project image" />
            <div className="top">
                <h2 className="name">{props.name}</h2>
            </div>
        </div>
    </div>
  );
}

export default Card;