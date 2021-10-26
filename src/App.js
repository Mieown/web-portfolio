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

let t1 = new gsap.timeline({ delay: 0.3 });
useEffect(() => {

  if (isOpened == false){

  t1.staggerFrom(
    '.Header-header',
    1,
    { y: 30, ease: Power3.easeOut, opacity: 0 },
    0.15,
    'Start'
  )
    .from(
      '.Header-textinfo',
      1,
      { y: 30, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.35
    )
    .from(
      '.Wave-animation-container',
      1,
      { y: 30, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      0.80
    )
    .from(
      '.Header-p-text',
      1,
      { y: 30, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      1.3
    )
    .from(
      '.startarrow',
      1,
      { y: 30, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      2
    );
  
  let t2 = new gsap.timeline({ 
  scrollTrigger: {
  trigger: '.Work-header',
  // markers: true,
  start: 'top 90%',
  end: 'bottom 60%',
  }
});

    t2.from(".Work-header", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from(".Work-textinfo", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from('.header-about, .Contact-header', {
        duration: 1,
        y: '100',
        opacity: 0,
        ease: "power3.out"
      })
    .from('.text-about, .Contact-textinfo', {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from(".Contact-form", {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "power3.out"
    })
    .from(".Btn-submit", {
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
      .from('.linkFooter', {
        duration: 1,
        y: '100',
        opacity: 0,
        ease: "power3.out"
      });
  }  else{
      ScrollTrigger.refresh();
  }
  

// let t3 = new gsap.timeline({ 
//   scrollTrigger: {
//     trigger: '.header-about',
//     markers: true,
//     start: 'top 90%',
//     end: 'bottom 60%',
//     toggleActions: 'restart complete reverse reset'
//   }
// });

// t3.from('.header-about, .Contact-header', {
//   duration: 1,
//   y: '100',
//   opacity: 0,
//   ease: "power3.out"
// })
//   .from('.text-about, .Contact-textinfo', {
//     duration: 1,
//     y: '100',
//     opacity: 0,
//     ease: "power3.out"
//   })
//   .from(".Contact-form", {
//     duration: 1,
//     y: '100',
//     opacity: 0,
//     ease: "power3.out"
//   })
//   .from(".Btn-submit", {
//     duration: 1,
//     y: '100',
//     opacity: 0,
//     ease: "power3.out"
//   });

// let t4 = new gsap.timeline({ 
//   scrollTrigger: {
//     trigger: '.marquee--inner',
//     markers: true,
//     start: 'top 90%',
//     end: 'bottom 60%',
//   }
// });

// t4.from('.marquee--inner', {
//   duration: 1,
//   y: '100',
//   opacity: 0,
//   ease: "power3.out"
// })
//   .from('.linkFooter', {
//     duration: 1,
//     y: '100',
//     opacity: 0,
//     ease: "power3.out"
//   });
// }   else{
//   ScrollTrigger.update();
// }

});


  return (
    <div className="App">
      { 
        loading ?
        <Loader />
        :
        <header className="testapp">
        <Menu />
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
          </header>
          }
    </div>
  );
}

export default App;
