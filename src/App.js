import React from 'react';
import { aframe } from 'aframe'; /* linter pls shut up */
/*https://medium.com/@mackplevine/node-js-get-pixels-getting-pixels-at-specific-sectors-of-an-image-using-ndarray-e6d4cb285d36*/
const CoolBoxesCollection = () => {
  const coolBoxArray = [
    {
      position:"-.45 .15 -1",
        rotation:"0 0 0",
        width:".2", height:".2", depth:".2",
        color:"#FFCFAA",
    },
    {
      position:".60 .15 -1",
        rotation:"0 0 0",
        width:".2", height:".2", depth:".2",
        color:"#FFCFAA"

    },
    {
      position:".120 .15 -1",
        rotation:"0 0 0",
        width:".2", height:".2", depth:".2",
        color:"#552500"

    }
  ];

    return coolBoxArray.map(({position, rotation, width, height, depth, color}, i) => {
      return (
        <a-box
          key={i}
          position={position}
          rotation={rotation}
          width={width}
          height={height}
          depth={depth}
          color={color}
        ></a-box>
      );
    });
}

export default () => {
  return (
    <a-scene>
      <a-entity camera position="0 .7 0" look-controls wasd-controls universal-controls />
      <a-light type="point" color="#92D18B" position="0 5 5"></a-light>

        <a-sky color="#2D4471"></a-sky>
        <a-plane
          fog="true"
          rotation="-90 0 0"
          color="#ccff99"
          height="40"
          width="40"></a-plane>
          <CoolBoxesCollection />
     </a-scene>
  );
};
