import * as React from 'react';
import './App.css';
import Menu from './Blocks/Menu/Menu';
import Header from './Blocks/Header/Header';
import Work from './Blocks/Work/Work';
import About from './Blocks/About/About';
import Contact from './Blocks/Contact/Contact';
import Footer from './Blocks/Footer/Footer';
import PopUp from './Blocks/PopUp/PopUp';
import Imagebanner from './Components/Imagebanner/Imagebanner';
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
        <Contact />
        <Imagebanner />
        <Footer />
        {isOpened && 
        <PopUp 
        pinfo={info[isOpened].pinfo} 
        isOpened={isOpened} 
        setIsOpened={setIsOpened} 
        img={info[isOpened].imgSRC} 
        name={info[isOpened].name}
        img1={info[isOpened].img1}
        img2={info[isOpened].img2}
        img3={info[isOpened].img3}
        img4={info[isOpened].img4}
        linktext={info[isOpened].linktext}
        linkclasstext={info[isOpened].linkclasstext}
        link={info[isOpened].link}
        />}
      </main>
    </div>
  );
}

export default App;
