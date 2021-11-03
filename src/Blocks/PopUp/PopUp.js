import * as React from 'react';
import './PopUp.css';
import wavyarrow from '../../images/arrowpopupbrown.svg';
import Slider from '../../Components/Slider/Slider';
import info from '../../info';

const PopUp = ({ pinfo, name, linktext, linkclasstext, link, isOpened, setIsOpened }) => {

  const exitPopup = () => {
    setIsOpened(false);
  };

  return (
    <div>
      <div className="popup-div">
        <div className="popup-bg">
          <div className="slider-container">
            <Slider 
            img={info[isOpened].imgSRC}
            img1={info[isOpened].img1}
            img2={info[isOpened].img2}
            img3={info[isOpened].img3}
            img4={info[isOpened].img4}
            />
          </div>
        <div className="popup-text-container">
            <div className="left-popup-text">
              <h2 className="popup-h2">{name}</h2>
              <p className="popup-p">{pinfo}</p>
              <img className="wavyarrow" src={wavyarrow} onClick={exitPopup}/>
              <a
                className={linkclasstext}
                href={link}
                target='_blank'
                rel="noopener"
                >{linktext}
              </a>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
