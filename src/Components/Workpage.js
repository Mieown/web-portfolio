import React, { useState } from 'react';
import './Workpage.css';
import Cardcontainer from './Cardcontainer.js';


function Workpage() {

  const [isOpened, setIsOpened] = useState(false);

    return (
      <div className="Workpage">
        <div className="Text-container-work">
          <h1 className="Work-header">My Work</h1>
          <p className="Work-textinfo">Här är en samling av projekt skapade av mig eller tillsammans med klasskamrater och arbetskamrater. Klicka dig in till dem för att läsa mer om dem.</p>
        </div>
        <div className="Cards-container">
          <Cardcontainer 
            isOpened={isOpened}
            setIsOpened={setIsOpened}
          />
        </div>
      </div>
    );
  }
  
  export default Workpage;




  // A small gallery of recent projects chosen by me. I've done them by myself or together with some classmates. Click into them to see more.</p>