import * as React from 'react';
import './PopUp.css';

// hej

const PopUp = ({ pinfo }) => {
  return (
    <div>
      <div className="popup-div">
        <p style={{ color: 'black' }} className="popup-text">
          {pinfo}
        </p>
      </div>
    </div>
  );
};

export default PopUp;
