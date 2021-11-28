import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import WinFrameBox from "./elements/WinFrameBox";
import Wall from "./elements/Wall";
import Glass from "./elements/Glass";

const WindowCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 3, 9], fov: 50, near: 2 }}>
      <directionalLight color="#ACAAAA" position={[5.21, 9.101, 9.809]} />
      <gridHelper />
      {/* big window frames * bottom - top - left - right */}
      <WinFrameBox
        position={[0, 1.5, 0]}
        variant="big"
        size={[1.5, 0.2, 0.15]}
      />
      <WinFrameBox
        position={[0, 3.5, 0]}
        variant="big"
        size={[1.5, 0.2, 0.15]}
      />
      <WinFrameBox
        position={[-0.85, 2.5, 0]}
        variant="big"
        size={[0.2, 2.2, 0.15]}
      />
      <WinFrameBox
        position={[0.85, 2.5, 0]}
        variant="big"
        size={[0.2, 2.2, 0.15]}
      />

      {/* small details on window * bottom - top - left - right */}
      <WinFrameBox
        position={[0, 1.624, 0.046]}
        variant="small"
        size={[1.5, 0.05, 0.05]}
      />
      <WinFrameBox
        position={[0, 3.376, 0.046]}
        variant="small"
        size={[1.5, 0.05, 0.05]}
      />
      <WinFrameBox
        position={[-0.725, 2.528, 0.046]}
        variant="small"
        size={[0.05, 1.75, 0.05]}
      />
      <WinFrameBox
        position={[0.725, 2.528, 0.046]}
        variant="small"
        size={[0.05, 1.75, 0.05]}
      />

      {/* sticks in between glass * vert - hor */}
      <WinFrameBox
        position={[0, 2.508, 0.046]}
        variant="small"
        size={[0.025, 1.75, 0.05]}
      />
      <WinFrameBox
        position={[0, 2.528, 0.046]}
        variant="small"
        size={[1.5, 0.025, 0.05]}
      />

      {/* glass */}
      <Glass position={[0, 2.5, 0.05]} size={[1.4, 1.7, 0.01]} />

      {/* PLANE AS WALL */}
      <Wall position={[0, 2.5, 0.04]} size={[10, 5, 1]} />

      {/* make it interactive */}
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas>
  );
};

export default WindowCanvas;
