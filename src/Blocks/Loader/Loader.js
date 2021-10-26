import React, { useState } from 'react';
import './Loader.css';
import WaveLoading from '../../Components/WaveLoading/WaveLoading';

function Loader() {

  return (
    <div className="WaveLoader">
        <div className="waveLoaderPath">
          <WaveLoading />
        </div>
    </div>
  );
}

export default Loader;
