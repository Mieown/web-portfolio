import React from 'react';
import Card from "./Cards.js";
import info from "../info";

function Cardcontainer() {
  return (
    <div>
      <Card
        name={info[0].name}
        img={info[0].imgSRC}
      />

      <Card
        name={info[1].name}
        img={info[1].imgSRC}
      />

      <Card
        name={info[2].name}
        img={info[2].imgSRC}
      />

      <Card
        name={info[3].name}
        img={info[3].imgSRC}
      />

      <Card
        name={info[4].name}
        img={info[4].imgSRC}
      />

      <Card
        name={info[5].name}
        img={info[5].imgSRC}
      />
    </div>
  );
}

export default Cardcontainer;