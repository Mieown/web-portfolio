import React from 'react';
import './App.css';
import Circle from './Circle.js';
import Cardcontainer from './Cardcontainer.js';


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
      <Cardcontainer />
      </main>
    </div>
  );
}

export default App;