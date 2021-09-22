import React from 'react';
import './App.css';
import Topheader from './Topheader.js';
import Startpage from './Startpage.js';
import Workpage from './Workpage.js';
import Aboutpage from './Aboutpage.js';
import ContactUs from './Contactpage.js';

function App() {
  return (
    <div className="App">
    <header>
      <Topheader />
    </header>
    <main className="main">
      <Startpage />
      <Workpage />
      <Aboutpage />
      <ContactUs />
      </main>
    </div>
  );
}

export default App;