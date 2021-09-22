import React from 'react';
import Card from "./Card.js";
import info from "../info";

function Cardcontainer(isOpened, setIsOpened) {
  return (
    <div>
      {info.map((item, index) => (
        <Card
        key={index}
        name={item.name}
        img={item.imgSRC}
        pinfo={item.pinfo}
        classtext={item.classtext}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      ))}
    </div>
  );
}

export default Cardcontainer;