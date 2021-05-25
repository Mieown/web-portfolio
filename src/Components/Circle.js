import React from 'react';
import circle from '../images/circle.png';
import './Circle.css';

function Circle() {
    return (
      <div>
        <img className="circleSize" src={circle} alt="circle"/>
      </div>
    );
  }

  export default Circle;
