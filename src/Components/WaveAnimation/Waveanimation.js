import React from 'react';
import './Waveanimation.css';


function Waveanimation() {

let xs = []
for (var i = 0; i < 170; i++) {
  xs.push(i)
}

let t = 0

function animate() {

  let points = xs.map(x => {

    let y = 200 + 4.5 * Math.sin((x + t) /3)
    
    return [x, y]
  })

  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  document.querySelector("path").setAttribute("d", path)

  t += 0.4

  requestAnimationFrame(animate)
}

window.addEventListener("DOMContentLoaded", e=> {
  animate()
});

  return (
    <div className="Waveanimation">
      <svg>
        <path d="M10,10 L50,100 L90,50"></path>
      </svg>
    </div>
  );
}

export default Waveanimation;