import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import WinFrameBox from "./elements/WinFrameBox";
import Wall from "./elements/Wall";
import Glass from "./elements/Glass";

import * as THREE from "three";

const WindowCanvas = ({ winSize }) => {
  let { height, width } = winSize;
  width = width / 50; // translate cm to units in 3d
  height = height / 50; // translate cm to units in 3d

  const bigFrame = 0.2; // ширина широкой внешней рамки

  const lowestPoint = 1.5 - bigFrame / 2; // нижняя грань
  const upperMiddlePoint = lowestPoint + height - bigFrame / 2; // позиция на оси y, куда должна ставиться верхняя рамка
  const vertMiddlePoint = height / 2 + lowestPoint; // позиция середины для элементов по y оси
  const widthOfInnersHor = width - bigFrame * 2;
  const heightOfInnerVert = height - bigFrame * 2;
  return (
    <Canvas camera={{ position: [0, 3, 9], fov: 50, near: 0.01 }}>
      <directionalLight
        color="#FFFFFF"
        intensity={1}
        position={[-2.5, 5.4, 4.5]}
      />
      <gridHelper />
      {/* big window frames * bottom - top - left - right */}
      <WinFrameBox
        position={[0, 1.5, 0]}
        variant="big"
        size={[width, bigFrame, 0.15]}
      />
      <WinFrameBox
        position={[0, upperMiddlePoint, 0]}
        variant="big"
        size={[width, bigFrame, 0.15]}
      />
      <WinFrameBox
        position={[-(width / 2 - bigFrame / 2), vertMiddlePoint, 0]}
        variant="big"
        size={[bigFrame, height, 0.15]}
      />
      <WinFrameBox
        position={[width / 2 - bigFrame / 2, vertMiddlePoint, 0]}
        variant="big"
        size={[bigFrame, height, 0.15]}
      />

      {/* small details on window * bottom - top - left - right */}
      <WinFrameBox
        position={[0, lowestPoint + bigFrame + 0.025, 0.046]}
        variant="small"
        size={[widthOfInnersHor, 0.05, 0.05]}
      />
      <WinFrameBox
        position={[0, upperMiddlePoint - bigFrame / 2 - 0.025, 0.046]}
        variant="small"
        size={[widthOfInnersHor, 0.05, 0.05]}
      />
      <WinFrameBox
        position={[-(width / 2) + bigFrame + 0.025, vertMiddlePoint, 0.046]}
        variant="small"
        size={[0.05, heightOfInnerVert, 0.05]}
      />
      <WinFrameBox
        position={[width / 2 - bigFrame - 0.025, vertMiddlePoint, 0.046]}
        variant="small"
        size={[0.05, heightOfInnerVert, 0.05]}
      />

      {/* sticks in between glass * vert - hor */}
      <WinFrameBox
        position={[0, vertMiddlePoint, 0.046]}
        variant="small"
        size={[0.025, heightOfInnerVert, 0.05]}
      />
      <WinFrameBox
        position={[0, vertMiddlePoint, 0.046]}
        variant="small"
        size={[widthOfInnersHor, 0.025, 0.05]}
      />

      {/* glass */}
      <Glass
        position={[0, vertMiddlePoint, 0.05]}
        size={[widthOfInnersHor, heightOfInnerVert, 0.01]}
      />

      {/* PLANE AS WALL */}
      <Wall position={[0, 2.5, 0.04]} size={[10, 5, 1]} />

      {/* make it interactive */}
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas>
  );
};

export default WindowCanvas;
