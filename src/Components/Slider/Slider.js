import React, { useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Slider.css';


const Slider = ({ img1, img2, img3, img4 }) => {

  const [isWidth, setIsWidth] = useState(43 + 'vw');
  const [isHeight, setIsHeight] = useState(42.9 + 'vh');

  const images = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
  ];

  useEffect(() => {
   
    console.log(window.innerWidth);

    if (window.innerWidth < 600) {
      setIsWidth(68 + 'vw');
      setIsHeight(21 + 'vh'); 
    }   else if (window.innerWidth < 800) {
      setIsWidth(69 + 'vw');
      setIsHeight(29 + 'vh'); 
    } else {
      setIsWidth(43 + 'vw');
      setIsHeight(42.9 + 'vh'); 
  }

});

//   return () => clearInterval(intervalId);
// }, [isActive])

  return (
    <div>
      <SimpleImageSlider
        width={isWidth}
        height={isHeight}
        images={images}
        navSize={20}
        showBullets={true}
        useGPURender={true}
        navStyle={2}
        slideDuration={0.1}
        showNavs={true}
      />
    </div>
  );
}

export default Slider;
