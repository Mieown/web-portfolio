import React, { useState, useEffect } from 'react'
import './App.css';
import Menu from './Blocks/Menu/Menu';
import Header from './Blocks/Header/Header';
import Work from './Blocks/Work/Work';
import Contact from './Blocks/Contact/Contact';
import Footer from './Blocks/Footer/Footer';
import PopUp from './Blocks/PopUp/PopUp';
import Imagebanner from './Components/Imagebanner/Imagebanner';
import Loader from './Blocks/Loader/Loader';
import info from './info';
import {Helmet} from "react-helmet";
import { gsap, Power3 } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000)
}, [])

let t1 = new gsap.timeline({ delay: 0.4 });
useEffect(() => {

  if (isOpened == false){

  t1.staggerFrom(
    '.header-header',
    1,
    { y: 30, ease: Power3.easeOut, opacity: 0 },
    0.15,
    'Start'
  )
    .from(
      '.p-container',
      1,
      { y: 30, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    );
  
  let t2 = new gsap.timeline({ 
  scrollTrigger: {
  trigger: '.work-header',
  // markers: true,
  start: 'top 90%',
  end: 'bottom 60%',
  }
});

    t2.from(".work-header", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from(".work-textinfo", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from('.marquee--inner', {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from('.header-about, .contact-header', {
        duration: 1,
        y: '100',
        opacity: 0,
        ease: "power3.out"
      })
    .from('.text-about, .contact-textinfo', {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from(".contact-form", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from(".btn-submit", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    });
  }  else{
      ScrollTrigger.refresh();
  }

});

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Malin Portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Malins Frontend Projects" />
      </Helmet>

      { 
        loading ?
        <Loader />
        :
        <header className="testapp">
        <Menu />
        <Header />
        <Work isOpened={isOpened} setIsOpened={setIsOpened} />
        <Imagebanner />
        <Contact />
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
          </header>
          }
    </div>
  );
}

export default App;
