import React from 'react';
import './Card.css';

function Card(item) {

  function handleClick() {
    // setIsOpened()
  }
  
  return (
    <div className="card-container">
      <div className="card">
        <img className="cover-img" src={item.img} alt="project image" />
            {/* <div className="top">
                <h2 className="name">{item.name}</h2>
                <button 
                className="button-project" 
                onClick={handleClick}>View Project</button>
            </div> */}
        </div>

        {/* {props.opened ? (<div className={props.classtext}><div className="popup-div"><p className="popup-text">{props.pinfo}</p> </div></div>) : null} */}

        <div className={item.classtext} style={{visibility: "hidden"}}>
            <div className="popup-div">
              <p className="popup-text">{item.pinfo}</p>
           </div>
        </div>
    </div>
  );
}

export default Card;