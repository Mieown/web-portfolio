import React, { useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Slider.css';


const Slider = ({ img1, img2, img3, img4 }) => {

  const [isWidth, setIsWidth] = useState(41 + 'vw');
  const [isHeight, setIsHeight] = useState(41 + 'vh');

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
    }   else if (window.innerWidth > 3000) {
      setIsWidth(41 + 'vw');
      setIsHeight(32 + 'vh'); 
    }   else {
      setIsWidth(41 + 'vw');
      setIsHeight(41 + 'vh'); 
  }

});


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
