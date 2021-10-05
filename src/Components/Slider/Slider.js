import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './Slider.css';


const Slider = ({ img1, img2, img3, img4 }) => {

  // const [isWidth, setIsWidth] = useState(10 + 'em');
  // const [isHeight, setIsHeight] = useState(5 + 'em');

  // const setWidthHeight = () => {
  //   setIsWidth(550);   
  //   setIsHeight(310);
  // };

  // window.addEventListener("DOMContentLoaded", e=> {
  //   setWidthHeight()
  // });

    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
      ];

  return (
    <div>
      <SimpleImageSlider
        // width={14 + 'em'}
        // height={19.375 + 'em'}
        width={43 + 'vw'}
        height={42.9 + 'vh'}
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
