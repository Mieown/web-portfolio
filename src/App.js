import * as React from 'react';
import './App.css';
import Menu from './Blocks/Menu/Menu';
import Header from './Blocks/Header/Header';
import Work from './Blocks/Work/Work';
import About from './Blocks/About/About';
import Contact from './Blocks/Contact/Contact';
import PopUp from './Blocks/PopUp/PopUp';
import info from './info';

function App() {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      <main className="main">
        <Header />
        <Work isOpened={isOpened} setIsOpened={setIsOpened} />
        <About />
        <Contact />
        {isOpened && <PopUp pinfo={info[isOpened].pinfo} />}
      </main>
    </div>
  );
}

export default App;
