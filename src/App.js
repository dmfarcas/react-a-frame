import React from 'react';
import { aframe } from 'aframe'; /* linter pls shut up */
import { aframeParticleSystemComponent }  from 'aframe-particle-system-component';
import snow from './assets/snow.jpg';
/*https://medium.com/@mackplevine/node-js-get-pixels-getting-pixels-at-specific-sectors-of-an-image-using-ndarray-e6d4cb285d36*/

const w = 'white';
const b = 'black';
const p = 'pink';
const r = 'red';
const g = 'grey'

const panda = [
[w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ],
[w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ],
[w, b, b, b, b, b, w, w, b, b, b, b, b, w, w, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ],
[w, b, b, b, b, b, b, b, w, w, w, w, w, b, b, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ],
[w, b, b, b, b, b, w, w, w, w, w, w, w, w, w, b, b, b, b, b, w, w, w, r, r, r, r, w, w, w, w, w, w, w, w ],
[w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w, b, b, b, w, w, r, r, r, r, r, r, r, r, w, w, w, w, w, w ],
[w, w, w, b, w, w, w, w, w, w, w, w, w, w, w, w, w, b, w, r, r, r, r, r, r, r, r, r, r, r, r, r, r, w, w ],
[w, w, w, b, w, w, w, w, w, w, w, w, w, w, w, w, w, b, r, r, r, r, r, r, r, r, r, r, g, r, r, r, r, r, w ],
[w, w, w, b, w, w, b, b, w, w, w, w, w, b, b, w, w, b, r, g, r, r, r, r, r, r, g, g, r, r, r, r, r, r, w ],
[w, w, w, b, w, b, b, w, b, w, w, w, b, w, b, b, w, b, g, r, r, r, r, r, r, g, r, r, r, r, r, r, r, w, w ],
[w, w, w, b, w, b, b, b, b, w, w, w, b, b, b, b, w, b, r, r, r, r, r, r, r, r, r, r, r, w, w, w, w, w, w ],
[w, w, w, b, w, w, b, b, w, w, w, w, w, b, b, w, w, b, b, b, b, b, r, r, r, r, r, r, w, w, w, w, w, w, w ],
[w, w, w, b, b, w, p, p, w, w, b, w, w, p, p, w, b, b, w, w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w ],
[w, w, w, b, b, b, w, w, w, w, w, w, w, w, w, b, b, b, b, b, w, w, b, b, b, w, w, w, w, w, w, w, w, w, w ],
[w, w, b, b, b, b, b, b, w, w, w, w, w, b, b, b, b, b, b, b, b, w, w, b, b, b, w, w, w, w, w, w, w, w, w ],
[w, w, w, b, b, b, b, b, b, b, b, b, b, w, w, w, b, b, b, b, b, w, w, b, b, b, w, w, w, w, w, w, w, w, w ],
[w, w, w, w, w, w, w, w, w, w, w, w, b, w, w, w, w, b, b, b, w, b, b, b, b, b, w, w, w, w, w, w, w, w, w ],
[w, w, w, w, w, w, w, w, w, w, w, w, b, b, b, w, w, w, w, w, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w ],
[w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, w, w, w, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w ],
[w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, b, b, b, b, b, w, w, w, w, w, w, w, w, w, w, w, w, w ],
[w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w ]
].reverse();

const CoolBoxesCollection = () => {
  return panda.map((x, xIndex) => {
    return x.map((y, yIndex) => {
      return (
          <a-box
            key={`${xIndex}${yIndex}`}
            position={`${yIndex} ${xIndex} -12`}
            width={0.99}
            height={0.99}
            depth={2}
            color={y}
          >
          <a-animation attribute="material.width" begin="0.99" to="0" dur="1000"></a-animation>

          </a-box>
      )
      // console.log("x", x , "x", xIndex, "y", y, "yIndex", yIndex);
    });
  });
}// coolBoxArray.map(({position, rotation, width, height, depth, color}, i) => {


  // return (
  //   <a-box
  //     key={i}
  //     position={position}
  //     rotation={rotation}
  //     width={width}
  //     height={height}
  //     depth={depth}
  //     color={color}
  //   ></a-box>
  // );
// });

export default () => {
  return (
    <a-scene>
      <a-assets>
         <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
       </a-assets>
       <a-entity position="0 2.25 -15" particle-system="preset: snow; particleCount: 5000; size: 0.5; maxAge: 2"></a-entity>
      <a-entity camera position="17 10 4" look-controls wasd-controls universal-controls />
      <a-light type="point" color="#fff" position="0 5 5"></a-light>

        <a-entity geometry="primitive: plane; height: 750; width: 750" position="0 -0.5 0" rotation="-90 0 0" material={`shader: flat; src: url(${snow}); repeat: 300 300`}></a-entity>

        <a-sky color="#bcd1e5">
          <a-root>
            <a-entity geometry="primitive: sphere;
                                radius: 5000;
                                segmentsWidth: 64;
                                segmentsHeight: 64" material="shader: flat;
                                src: url();
                                color: #a9c8e3;
                                fog: false" scale="-1 1 1">
           </a-entity>
          </a-root>
        </a-sky>



      <CoolBoxesCollection />
   </a-scene>
  );
};
