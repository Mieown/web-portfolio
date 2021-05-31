import React from 'react';
import './App.css';
import Circle from './Circle.js';
import Card from "./Cards.js";
import info from "../info";

function App() {
  return (
    <div className="App">
      <header className="App-header">       
      <h1>Hi! I'm Malin,<br />Web Developer & Designer</h1>
      <Circle />
      </header>
      <main className="main">
        <div className="button-container">
          <button>Work</button>
          <button>About me</button>
          <button>Contact</button>
        </div>
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
      </main>
    </div>
  );
}

export default App;