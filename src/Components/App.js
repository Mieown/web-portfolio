import React from 'react';
import './App.css';
import Circle from './Circle.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
      <h1>Welcome<br />Frontend Developer</h1>
      <Circle />
      </header>
      <main className="main">
        <h2 className="h2">More about me</h2>
      </main>
    </div>
  );
}

export default App;