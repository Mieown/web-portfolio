import React from 'react';
import './App.css';
import Circle from './Circle.js';
import Card from "./Cards.js";
import info from "../info";

function App() {
  return (
    <div className="App">
      <header className="App-header">       
      <h1>Welcome<br />Frontend Developer</h1>
      <Circle />
      </header>
      <main className="main">
        <h2 className="h2">More about me</h2>
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

      </main>
    </div>
  );
}

export default App;