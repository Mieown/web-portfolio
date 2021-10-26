import React, { useEffect } from 'react';
import './WaveLoading.css';


function WaveLoading() {

let xs = []
for (var i = 0; i < 150; i++) {
  xs.push(i)
}

let t = 0

function animate() {

  let points = xs.map(x => {

    let y = 200 + 5 * Math.sin((x + t) /4)
    
    return [x, y]
  })

  let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
  }).join(" L")

  let testapp = document.querySelector("path")
  testapp.setAttribute("d", path)

  t += 0.42

  requestAnimationFrame(animate)
}

// window.addEventListener("DOMContentLoaded", e=> {
//   animate()
// });

useEffect(() => {
   
  console.log("hejsan");
  animate();

});

  return (
    <div className="WaveLoading">
      <svg>
        <path d="M10,10 L50,100 L90,50"></path>
      </svg>
    </div>
  );
}

export default WaveLoading;