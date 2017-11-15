import React from 'react';
import { aframe } from 'aframe'; /* linter pls shut up */
/*https://medium.com/@mackplevine/node-js-get-pixels-getting-pixels-at-specific-sectors-of-an-image-using-ndarray-e6d4cb285d36*/
const CoolBoxesCollection = () => {
  const coolBoxArray = [
    {
      position:"-.45 .15 -1",
        rotation:"0 0 0",
        width:".2", height:".2", depth:".2",
        color:"#cc3333",
    },
    {
      position:".60 .15 -1",
        rotation:"0 0 0",
        width:".2", height:".2", depth:".2",
        color:"#33cc33"

    },
    {
      position:".120 .15 -1",
        rotation:"0 0 0",
        width:".2", height:".2", depth:".2",
        color:"#33cc33"

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
        <a-sky color="#01E5FE"></a-sky>
        <a-plane
          rotation="-90 0 0"
          color="#ccff99"
          height="40"
          width="40"></a-plane>
          <CoolBoxesCollection />
     </a-scene>
  );
};
